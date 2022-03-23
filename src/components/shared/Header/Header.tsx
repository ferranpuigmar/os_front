import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-grid-system';
import { HeaderInfo } from '@components/shared/Layouts/BasicLayout/BasicLayout'
import { useQuery } from 'react-query';
import getLocales from '@services/getLocales';
import LangSelector from '@components/shared/LangSelector/LangSelector';
import Link from 'next/link';
import cx from 'classnames';

import styles from './header.module.scss';
import TransLink from '../TransLink';

type HeaderProps = {
  headerInfo?: HeaderInfo;
  headerCompact: boolean;
}
const Header = ({ headerInfo, headerCompact }: HeaderProps) => {

  const { isLoading, isError, data, error } = useQuery('locales', getLocales)

  return (
    <header className={cx(styles.header, headerCompact ? styles.headerCompact : '')}>
      <Container>
        <Row>
          <Col>
            <div className={styles.header__logo}><Link href="/"><img alt={headerInfo?.logo.name} title={headerInfo?.logo.name} src={headerInfo?.logo.url} width={headerInfo?.logo.width} /></Link></div>
          </Col>
          <Col>
            <TransLink href="/about">About</TransLink>
          </Col>
          <Col>
            <LangSelector locales={data} isLoading={isLoading} />
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header