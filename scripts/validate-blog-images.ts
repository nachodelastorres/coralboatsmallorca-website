/**
 * Script de validación de metadata de imágenes del blog
 *
 * Ejecutar con: npx ts-node scripts/validate-blog-images.ts
 *
 * Este script verifica que todas las imágenes de los blogs tengan
 * las claves de traducción necesarias en todos los idiomas.
 */

import * as fs from 'fs';
import * as path from 'path';

// Idiomas soportados
const LOCALES = ['es', 'en', 'de', 'fr', 'it', 'ca'];

// Directorio de traducciones
const LOCALES_DIR = path.join(__dirname, '..', 'public', 'locales');

// Colores para la consola
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

interface BlogEntry {
  id: number;
  slug: string;
  imageAlt?: string;
  imageCaption?: string;
  secondaryImage1Alt?: string;
  secondaryImage2Alt?: string;
  secondaryImage1?: unknown;
  secondaryImage2?: unknown;
}

interface ValidationResult {
  blogId: number;
  slug: string;
  fields: {
    field: string;
    locales: { locale: string; exists: boolean; value?: string }[];
  }[];
}

function loadTranslations(locale: string): Record<string, unknown> {
  const filePath = path.join(LOCALES_DIR, locale, 'common.json');
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch {
    console.error(`${colors.red}Error loading ${filePath}${colors.reset}`);
    return {};
  }
}

function getNestedValue(obj: Record<string, unknown>, path: string): string | undefined {
  const parts = path.split('.');
  let current: unknown = obj;

  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }

  return typeof current === 'string' ? current : undefined;
}

function extractBlogData(): BlogEntry[] {
  // Read the blog-data.ts file
  const blogDataPath = path.join(__dirname, '..', 'src', 'data', 'blog-data.ts');
  const content = fs.readFileSync(blogDataPath, 'utf-8');

  const blogs: BlogEntry[] = [];

  // Match each blog entry
  const blogRegex = /\{\s*id:\s*(\d+),\s*slug:\s*['"]([^'"]+)['"]/g;
  const imageAltRegex = /imageAlt:\s*['"]([^'"]+)['"]/;
  const imageCaptionRegex = /imageCaption:\s*['"]([^'"]+)['"]/;
  const secondary1AltRegex = /secondaryImage1Alt:\s*['"]([^'"]+)['"]/;
  const secondary2AltRegex = /secondaryImage2Alt:\s*['"]([^'"]+)['"]/;
  const secondary1Regex = /secondaryImage1:\s*\w+/;
  const secondary2Regex = /secondaryImage2:\s*\w+/;

  // Split content by blog entries
  const blogEntries = content.split(/\},\s*\{/);

  for (const entry of blogEntries) {
    const idMatch = entry.match(/id:\s*(\d+)/);
    const slugMatch = entry.match(/slug:\s*['"]([^'"]+)['"]/);

    if (idMatch && slugMatch) {
      const blog: BlogEntry = {
        id: parseInt(idMatch[1]),
        slug: slugMatch[1],
      };

      const imageAltMatch = entry.match(imageAltRegex);
      if (imageAltMatch) blog.imageAlt = imageAltMatch[1];

      const imageCaptionMatch = entry.match(imageCaptionRegex);
      if (imageCaptionMatch) blog.imageCaption = imageCaptionMatch[1];

      const secondary1AltMatch = entry.match(secondary1AltRegex);
      if (secondary1AltMatch) blog.secondaryImage1Alt = secondary1AltMatch[1];

      const secondary2AltMatch = entry.match(secondary2AltRegex);
      if (secondary2AltMatch) blog.secondaryImage2Alt = secondary2AltMatch[1];

      // Check if blog has secondary images
      if (secondary1Regex.test(entry)) blog.secondaryImage1 = true;
      if (secondary2Regex.test(entry)) blog.secondaryImage2 = true;

      blogs.push(blog);
    }
  }

  return blogs.sort((a, b) => a.id - b.id);
}

function validateBlogs(): void {
  console.log(`\n${colors.bold}${colors.cyan}=== VALIDACIÓN METADATA IMÁGENES BLOG ===${colors.reset}\n`);

  // Load all translations
  const translations: Record<string, Record<string, unknown>> = {};
  for (const locale of LOCALES) {
    translations[locale] = loadTranslations(locale);
  }

  // Extract blog data
  const blogs = extractBlogData();
  console.log(`${colors.cyan}Blogs encontrados: ${blogs.length}${colors.reset}\n`);

  const results: ValidationResult[] = [];
  let totalMissing = 0;
  let blogsComplete = 0;
  let blogsIncomplete = 0;

  for (const blog of blogs) {
    const result: ValidationResult = {
      blogId: blog.id,
      slug: blog.slug,
      fields: [],
    };

    let blogHasMissing = false;

    // Check required fields
    const fieldsToCheck = [
      { field: 'imageAlt', key: blog.imageAlt, required: true },
      { field: 'imageCaption', key: blog.imageCaption, required: true },
    ];

    // Add secondary image fields if blog has secondary images
    if (blog.secondaryImage1) {
      fieldsToCheck.push({ field: 'secondaryImage1Alt', key: blog.secondaryImage1Alt, required: true });
    }
    if (blog.secondaryImage2) {
      fieldsToCheck.push({ field: 'secondaryImage2Alt', key: blog.secondaryImage2Alt, required: true });
    }

    for (const { field, key, required } of fieldsToCheck) {
      const localeResults: { locale: string; exists: boolean; value?: string }[] = [];

      if (!key) {
        // Key not defined in blog-data.ts
        for (const locale of LOCALES) {
          localeResults.push({ locale, exists: false });
        }
        if (required) {
          blogHasMissing = true;
          totalMissing += LOCALES.length;
        }
      } else {
        for (const locale of LOCALES) {
          const value = getNestedValue(translations[locale], key);
          const exists = value !== undefined && value.length > 0;
          localeResults.push({ locale, exists, value });
          if (!exists && required) {
            blogHasMissing = true;
            totalMissing++;
          }
        }
      }

      result.fields.push({ field, locales: localeResults });
    }

    results.push(result);

    if (blogHasMissing) {
      blogsIncomplete++;
    } else {
      blogsComplete++;
    }
  }

  // Print results
  for (const result of results) {
    const hasAnyMissing = result.fields.some(f => f.locales.some(l => !l.exists));
    const icon = hasAnyMissing ? `${colors.red}❌${colors.reset}` : `${colors.green}✅${colors.reset}`;

    console.log(`${icon} Blog ${result.blogId} (${result.slug})`);

    for (const field of result.fields) {
      const fieldStatus = field.locales.map(l => {
        return l.exists
          ? `${colors.green}✓${l.locale}${colors.reset}`
          : `${colors.red}✗${l.locale}${colors.reset}`;
      }).join(' ');

      const allMissing = field.locales.every(l => !l.exists);
      const fieldName = field.field.padEnd(20);

      if (allMissing) {
        console.log(`   - ${fieldName}: ${colors.red}FALTA EN TODOS LOS IDIOMAS${colors.reset}`);
      } else {
        console.log(`   - ${fieldName}: ${fieldStatus}`);
      }
    }

    if (hasAnyMissing) console.log('');
  }

  // Print summary
  console.log(`\n${colors.bold}${colors.cyan}=== RESUMEN ===${colors.reset}`);
  console.log(`- Blogs totales: ${blogs.length}`);
  console.log(`- ${colors.green}Blogs completos: ${blogsComplete}${colors.reset}`);
  console.log(`- ${colors.red}Blogs con metadata incompleta: ${blogsIncomplete}${colors.reset}`);
  console.log(`- ${colors.yellow}Claves faltantes totales: ${totalMissing}${colors.reset}`);

  if (totalMissing === 0) {
    console.log(`\n${colors.green}${colors.bold}¡Todas las imágenes tienen metadata completa!${colors.reset}\n`);
  } else {
    console.log(`\n${colors.yellow}Añade las claves faltantes en public/locales/{locale}/common.json${colors.reset}\n`);
  }
}

// Run validation
validateBlogs();
