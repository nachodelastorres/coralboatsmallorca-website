import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from '@/config/locales';

/**
 * Normalize pathname by collapsing multiple consecutive slashes to single slash
 */
function normalizePathname(pathname: string): string {
  return pathname.replace(/\/+/g, '/');
}

export function middleware(request: NextRequest) {
  // Normalize pathname to handle multiple slashes
  const rawPathname = request.nextUrl.pathname;
  const pathname = normalizePathname(rawPathname);

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If pathname has locale, continue
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect root path to default locale (301 permanent)
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url, { status: 301 });
  }

  // 301 redirect all legacy routes (without locale prefix) to /en/...
  // This ensures SEO consolidation and avoids duplicate content
  const url = request.nextUrl.clone();
  // Ensure no double slashes: normalizePathname already ensures pathname starts with single /
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url, { status: 301 });
}

export const config = {
  // Skip Next.js internals, static files, and public assets
  // Matches all paths EXCEPT:
  // - api/* (API routes)
  // - _next/* (Next.js internals)
  // - assets/*, images/*, flags/* (public directories)
  // - favicon* (favicon files)
  // - Static file extensions:
  //   - Images: *.ico, *.png, *.jpg, *.jpeg, *.gif, *.svg, *.webp
  //   - Data: *.xml, *.json, *.txt
  //   - Scripts/Styles: *.js, *.css, *.map
  //   - Fonts: *.woff, *.woff2, *.ttf, *.eot
  //   - Manifest: *.webmanifest
  matcher: [
    '/((?!api|_next|assets|images|flags|favicon|.*\\.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg|.*\\.webp|.*\\.xml|.*\\.json|.*\\.txt|.*\\.js|.*\\.css|.*\\.map|.*\\.woff2?|.*\\.ttf|.*\\.eot|.*\\.webmanifest).*)',
  ],
};
