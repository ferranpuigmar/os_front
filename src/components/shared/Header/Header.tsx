import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-grid-system';
import { HeaderInfo } from '@components/shared/Layouts/BasicLayout/BasicLayout'
import { useQuery } from 'react-query';
import getLocales from '@services/getLocales';
import LangSelector from '@components/shared/LangSelector/LangSelector';
import styles from './header.module.scss';

type HeaderProps = {
  headerInfo: HeaderInfo;
}
const Header = ({ headerInfo }: HeaderProps) => {
  const { logo } = headerInfo;
  const { isLoading, isError, data, error } = useQuery('locales', getLocales)

  useEffect(() => {
    console.log('data: ', data)
  }, [data])

  return (
    <header className={styles.header}>
      <Container>
        <Row>
          <Col>
            <img title={logo.name} src={logo.url} width={logo.width} />
          </Col>
          <Col>
            <LangSelector locales={data} />
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header