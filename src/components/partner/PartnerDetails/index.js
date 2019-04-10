import React from "react"
import "./index.css"

const PartnerDetails = ({ data }) => {
  const { descriptions, partnerName1, partnerName2 } = data
  return (
    <div className="partner-details-container">
      <div className="partner-content-header partner-details-header-wrapper">
        <div className="partner-details-header patner-detail-animation-1">{partnerName2}</div>
        <div className="partner-details-header patner-detail-animation-2">{partnerName1}</div>
      </div>
      {descriptions.map((content, index) => (
        <div key={index} className="partner-description">
          <p>{content}</p>
        </div>
      ))}
    </div>
  )
}

export default PartnerDetails
