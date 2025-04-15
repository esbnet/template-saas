import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center gap-3 h-screen">
			<h1 className="font-[font-family:var(--font-geist-sans)] text-5xl underline">
				Landing Page
			</h1>
			<div className="flex justify-center items-center gap-3 p-3 border border-gray-500">

			<Link href="/login">
				<button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded font-bold text-white"  >
					Login
				</button>
			</Link>
			<Link href="/dashboard">
				<button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded font-bold text-white"  >
					Dashboard
				</button>
			</Link>
			</div>

		</div>
	);
}
