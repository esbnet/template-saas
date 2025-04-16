import Header from '@/app/components/header';

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-col h-screen">
			<Header />
			{children}
		</div>
	);
}
