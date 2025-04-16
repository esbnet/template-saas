import { auth } from '@/app/lib/auth';
import { GiTakeMyMoney } from 'react-icons/gi';

export default async function Header() {
	const session = await auth();
	console.log(session?.user?.image);
	return (
		<div className="flex justify-between items-center p-2 border-gray-800 border-b">
			<div className="flex justify-center items-center">
				<GiTakeMyMoney size={50} className="" />
				<span className="bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 font-bold text-transparent text-4xl">
					Make Money
				</span>
			</div>
			<div className="flex justify-center items-center gap-3 p-3 text-gray-400">
				{session?.user?.email && session.user.email}
				<div>
					{session?.user?.image && (
						<img
							src={session.user.image}
							alt="Avatar"
							width={50}
							height={50}
							className="rounded-full"
						/>
					)}
				</div>
			</div>
		</div>
	);
}
