import React from 'react'
import Header from '@components/shared/Header/Header';

export type HeaderInfo = {
  logo: {
    id: number;
    url: string;
    name: string;
    width: string;
  }
}

type BasicLayoutProps = {
  children: React.ReactNode;
  headerInfo: HeaderInfo
}

const BasicLayout = ({ children, headerInfo }: BasicLayoutProps) => {

  return (
    <div id="wrapper">
      <Header headerInfo={headerInfo} />
      <main>
        {children}
      </main>
    </div>
  )
}

export default BasicLayout