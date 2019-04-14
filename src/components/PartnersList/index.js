import React, { memo } from 'react'
import { Link } from 'gatsby'
import './index.css'

const PartnerListItem = ({ partner, index }) => {
  const getImage = (index) => {
    return 'https://static.wixstatic.com/media/fa873f_b33c59801ca24998996655244834f965~mv2.png/v1/crop/x_26,y_0,w_303,h_200,q_85/fa873f_b33c59801ca24998996655244834f965~mv2.webp'
  }

  return (
    <div className='partners-list-wrapper col-lg-4' key={`partner-${index}`}>
      <Link to={`/partners/${partner.partnerId}`}>
        <div className='partners-images'>
          <img className='partners-main-images' src={getImage(index)} />
          <div className='placeholder-content'>
            {partner.name}
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
  const imageItems = partners.map((partner, index) => (
    <PartnerListItem partner={partner} index={index} />
  ))

  return (
    <div className="partners-list row">
      {imageItems}
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
