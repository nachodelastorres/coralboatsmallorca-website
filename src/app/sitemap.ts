import { MetadataRoute } from 'next';
import { blogData } from '@/data/blog-data';
import { locales } from '@/config/locales';

const baseUrl = 'https://coralboatsmallorca.com';

// Páginas estáticas principales (sin prefijo de idioma en la ruta interna)
const staticPages = [
  '',
  '/about',
  '/contact',
  '/gallery',
  '/blog',
  '/alcudia-morning-boat-tour',
  '/alcudia-sunset-boat-tour',
  '/alcudia-private-boat-charter',
  '/boat-tours-alcudia',
  '/charter-pricing',
];

// Filtrar posts del blog que tengan slug válido
const validBlogPosts = blogData.filter(blog => blog.slug && blog.slug.trim() !== '');

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  
  // Generar todas las URLs del sitemap
  const urls: MetadataRoute.Sitemap = [];

  // 1. Página principal (raíz) - redirige al idioma por defecto
  urls.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 1.0,
  });

  // 2. Páginas estáticas para cada idioma
  staticPages.forEach(page => {
    locales.forEach(locale => {
      const url = `${baseUrl}/${locale}${page}`;
      
      // Prioridades diferentes según la página
      let priority = 0.8;
      let changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' = 'monthly';
      
      if (page === '') {
        priority = 1.0;
        changeFrequency = 'daily';
      } else if (page === '/blog') {
        priority = 0.9;
        changeFrequency = 'weekly';
      } else if (page.startsWith('/alcudia-') || page === '/boat-tours-alcudia') {
        priority = 0.9;
        changeFrequency = 'weekly';
      }

      urls.push({
        url,
        lastModified: currentDate,
        changeFrequency,
        priority,
      });
    });
  });

  // 3. Posts del blog dinámicos para cada idioma
  // Esto se actualiza automáticamente cuando se añaden nuevos posts a blogData
  validBlogPosts.forEach(blog => {
    locales.forEach(locale => {
      const url = `${baseUrl}/${locale}/blog-details/${blog.slug}`;
      
      urls.push({
        url,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  return urls;
}

