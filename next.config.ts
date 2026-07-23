import path from "node:path";
import type { NextConfig } from "next";

// Set by the GitHub Pages workflow only — a project page is served at
// https://<user>.github.io/<repo>/, so every internal path needs that prefix.
// Leave unset for local dev, a custom-domain deploy, or any other host.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "630-mobile-auto-repair";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  ...(isGithubPages && {
    output: "export",
    basePath: `/${repoName}`,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
