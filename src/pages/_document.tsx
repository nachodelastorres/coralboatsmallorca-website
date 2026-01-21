// pages/_document.tsx
// Note: GTM is handled in src/app/[lang]/layout.tsx (App Router)
// This file is kept minimal to avoid duplicate tracking scripts
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
