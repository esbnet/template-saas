import { type Stripe, loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';

export function useStripe() {
	const [stripe, setStripe] = useState<Stripe | null>(null);

	useEffect(() => {
		async function loadStripeAsync() {
			const stripeStancie = await loadStripe(
				process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!,
			);
			setStripe(stripeStancie);
		}

		loadStripeAsync();
	}, []);

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	async function createPaymentStripeCheckout(checkoutData: any) {
		if (!stripe) return console.log('Stripe not initialized');

		try {
			const response = await fetch('/api/stripe/create-pay-checkout', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(checkoutData),
			});

			const data = await response.json();

			await stripe.redirectToCheckout({ sessionId: data.sessionId });
		} catch (error) {
			console.log(error);
		}
	}

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	async function createSubscriptionStripeCheckout(checkoutData: any) {
		if (!stripe) return console.log('Stripe not initialized');

		try {
			const response = await fetch('/api/stripe/create-subscription-checkout', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(checkoutData),
			});

			const data = await response.json();

			await stripe.redirectToCheckout({ sessionId: data.sessionId });
		} catch (error) {
			console.log(error);
		}
	}

	async function hadleCreateStripePortal() {
		const response = await fetch('/api/stripe/create-portal', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();

		window.location.href = data.url;
	}

	return {
		createPaymentStripeCheckout,
		createSubscriptionStripeCheckout,
		hadleCreateStripePortal,
	};
}
