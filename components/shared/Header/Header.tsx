import React from 'react'
import { Col, Container, Row } from 'react-grid-system';
import { HeaderInfo } from '../Layouts/BasicLayout/BasicLayout'

type HeaderProps = {
  headerInfo: HeaderInfo;
}
const Header = ({ headerInfo }: HeaderProps) => {
  const { logo } = headerInfo;

  return (
    <header>
      <Container>
        <Row>
          <Col>
            <img title={logo.name} src={logo.url} width={logo.width} />
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header