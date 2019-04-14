import React from "react"
import { string, shape } from 'prop-types'
import "./index.css"

const PartnerDetails = ({ data }) => {
  const { description, THName, ENName } = data
  return (
    <div className="partner-details-container">
      <div className="partner-content-header partner-details-header-wrapper">
        <div className="partner-details-header patner-detail-animation-1">{ENName}</div>
        <div className="partner-details-header patner-detail-animation-2">{THName}</div>
      </div>
      <div className="partner-description" data-aos="fade-up">
        <p>{description}</p>
      </div>
    </div>
  )
}

PartnerDetails.defaultProps = {
  data: {
    description: '',
    THName: '',
    ENName: '',
  }
}

PartnerDetails.propTypes = {
  data: shape({
    description: string,
    THName: string,
    ENName: string,
  })
}

export default PartnerDetails
