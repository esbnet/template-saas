"use client";

import { handleAuth } from "@/app/actions/handle-auth";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
	return (
		<div className="flex flex-col justify-center items-center gap-6 h-screen">
			<h1 className="font-[font-family:var(--font-geist-sans)] text-5xl">
				Login
			</h1>

			<form action={handleAuth} >
				<button
					type="submit"
					className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-8 py-2 rounded-4xl font-bold text-white cursor-pointer"
				>
									<FcGoogle size={24} />

					Entrar
				</button>
			</form>
		</div>
	);
}
