'use server';

import { auth, signIn, signOut } from '@/app/lib/auth';

export async function handleAuth() {
	const session = await auth();

	if (session) {
		return await signOut({ redirectTo: '/' });
	}

	await signIn('google', { redirectTo: '/dashboard' });
}
