import { initMercadoPago } from '@mercadopago/sdk-react';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import { useEffect } from 'react';

type CheckoutData = {
	testeId: string;
	userEmail?: string;
};

export function useMercadoPago() {
	const router = useRouter();

	useEffect(() => {
		initMercadoPago(process.env.MERCADO_PAGO_ACCESS_TOKEN as string);
	}, []);

	async function createMercadoPagoCheckout({
		testeId,
		userEmail,
	}: CheckoutData) {
		try {
			const response = await fetch('/api/mercado-pago/create-checkout', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ testeId, userEmail }),
			});

			const data = await response.json();

			router.push(data.initPoint);
		} catch (error) {
			console.log(error);
			return NextResponse.json(
				{ error: 'Error creating checkout' },
				{ status: 500 },
			);
		}
	}

	return {
		createMercadoPagoCheckout,
	};
}
