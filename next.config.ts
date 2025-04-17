import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */

	images: {
		remotePatterns: [new URL('https://lh3.googleusercontent.com/a/**')],
	},
};

export default nextConfig;
