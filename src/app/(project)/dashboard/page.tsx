import { handleAuth } from "@/app/actions/handle-auth";

import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
	const session = await auth();

	if (!session) {
		return redirect("/login");
	}

	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<h1 className="font-[font-family:var(--font-geist-sans)] text-5xl underline">
				Dashboard
			</h1>
			<p>Olá {session.user?.name}</p>
			<form action={handleAuth}>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded font-bold text-white cursor-pointer"
				>
					Sair
				</button>
			</form>
		</div>
	);
}
