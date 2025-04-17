'use client';

import { useMercadoPago } from '@/app/hooks/use-mercado-pago';
import { useStripe } from '@/app/hooks/use-stripe';
import { useRouter } from 'next/navigation';

export default function Payment() {
	const route = useRouter();

	const {
		createPaymentStripeCheckout,
		createSubscriptionStripeCheckout,
		hadleCreateStripePortal,
	} = useStripe();

	const { createMercadoPagoCheckout } = useMercadoPago();

	return (
		<div className="relative flex flex-col gap-6 p-4">
			<h1 className="font-[font-family:var(--font-geist-sans)] text-5xl">
				Assinaturas
			</h1>

			<button
				type="button"
				className="bg-yellow-400 hover:bg-yellow-500 shadow-md px-6 py-3 rounded-lg font-semibold text-gray-900 transition duration-300 ease-in-out"
				onClick={
					() =>
						createPaymentStripeCheckout({
							testeId: '123',
						})
					// alert('oi')
				}
			>
				Pagamento Único
			</button>
			<button
				type="button"
				className="bg-yellow-400 hover:bg-yellow-500 shadow-md px-6 py-3 rounded-lg font-semibold text-gray-900 transition duration-300 ease-in-out"
				onClick={() =>
					createSubscriptionStripeCheckout({
						testeId: '123',
					})
				}
			>
				Assinatura Mensal
			</button>
			<button
				type="button"
				className="bg-yellow-400 hover:bg-yellow-500 shadow-md px-6 py-3 rounded-lg font-semibold text-gray-900 transition duration-300 ease-in-out"
				onClick={() => hadleCreateStripePortal()}
			>
				Gerenciar Assinaturas
			</button>

			<button
				type="button"
				className="bg-yellow-400 hover:bg-yellow-500 shadow-md px-6 py-3 rounded-lg font-semibold text-gray-900 transition duration-300 ease-in-out"
				onClick={() =>
					createMercadoPagoCheckout({
						testeId: '123',
						userEmail: '2Bv0k@example.com',
					})
				}
			>
				Criar Pagamento Mercado Pago
			</button>

			<div className="top-4 right-4 absolute">
				<button
					type="button"
					className="bg-yellow-400 hover:bg-yellow-500 shadow-md px-6 py-3 rounded-lg font-semibold text-gray-900 transition duration-300 ease-in-out"
					onClick={() => route.back()}
				>
					Voltar
				</button>
			</div>
		</div>
	);
}
