/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,   // 🔥 forces correct root
  },
  distDir: ".next",     // 🔥 required for Vercel
};

export default nextConfig;
