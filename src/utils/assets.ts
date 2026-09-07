/**
 * Asset URL resolver that works seamlessly with GitHub Pages subpaths,
 * custom domains, and local preview.
 */
export function getAssetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || './';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (base.endsWith('/')) {
    return `${base}${cleanPath}`;
  }
  return `${base}/${cleanPath}`;
}

export const TASKEARN_LOGO = getAssetUrl('images/taskearn_logo.jpg');
export const TASKEARN_BANNER = getAssetUrl('images/taskearn_banner.jpg');
