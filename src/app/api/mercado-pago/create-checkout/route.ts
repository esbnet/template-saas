import { type NextRequest, NextResponse } from 'next/server';

import mpClient from '@/app/lib/mercado-pago';
import { Preference } from 'mercadopago';

export async function POST(req: NextRequest) {
	const { testId, userEmail } = await req.json();

	try {
		const preference = new Preference(mpClient);

		const createdPreference = await preference.create({
			body: {
				external_reference: testId,
				metadata: {
					testId, // convertida para snake_case
					userEmail,
				},
				...(userEmail && { payer: { email: userEmail } }), // importante para pontuação mp
				items: [
					{
						id: '',
						title: '',
						unit_price: 1,
						quantity: 1,
						currency_id: 'BRL',
						category_id: 'services',
					},
				],
				payment_methods: {
					installments: 12, // maximo de parcela
					// excluded_payment_methods: [{ id: 'bolbradesco' }, { id: 'pec' }],
					// excluded_payment_types: [{ id: 'debit_card' }],
				},
				auto_return: 'approved',
				back_urls: {
					success: `${req.headers.get('origin')}/api/mercado-pago/pending`,
					failure: `${req.headers.get('origin')}/api/mercado-pago/pending`,
					pending: `${req.headers.get('origin')}/api/mercado-pago/pending`,
				},
			},
		});

		if (!createdPreference.id) {
			return NextResponse.json(
				{ error: 'Preference not created' },
				{ status: 500 },
			);
		}

		return NextResponse.json({
			preferenceId: createdPreference.id,
			initPoint: createdPreference.init_point,
		});
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error: 'Error creating preference' },
			{ status: 500 },
		);
	}
}
