import React, { useEffect, useState } from 'react'
import Header from '@components/shared/Header/Header';
import getBasicLayoutService from '@services/getBaseLayoutService';

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
  headerCompact?: boolean;
}

const BasicLayout = ({ children, headerCompact = false }: BasicLayoutProps) => {

  const [headerInfo, setHeaderInfo] = useState<HeaderInfo>();

  const loadHeaderInfo = async () => {
    const headerInfoResponse = await getBasicLayoutService();
    const { Logo } = headerInfoResponse.data.attributes;
    setHeaderInfo({
      logo: {
        id: Logo.id,
        name: Logo.image.data.attributes.name,
        url: `${process.env.SERVER_URL}${Logo.image.data.attributes.url}`,
        width: Logo.image.data.attributes?.width?.toString()
      }
    })
  }

  useEffect(() => {
    loadHeaderInfo()
  }, [])

  return (
    <div id="wrapper">
      <Header headerInfo={headerInfo} headerCompact={headerCompact} />
      <main>
        {children}
      </main>
    </div>
  )
}

export default BasicLayout