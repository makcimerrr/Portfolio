import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		metadata: {
			metadataBase: new URL('https://makcimerrr.com'),
		},
		mdxRs: true,
	},
};

export default withContentlayer(nextConfig);
