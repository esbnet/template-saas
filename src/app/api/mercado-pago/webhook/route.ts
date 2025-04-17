import mpClient, { validateMercadoPagoWebhook } from '@/app/lib/mercado-pago';
import { handleMercadoPagoPayment } from '@/app/server/mercado-pago/handle-payment';
import { Payment } from 'mercadopago';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	try {
		validateMercadoPagoWebhook(req);

		const body = await req.json();
		const { type, data } = body;

		switch (type) {
			case 'payment':
				{
					const payment = new Payment(mpClient);
					const paymentData = await payment.get({ id: data.id });

					if (
						paymentData.status === 'approved' &&
						paymentData.date_approved !== null
					) {
						await handleMercadoPagoPayment(paymentData);
					}
				}
				break;

			case 'subscription_preapproval': // assinatura
				break;

			default:
				console.log('Unknown webhook type: ', type);
				break;
		}

		return NextResponse.json({ received: true }, { status: 200 });
	} catch (error) {
		console.log('Error handling webhook: ', error);
		return NextResponse.json(
			{ error: 'Error processing payment' },
			{ status: 500 },
		);
	}
}
