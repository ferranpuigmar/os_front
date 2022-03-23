import { ContactModule } from '@services/homeService';
import React from 'react'
import { Nulable } from 'src/utils/types';
import styles from './contact-card.module.scss';

const ContactCard = ({ title, description, link, linkText, icon }: Partial<ContactModule>) => {

  const hasLink = link && linkText;
  console.log(link, linkText)
  const iconUrl = `${process.env.SERVER_URL}${icon?.data.attributes.url}`

  return (
    <div className={styles.card}>
      <div className={styles.card__icon}>
        <img src={iconUrl} width={icon?.data.attributes.width} alt={icon?.data.attributes.caption} />
      </div>
      <div className={styles.card__content}>
        {title && <h3 className={styles.card__title}>{title}</h3>}
        {description && <p className={styles.card__description}>{description}</p>}
        {hasLink && <a className={styles.card__link} target="_blank" href={link}>{linkText}</a>}
      </div>
    </div>
  )
}

export default ContactCard