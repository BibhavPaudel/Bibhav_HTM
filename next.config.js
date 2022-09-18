/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: { urlImports: ["https://cdn.jsdelivr.net"] },
  images :{
    domains :["ipfs.infura.io","sal-dapp.infura-ipfs.io"]
  }
}

module.exports = nextConfig
