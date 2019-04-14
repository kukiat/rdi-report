import React, { memo } from 'react'
import { Link } from 'gatsby'
import './index.css'

const PartnerListItem = ({ partner, index }) => {
  const getImage = (index) => {
    if (index % 9 === 0)
      return 'https://static.wixstatic.com/media/fa873f_b33c59801ca24998996655244834f965~mv2.png/v1/crop/x_26,y_0,w_303,h_200,q_85/fa873f_b33c59801ca24998996655244834f965~mv2.webp'
    if (index % 9 === 1)
      return 'https://static.wixstatic.com/media/fa873f_5fa5704bcea44d62830bfed6c8a5e760~mv2.png/v1/crop/x_26,y_1,w_303,h_199,q_85/fa873f_5fa5704bcea44d62830bfed6c8a5e760~mv2.webp'
    if (index % 9 === 2)
      return 'https://static.wixstatic.com/media/fa873f_6c011493a469441998d898a0e06562bc~mv2.png/v1/crop/x_26,y_0,w_303,h_200,q_85/fa873f_6c011493a469441998d898a0e06562bc~mv2.webp'
    if (index % 9 === 3)
      return 'https://static.wixstatic.com/media/fa873f_404c09baef7d4a528e37d78bb45ace8c~mv2.png/v1/crop/x_26,y_0,w_303,h_200,q_85/fa873f_404c09baef7d4a528e37d78bb45ace8c~mv2.webp'
    if (index % 9 === 4)
      return 'https://static.wixstatic.com/media/fa873f_4f6623b92acd447d8442bd979a628511~mv2.png/v1/crop/x_26,y_0,w_303,h_200,q_85/fa873f_4f6623b92acd447d8442bd979a628511~mv2.webp'
    if (index % 9 === 5)
      return 'https://static.wixstatic.com/media/fa873f_53135deab5774880846fe69f1628b2da~mv2.png/v1/crop/x_79,y_32,w_303,h_200,q_85/fa873f_53135deab5774880846fe69f1628b2da~mv2.webp'
    if (index % 9 === 6)
      return 'https://static.wixstatic.com/media/fa873f_660136d6214b47d0acd8beffcf9931e9~mv2.png/v1/crop/x_26,y_0,w_303,h_200,q_85/fa873f_660136d6214b47d0acd8beffcf9931e9~mv2.webp'
    if (index % 9 === 7)
      return 'https://static.wixstatic.com/media/fa873f_67dfbcb8de8b4bb3adca4ac4a8f31a4b~mv2.png/v1/crop/x_26,y_1,w_303,h_198,q_85/fa873f_67dfbcb8de8b4bb3adca4ac4a8f31a4b~mv2.webp'
    if (index % 9 === 8)
      return 'https://static.wixstatic.com/media/fa873f_3264d3e671d74ce19011a2c8248b1994~mv2.png/v1/crop/x_26,y_0,w_303,h_200,q_85/fa873f_3264d3e671d74ce19011a2c8248b1994~mv2.webp'
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
