import { auth } from '@/app/lib/auth';
import stripe from '@/app/lib/stripe';
import { getOrCreateCustomerId } from '@/app/server/stripe/get-customer-id';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	const { testeId } = await req.json();
	const price = process.env.STRIPE_SUBSCRIPTION_PRICE_ID;

	console.log('Antes de verificar ', price);
	if (!price) {
		return NextResponse.json({ error: 'Price not found' }, { status: 500 });
	}
	console.log('Depois de verificar ', price);

	const session = await auth();
	const userId = session?.user?.id;
	const userEmail = session?.user?.email;

	if (!userId || !userEmail) {
		return NextResponse.json({ error: 'User not authorized' }, { status: 401 });
	}

	const customerId = await getOrCreateCustomerId(userId, userEmail);
	const metadata = { testeId, price, userId };

	try {
		const session = await stripe.checkout.sessions.create({
			line_items: [{ price, quantity: 1 }],
			mode: 'subscription',
			payment_method_types: ['card'],
			success_url: `${req.headers.get('origin')}/dashboard`,
			cancel_url: `${req.headers.get('origin')}/`,
			metadata,
			customer: customerId,
		});

		if (!session.url) {
			return NextResponse.json({ error: 'Session not found' }, { status: 500 });
		}

		return NextResponse.json({ sessionId: session.id }, { status: 200 });
	} catch (error) {
		console.error(error);
		NextResponse.json(
			{ error: 'Error creating checkout session' },
			{ status: 500 },
		);
	}
}
