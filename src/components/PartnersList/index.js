import React, { memo } from 'react'
import { Link } from 'gatsby'
import './index.css'

const importAll = (r) => {
  return r.keys().map(r);
}

const IMAGES = importAll(require.context('../../static/images/partnerType/', false, /\.(png|jpe?g|svg)$/));


const PartnerListItem = ({ partner, index }) => {
  const getImage = (subType) => {
    const imgPath = IMAGES.find((imagePath) => imagePath.includes(subType))
    if (imgPath) {
      return imgPath
    }

    return IMAGES[Math.floor(Math.random() * IMAGES.length)];
  }

  return (
    <div className='partners-list-wrapper col-md-4 col-sm-6 col-xs-12' key={`partner-${partner.partnerId}`} data-aos="fade-up">
      <Link to={`/partners/${partner.partnerId}`}>
        <div className='partners-images'>
          <img className='partners-main-images' src={getImage(partner.subType)} alt='' />
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
