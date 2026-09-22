import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://kiranbabu-portfilo.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: '/private/', // Example of how to prevent indexing specific routes
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
