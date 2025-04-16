'use client';

import { handleAuth } from '@/app/actions/handle-auth';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
	return (
		<div className="flex flex-col justify-center items-center gap-6 p-4 h-full">
			<h1 className="font-[font-family:var(--font-geist-sans)] text-3xl">
				Acesse com sua conta google
			</h1>

			<form action={handleAuth}>
				<button
					type="submit"
					className="bg-yellow-400 hover:bg-yellow-500 shadow-md px-18 py-3 rounded-full font-semibold text-gray-900 transition duration-300 ease-in-out"
				>
					<FcGoogle size={24} />
				</button>
			</form>
		</div>
	);
}
