import { handleAuth } from '@/app/actions/handle-auth';
import { auth } from '@/app/lib/auth';
import { redirect } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';

export default async function Login() {
	const session = await auth();

	if (session) {
		return redirect('/dashboard');
	}

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
