import { ContactData, Map } from '@services/homeService'
import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import ContactCard from '../ContactCard/ContactCard';
import MapLocation from '../Map/Map';

import styles from './contact.module.scss';

type ContactProps = {
  contactData: ContactData;
  map: Map;
}

const Contact = ({ contactData, map }: ContactProps) => {

  const { title } = contactData;

  return (
    <div className={styles.contact}>
      <Container>
        <Row>
          <Col>
            <h2 className={styles.contact__title}>{title ?? ''}</h2>
            <div className={styles.contact__list}>
              {contactData.contactModule.map(contact =>
                <ContactCard
                  {...contact}
                />
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <MapLocation latitude={map.latitude} longitude={map.longitude} />
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default Contact