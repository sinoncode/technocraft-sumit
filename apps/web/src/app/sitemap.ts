import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = 'https://technokraft.com';
  return [
    { url: `${origin}/`, lastModified: new Date() },
    { url: `${origin}/about`, lastModified: new Date() },
    { url: `${origin}/solutions`, lastModified: new Date() },
    { url: `${origin}/solutions/telecom`, lastModified: new Date() },
    { url: `${origin}/solutions/ai-data-centre`, lastModified: new Date() },
    { url: `${origin}/solutions/cybersecurity`, lastModified: new Date() },
    { url: `${origin}/solutions/ai-application-development`, lastModified: new Date() },
    { url: `${origin}/solutions/it-staffing`, lastModified: new Date() },
    { url: `${origin}/careers`, lastModified: new Date() },
    { url: `${origin}/blog`, lastModified: new Date() },
    { url: `${origin}/insights`, lastModified: new Date() },
    { url: `${origin}/white-papers`, lastModified: new Date() },
    { url: `${origin}/industries`, lastModified: new Date() },
    { url: `${origin}/contact`, lastModified: new Date() },
  ];
}
