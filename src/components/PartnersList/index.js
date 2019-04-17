import React, { memo } from 'react'
import { Link } from 'gatsby'
import './index.css'

import manufactureImg from '../../static/images/partnerType/manufacture.png'
import serviceImg from '../../static/images/partnerType/services.png'
import storeImg from '../../static/images/partnerType/store.png'
import random1 from '../../static/images/partnerType/1.png'
import random2 from '../../static/images/partnerType/2.png'
import random3 from '../../static/images/partnerType/3.png'
import random4 from '../../static/images/partnerType/4.png'
import random5 from '../../static/images/partnerType/5.png'
import random6 from '../../static/images/partnerType/6.png'

const PartnerListItem = ({ partner, index }) => {
  const getImage = (type) => {
    const random = Math.random();
    if (random <= 0.11)
      return manufactureImg
    if (random <= 0.22)
      return serviceImg
    if (random <= 0.33)
      return storeImg
    if (random <= 0.44)
      return random1
    if (random <= 0.55)
      return random2
    if (random <= 0.66)
      return random3
    if (random <= 0.76)
      return random4
    if (random <= 0.87)
      return random5
    if (random <= 1)
      return random6

    if (type === 'MANUFACTURING')
      return manufactureImg
    if (type === 'SERVICES')
      return serviceImg
    if (type === 'SALES')
      return storeImg
  }

  return (
    <div className='partners-list-wrapper col-md-4 col-6' key={`partner-${index}`} data-aos="fade-up">
      <Link to={`/partners/${partner.partnerId}`}>
        <div className='partners-images'>
          <img className='partners-main-images' src={getImage(partner.type)} alt='' />
          <div className='placeholder-content'>
            {partner.shortName}
          </div>
          <div className="placeholder-content-second">
            {partner.name}
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
