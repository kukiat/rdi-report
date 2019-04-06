import React from 'react'
import { Link } from 'gatsby'
import uuid from 'uuid/v1'
import './index.css'

const PartnersList = (props) => {
  return (
    <div className="partners-list container">
      <div className="images-list row">
        {props.partners.map((partner) => (
          <div data-aos="fade-up" data-aos-duration={1350} className="partners-list-wrapper col-3" key={uuid()}>
            <Link
              style={{
                width: '100%',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              to={`/partners/${partner.id}`}
            >
              <div className="partners-images">
                <img className="partners-main-images" src={partner.src} alt="" />
              </div>
              <div className="partners-text font-th">{partner.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PartnersList
