import React from 'react'
import './index.css'

const PartnerDetails = ({ data }) => {
  const { descriptions, partnerName1, partnerName2 } = data
  return (
    <div className="partner-details-container">
      <div className="partner-page-left-name font-th">{partnerName2}</div>
      <div className="partner-page-left-name font-th">{partnerName1}</div>
      {descriptions.map((content, index) => (
        <div key={index} className="partner-description">
          <p className="font-th">{content}</p>
        </div>
      ))}
    </div>
  )
}

export default PartnerDetails
