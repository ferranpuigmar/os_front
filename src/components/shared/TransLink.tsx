import { useRouter } from 'next/router'
import Link from 'next/link'
import { ReactNode } from 'react';
import { pathTranslations } from 'config/routes';

type TranslatedLink = {
  href: string;
  children: ReactNode;
}

const TransLink = ({ href, children }: TranslatedLink) => {
  const { locale, defaultLocale } = useRouter()
  let translatedPath = null;
  let langPrefix = '/';

  if (locale) {
    translatedPath = pathTranslations[locale][href]
  }

  if (locale && defaultLocale !== locale) {
    langPrefix = locale
  }
  const as = translatedPath ? `${langPrefix}${translatedPath}` : undefined

  return (
    <Link href={href} as={as}>
      {children}
    </Link>
  )
}

export default TransLink