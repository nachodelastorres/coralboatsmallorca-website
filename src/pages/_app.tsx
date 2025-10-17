import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
// import '../styles/globals.css';
import '@/lib/fontawesome'; // esto importa la configuración solo una vez


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);

