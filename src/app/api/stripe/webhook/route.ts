import { type NextRequest, NextResponse } from 'next/server';

import stripe from '@/app/lib/stripe';
import { hadlerStripeCancelSubscription } from '@/app/server/stripe/handle-cancel-subscription';
import { handleStripePayment } from '@/app/server/stripe/handle-payment';
import { handleStripeSubscription } from '@/app/server/stripe/handle-subscription';
import { headers } from 'next/headers';

const secret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
	try {
		const body = await req.text();
		const headersList = await headers();
		const signature = headersList.get('stripe-signature');

		if (!secret || !signature) {
			return new Response('No signature or secret', { status: 400 });
		}

		const event = stripe.webhooks.constructEvent(body, signature, secret);

		switch (event.type) {
			case 'checkout.session.completed': {
				// Pagamento concluído
				const metadata = event.data.object.metadata;
				if (metadata?.price === process.env.STRIPE_PRODUCT_PRICE_ID) {
					await handleStripePayment(event);
				}
				if (metadata?.price === process.env.STRIPE_SUBSCRIPTION_PRICE_ID) {
					await handleStripeSubscription(event);
				}
				break;
			}
			case 'checkout.session.expired': // Pagamento expirado
				console.log(
					'Enviar um email para o usuário informando que o pagamento expirou',
				);
				break;
			case 'checkout.session.async_payment_succeeded': // Boleto pago
				console.log(
					'Enviar um email para o usuário informando que o boleto foi pago',
				);
				break;
			case 'checkout.session.async_payment_failed': // Boleto falhou
				console.log(
					'Enviar um email para o usuário informando que o boleto falhou',
				);
				break;
			case 'customer.subscription.created': // Assinatura Criada
				console.log(
					'Enviar um email para o usuário informando que a assinatura foi criada',
				);
				break;
			case 'customer.subscription.deleted': // Assinatura Cancelada
				await hadlerStripeCancelSubscription(event);
				break;
			case 'customer.subscription.updated': // Assinatura Atualizada
				console.log(
					'Enviar um email para o usuário informando que a assinatura foi atualizada',
				);
				break;
			default:
				console.log(`Unhandled event type: ${event.type}`);
		}

		return NextResponse.json({ message: 'Webhook received' }, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 },
		);
	}
}
