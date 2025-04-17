import Header from '@/app/components/header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Pagamentos',
};

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
