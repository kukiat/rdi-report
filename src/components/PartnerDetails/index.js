import React from "react"
import { string, shape } from 'prop-types'
import "./index.css"

const PartnerDetails = ({ data }) => {
  const { THName, ENName, mainProduct, description } = data

  let mainProducts = '-'
  if (mainProduct) {
    mainProducts = String(mainProduct).split(/[\n]/g).map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))
  }

  let descriptions = '-'
  if (description) {
    descriptions = String(description).split(/[\n]/g).map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))
  }

  return (
    <div className="partner-details-container">
      <div className="partner-content-header partner-details-header-wrapper">
        <div className="partner-details-header patner-detail-animation-1">{THName}</div>
        <div className="partner-details-header patner-detail-animation-2">{ENName.toUpperCase()}</div>
      </div>
      <div className="partner-mainproduct">
        <div className="partner-mainproduct-title">
          ผลิตภัณฑ์หลักของบริษัท
        </div>
        {mainProducts}
      </div>
      <div className="partner-description">
        <div className="partner-description-title">
          รายละเอียดบริษัท
        </div>
        {descriptions}
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
