import { SpecialityDto } from '@services/dto/specialityDto'
import React from 'react'
import { GetFormat } from 'src/utils/getFormat';
import Waves from '@assets/svg/waves_mask.svg';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-grid-system';

import styles from './hero-home.module.scss';
import BubbleCard from '../BubbleCard/BubbleCard';
import { Format } from '@services/types';

const HeroHomeWrapper = styled.div<HeroHomeWrapperProps>`
  background: ${props => props.bgColor ? props.bgColor : "white"};
`;

const WrapperBg = styled.div<WrapperBgProps>`
  background-image: ${props => `url(${props.bgImage ?? ''})`};
  background-size: cover;
  background-position: center;
`

const WavesWrapper = styled.div`
  width: 100%;
`

const HeroHome = ({
  bgColor,
  bgImage,
  bubbles,
  title
}: HeroHomeProps) => {
  const hasBgImage = !!bgImage;
  let wrapperbgImageUrl: string | Format | null = null;

  if (hasBgImage) {
    wrapperbgImageUrl = typeof bgImage === "string" ? bgImage : bgImage.desktop.url;
  }
  wrapperbgImageUrl = `${process.env.SERVER_URL}${wrapperbgImageUrl} `;

  return (
    <HeroHomeWrapper className={styles.heroHome} bgColor={bgColor} >
      <Container>
        <Row align="start">
          <Col>
            <h1 className={styles.heroHome__title}>{title}</h1>
            <div className={styles.bubbleList}>
              {bubbles.map(bubble => <BubbleCard key={bubble.id} title={bubble.title} imageData={bubble.image} />)}
            </div>
            <div className={styles.notify}>Estem treballant en la nostra web, properament...</div>
          </Col>
        </Row>
      </Container>
      <WavesWrapper className={styles.wavesWrapper}><Waves /></WavesWrapper>
      <WrapperBg className={styles.heroHome__bg} bgImage={wrapperbgImageUrl} />
    </HeroHomeWrapper>
  )
}

export default HeroHome

export type HeroHomeProps = {
  title: string;
  bgColor: string;
  bgImage?: GetFormat | string | null;
  bubbles: SpecialityDto[];
}

type WrapperBgProps = { bgImage: string | null }
type HeroHomeWrapperProps = { bgColor: string }
