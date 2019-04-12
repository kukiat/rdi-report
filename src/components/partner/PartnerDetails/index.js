import React from "react"
import "./index.css"

const PartnerDetails = ({ data }) => {
  const { description, THName, ENName } = data
  return (
    <div className="partner-details-container">
      <div className="partner-content-header partner-details-header-wrapper">
        <div className="partner-details-header patner-detail-animation-1">{ENName}</div>
        <div className="partner-details-header patner-detail-animation-2">{THName}</div>
      </div>
      <div className="partner-description">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default PartnerDetails
