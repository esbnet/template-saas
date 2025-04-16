import { handleAuth } from '@/app/actions/handle-auth';
import { auth } from '@/app/lib/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
	const session = await auth();

	if (!session) {
		return redirect('/login');
	}

	return (
		<div className="relative flex flex-col gap-6 p-4">
			<h1 className="font-[font-family:var(--font-geist-sans)] text-5xl">
				Dashboard
			</h1>

			<div className="flex flex-col justify-center items-center gap-3 p-3">
				<div className="flex flex-col justify-center items-center gap-6 hover:bg-slate-900 p-6 border border-gray-500 rounded-2xl w-60">
					<h1 className="font-[font-family:var(--font-geist-sans)] text-4xl text-center">
						Assinaturas
					</h1>
					<p className="text-gray-600 text-center">
						Gerencie suas assinaturas e faça pagamentos
					</p>
					<Link
						href="/payment"
						className="bg-yellow-400 hover:bg-yellow-500 shadow-md px-6 py-3 rounded-lg font-semibold text-gray-900 transition duration-300 ease-in-out"
					>
						{' '}
						Pagamentos
					</Link>
				</div>

				{session.user?.image && (
					<form action={handleAuth} className="top-4 right-4 absolute">
						<button
							type="submit"
							className="bg-yellow-400 hover:bg-yellow-500 shadow-md px-6 py-3 rounded-lg font-semibold text-gray-900 transition duration-300 ease-in-out"
						>
							Sair
						</button>
					</form>
				)}
			</div>
		</div>
	);
}
