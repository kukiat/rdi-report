import React, { memo } from 'react'
import { Link } from 'gatsby'
import './index.css'

import manufactureImg from '../../static/images/partnerType/manufacture.png'
import serviceImg from '../../static/images/partnerType/services.png'
import storeImg from '../../static/images/partnerType/store.png'

const PartnerListItem = ({ partner, index }) => {
  const getImage = (type) => {
    if (type === 'MANUFACTURING')
      return manufactureImg
    if (type === 'SERVICES')
      return serviceImg
    if (type === 'SALES')
      return storeImg
  }

  return (
    <div className='partners-list-wrapper col-lg-4 col-sm-6' key={`partner-${index}`} data-aos="fade-up">
      <Link to={`/partners/${partner.partnerId}`}>
        <div className='partners-images'>
          <img className='partners-main-images' src={getImage(partner.type)} />
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
            partners.map((partner, index) => <PartnerListItem partner={partner} index={index} />)
          )
      }
    </div >
  )
}

// {/* // <Link className="row aabbaa" key={index} to={`/partners/${partner.partnerId}`}>
// //   <div className="col-6 animated-fade" css={{ padding: "13px", backgroundColor: index % 2 && "#f8f8f8" }}>
// //     {partner.name}
// //   </div>
// //   <div className="col-6 animated-fade" css={{ padding: "13px", backgroundColor: index % 2 && "#f8f8f8" }}>
// //     {partner.subTypeName}
// //   </div>
// // </Link> */}
// ))
export default memo(PartnersList)
