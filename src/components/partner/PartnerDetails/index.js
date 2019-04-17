import React from "react"
import { string, shape } from 'prop-types'
import "./index.css"

const PartnerDetails = ({ data }) => {
  const { THName, ENName, mainProduct, description } = data
  return (
    <div className="partner-details-container">
      <div className="partner-content-header partner-details-header-wrapper">
        <div className="partner-details-header patner-detail-animation-1">{THName}</div>
        <div className="partner-details-header patner-detail-animation-2">{ENName}</div>
      </div>
      <div className="partner-mainproduct" data-aos="fade-up">
        <div className="partner-mainproduct-title">
          ผลิตภัณฑ์หลักของบริษัท
        </div>
        <p>{mainProduct || '-'}</p>
      </div>
      <div className="partner-description" data-aos="fade-up">
        <div className="partner-mainproduct-title">
          รายละเอียดบริษัท
        </div>
        <p>{description || '-'}</p>
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
