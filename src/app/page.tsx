import Head from 'next/head';
import Link from 'next/link';
export default function Home() {
	return (
		// 	<div className="flex flex-col justify-center items-center gap-3 h-screen">
		// 		<h1 className="font-[font-family:var(--font-geist-sans)] text-5xl underline">
		// 			Landing Page
		// 		</h1>
		// 		<div className="flex justify-center items-center gap-3 p-3 border border-gray-500">
		// 			<Link href="/dashboard">
		// 				<button
		// 					type="button"
		// 					className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded font-bold text-white"
		// 				>
		// 					Dashboard
		// 				</button>
		// 			</Link>
		// 		</div>
		// 	</div>

		<div className="flex flex-col justify-center items-center bg-gradient-to-br from-slate-800 to-slate-950 min-h-screen text-white">
			<Head>
				<title>Make Money - Sistema de Geração de Renda</title>
				<meta
					name="description"
					content="Bem-vindo ao Make Money, o sistema que ajuda você a gerar renda de forma eficiente."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="space-y-6 text-center">
				<h1 className="font-bold text-5xl sm:text-6xl tracking-tight">
					Bem-vindo ao{' '}
					<span className="bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 font-bold text-transparent">
						Make Money
					</span>
				</h1>
				<p className="mx-auto max-w-lg text-lg sm:text-xl">
					O sistema que ajuda você a gerar renda de forma inteligente e
					eficiente.
				</p>
				<div>
					<Link href="/login">
						<button
							type="button"
							className="bg-yellow-400 hover:bg-yellow-500 shadow-md px-6 py-3 rounded-lg font-semibold text-gray-900 transition duration-300 ease-in-out"
						>
							Comece Agora
						</button>
					</Link>
				</div>
			</main>

			<footer className="bottom-4 absolute text-gray-200 text-sm">
				&copy; 2023 Make Money. Todos os direitos reservados.
			</footer>
		</div>
	);
}
