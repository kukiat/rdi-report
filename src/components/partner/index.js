import React from "react"
import { graphql } from "gatsby"
import "./index.css"
import { LayoutWrapper } from "../../components"
import PartnerDetails from "./PartnerDetails"
import PartnerContacts from "./PartnerContacts"
import PartnerHistory from "./PartnerHistory"

const Partner = ({ data }) => {
  const { THName, ENName, mainProduct, description, contacts, history, portfolio } = data.partnerDetailsJson

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

export const query = graphql`
  query($id: String!){
    partnerDetailsJson(partnerId: {eq: $id }) {
      THName
      ENName
      mainProduct
      description
      contacts {
        address
        tel
        fax
        homepage
        contactName {
          name
          role
          tel
          email
        }
      }
      history {
        year
        stockStatus
        registeredCapital
        income
        totalEmployee
      }
      portfolio {
        research
        product
        process
      }
    }
  }
`

export default Partner
