import './globals.css';

import { Geist, Geist_Mono } from 'next/font/google';

import type { Metadata } from 'next';

const geistSans = Geist({
	weight: ['400', '500', '600', '700'],
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		default: 'Make Money',
		template: '%s | MM',
	},
	description: 'A simply saas template.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
