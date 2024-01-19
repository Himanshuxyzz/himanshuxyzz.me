const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true };
// const withBundleAnalyzer = require('@next/bundle-analyzer',{
//     enabled:process.env.ANALYZE === 'true'
// })
module.exports = withContentlayer(nextConfig);

// module.exports = withBundleAnalyzer(withContentlayer(nextConfig));