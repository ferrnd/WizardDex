/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io', // Imagens da HP API
            },
            {
                protocol: 'https',
                hostname: 'placehold.co', // Imagem de fallback
            },
        ],
    },
};

export default nextConfig;
