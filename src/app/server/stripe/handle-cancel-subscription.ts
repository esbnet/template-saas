import 'server-only';

import { db } from '@/app/lib/firebase';
import type Stripe from 'stripe';

export async function hadlerStripeCancelSubscription(
	event: Stripe.CustomerSubscriptionDeletedEvent,
) {
	const customerId = event.data.object.customer;

	const userRef = await db
		.collection('users')
		.where('stripeCustomerId', '==', customerId)
		.get();

	if (userRef.empty) {
		console.log('Usuário não encontrado');
		return;
	}

	const userId = userRef.docs[0].id;

	await db.collection('users').doc(userId).update({
		subscriptionStatus: 'inactive',
	});
}
