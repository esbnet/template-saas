import MercadoPagoConfig from 'mercadopago';
import { type NextRequest, NextResponse } from 'next/server';
import crypto from 'node:crypto';

const mpClient = new MercadoPagoConfig({
	accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN as string,
});

export default mpClient;

export function validateMercadoPagoWebhook(req: NextRequest) {
	const xSignature = req.headers.get('x-signature');
	const xRequestId = req.headers.get('x-request-id');

	if (!xSignature || !xRequestId) {
		return NextResponse.json({ error: 'Missing headers' }, { status: 400 });
	}

	const signatureParts = xSignature.split(',');
	let ts = '';
	let v1 = '';
	// biome-ignore lint/complexity/noForEach: <explanation>
	signatureParts.forEach((part) => {
		const [key, value] = part.split('=');
		if (key.trim() === 'ts') {
			ts = value.trim();
		} else if (key.trim() === 'v1') {
			v1 = value.trim();
		}
	});

	if (!ts || !v1) {
		return NextResponse.json(
			{ error: 'Invalid x-signature header format' },
			{ status: 400 },
		);
	}

	const url = new URL(req.url);
	const dataId = url.searchParams.get('data.id');

	let manifest = '';
	if (dataId) {
		manifest += `id=${dataId}`;
	}
	if (xRequestId) {
		manifest += `request-id=${xRequestId}`;
	}

	manifest += `ts=${ts}`;

	const secret = process.env.MERCADO_PAGO_WEBHOOK_SECRET as string;
	const hmac = crypto.createHmac('sha256', secret);
	hmac.update(manifest);
	const gemeratedHash = hmac.digest('hex');

	if (!gemeratedHash || gemeratedHash !== v1) {
		return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
	}
}
