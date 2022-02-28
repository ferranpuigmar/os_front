import { GetLocalesServiceResponse } from '@services/getLocales'
import React from 'react'

type LangSelectorProps = {
  locales: GetLocalesServiceResponse[];
  isLoading?: boolean;
}
const LangSelector = ({ locales, isLoading }: LangSelectorProps) => {
  return (
    <ul>{locales.map(locale => <li>{locale.code}</li>)}</ul>
  )
}

export default LangSelector;