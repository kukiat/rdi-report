import React, { memo } from 'react'
import { Link } from 'gatsby'
import './index.css'

import manufactureImg from '../../static/images/partnerType/manufacture.png'
import serviceImg from '../../static/images/partnerType/services.png'
import storeImg from '../../static/images/partnerType/store.png'

const PartnerListItem = ({ partner, index }) => {
  const getImage = (type) => {
    const random = Math.random();
    if (random <= 0.33)
      return manufactureImg
    if (random <= 0.65)
      return serviceImg
    if (random <= 1)
      return storeImg

    if (type === 'MANUFACTURING')
      return manufactureImg
    if (type === 'SERVICES')
      return serviceImg
    if (type === 'SALES')
      return storeImg
  }

  return (
    <div className='partners-list-wrapper col-lg-4 col-6' key={`partner-${index}`} data-aos="fade-up">
      <Link to={`/partners/${partner.partnerId}`}>
        <div className='partners-images'>
          <img className='partners-main-images' src={getImage(partner.type)} alt='' />
          <div className='placeholder-content'>
            {partner.shortName}
          </div>
          <div className="placeholder-content-second">
            {partner.subTypeName}
          </div>
        </div>
      </Link>
    </div>
  )
}

const PartnersList = ({ partners }) => {
  return (
    <div className="partners-list row">
      {
        !partners.length ? (
          <div css={{ textAlign: 'center', width: '100%', marginTop: '50px' }}>
            <h3>ไม่พบหัวข้อที่เลือก</h3>
          </div>
        ) : (
            partners.map((partner, index) => <PartnerListItem partner={partner} index={index} key={index} />)
          )
      }
    </div >
  )
}

export default memo(PartnersList)
