import { ReactNode } from 'react';
import { PageProps } from '@/types/params';
import { LocaleProvider } from '@/components/providers/LocaleProvider';
import { locales } from '@/config/locales';

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function LangLayout({ children, params }: PageProps & { children: ReactNode }) {
  return (
    <LocaleProvider locale={params.lang}>
      {children}
    </LocaleProvider>
  );
}
