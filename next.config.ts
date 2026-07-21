import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The WordPress site uses trailing slashes on every URL. Rankings depend on
  // exact URL parity, so this must stay on.
  trailingSlash: true,
};

export default nextConfig;
