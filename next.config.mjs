import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "placehold.co" },
      { hostname: "ik.imagekit.io" },
    ],
  },
}

export default withNextIntl(nextConfig)
