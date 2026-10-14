import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = "";
if (isGithubActions) {
  repo = process.env.GITHUB_REPOSITORY?.replace(/^.*?\//, "") || "";
}

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  ...(isProd ? { output: "export" as const } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: repo ? `/${repo}` : "",
  assetPrefix: repo ? `/${repo}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: repo ? `/${repo}` : "",
  },
};

export default nextConfig;
