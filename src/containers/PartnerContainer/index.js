import React from "react"
import "./index.css"
import {
  LayoutWrapper,
  PartnerContacts,
  PartnerDetails,
  PartnerHistory
} from "../../components"

const PartnerContainer = ({ data }) => {
  const { THName, ENName, mainProduct, description, contacts, history, portfolio } = data

  const details = {
    THName,
    ENName,
    mainProduct,
    description,
  }
  return (
    <LayoutWrapper >
      <div className="container partner-page">
        <div className="col-lg-10 offset-lg-1">
          <div className="row partner-content">
            <div className="col-lg-12">
              <PartnerDetails data={details} />
            </div>
            <div className='col-lg-6'>
              <PartnerHistory data={{ ...history, ...portfolio }} />
            </div>
            <div className='col-lg-6'>
              <PartnerContacts data={{ ...contacts, ...portfolio }} />
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper >
  )
}

export default PartnerContainer
