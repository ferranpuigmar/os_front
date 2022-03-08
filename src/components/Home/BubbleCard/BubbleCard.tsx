import { SpecialityImage } from '@services/dto/specialityDto'
import { Format } from '@services/types'
import Image from 'next/image'
import React from 'react'

import styles from './bubble-card.module.scss'

const BubbleCard = ({ title, imageData }: BubbleCard) => {
  let imageInfo: Partial<Format> = { ...imageData, url: `${process.env.SERVER_URL}${imageData.url}` }

  if (imageData.formats) {
    imageInfo = {
      ...imageData.formats.desktop,
      url: `${process.env.SERVER_URL}${imageData.formats.desktop.url}`
    }
  }

  return (
    <div className={styles.bubbleCard}>
      <div className={styles.bubbleCard__image}>
        <Image src={imageInfo.url as string} objectFit="cover" width={imageInfo.width} height={imageInfo.height} title={title} alt={title} />
      </div>
      <h3 className={styles.bubbleCard__title}>{title}</h3>
    </div>
  )
}

export default BubbleCard

type BubbleCard = {
  title: string;
  imageData: SpecialityImage;
}