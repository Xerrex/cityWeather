import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('http://openweathermap.org/img/wn/**')],
  },
  
};

export default nextConfig;
