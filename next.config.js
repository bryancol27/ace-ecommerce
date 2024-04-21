/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'www.movistar.com.co',
            'localhost',
            'C:/Users/Bryan/OneDrive/Escritorio/uploads/',
            process.env.NEXT_PUBLIC_CUSTOM_DOMAIN,
        ],
    },
};

module.exports = nextConfig;
