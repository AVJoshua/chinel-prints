export const BASE_PATH = "/chinel-prints";

export const SITE_URL = "https://avjoshua.github.io/chinel-prints";

/** Prefix public asset paths for static export + GitHub Pages */
export function assetPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}