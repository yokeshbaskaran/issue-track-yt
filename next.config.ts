import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/old-route",  // Source route to be redirected
        destination: "/new-route",  // Target route
        permanent: true,  // This is a permanent redirect (301)
      },
    ];
  },
};

export default nextConfig;
