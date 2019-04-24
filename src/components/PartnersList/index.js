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

  let placeholderNames = String(partner.shortName).split(/ /g).map((word, index) => (
    <span key={index}>
      {word + ' '}
    </span>
  ))

  let placeholderSecondNames = String(partner.name).split(/ /g).map((word, index) => (
    <span key={index} style={{ display: 'inline-block', marginRight: 5 }}>
      {word + ' '}
    </span>
  ))


  return (
    <div className='partners-list-wrapper col-md-4 col-sm-6 col-xs-6' key={`partner-${partner.partnerId}`} data-aos="fade-up" data-aos-duration="500">
      <Link to={`/partners/${partner.partnerId}`}>
        <div className='partners-images'>
          <img className='partners-main-images' src={getImage(partner.subType)} alt='' />
          <div className='placeholder-content'>
            {placeholderNames}
          </div>
          <div className="placeholder-content-second">
            {placeholderSecondNames}
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
