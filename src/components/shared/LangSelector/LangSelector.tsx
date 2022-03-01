import { GetLocalesServiceResponse } from '@services/getLocales'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Arrow from '@assets/svg/arrow_down.svg'
import cx from 'classnames';
import styles from './lang-selector.module.scss'

type LangSelectorProps = {
  locales: GetLocalesServiceResponse[] | undefined;
  isLoading?: boolean;
}
const LangSelector = ({ locales, isLoading }: LangSelectorProps) => {
  const { locale, defaultLocale } = useRouter();
  const [currentLocale, setCurrentLocale] = useState<string | undefined>(locale);
  const [showLocales, setShowLocales] = useState<boolean>(false);

  if (isLoading && !locales) {
    return <p>...loading</p>
  }

  const handleChangeLocale = (locale: string) => {
    setCurrentLocale(locale)
    console.log('locale: ', locale)
  }

  const handleShowLocales = () => {
    setShowLocales(!showLocales)
  }

  return (
    <div className={styles.langSelector}>
      <div className={styles.langSelector__selector}>
        <span className={styles.langSelector__label}>IDIOMA</span>
        <span className={styles.langSelector__locale}>{(currentLocale as string).toUpperCase()}</span>
        <span className={cx(styles.langSelector__arrow, {
          [styles.langSelector__arrowActive]: showLocales
        })} onClick={handleShowLocales}><Arrow /></span>
      </div>
      <ul className={cx(styles.langSelector__list, {
        [styles.isActive]: showLocales
      })}>{locales?.map(locale => <li key={locale.id} onClick={() => handleChangeLocale(locale.code)}>{locale.code}</li>)}</ul>
    </div>
  )
}

export default LangSelector;