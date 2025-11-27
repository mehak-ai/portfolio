/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,   // <--- This FIXES WRONG ROOT DETECTION
  },
};

export default nextConfig;
