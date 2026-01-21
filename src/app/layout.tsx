import { ReactNode } from 'react';

// Root layout - acts as a pass-through wrapper.
// Each route group defines its own <html> and <body> with appropriate lang attribute.
// - [lang]/layout.tsx: dynamic lang based on URL parameter
// - (tour)/layout.tsx: lang="en" for legacy tour pages
// - (blog)/layout.tsx: lang="en" for legacy blog pages

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
