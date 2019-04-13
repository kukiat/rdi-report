import React from "react"
import { graphql } from "gatsby"
import "./index.css"
import { LayoutWrapper } from "../../components"
import PartnerDetails from "./PartnerDetails"
import PartnerContacts from "./PartnerContacts"
import PartnerHistory from "./PartnerHistory"

const Partner = ({ data }) => {
  const { THName, ENName, description, contacts, history } = data.partnerDetailsJson

  const details = {
    THName,
    ENName,
    description,
  }

  return (
    <LayoutWrapper >
      <div className="partner-page container">
        <div className="row partner-page-card">
          <div className="col-lg-12 partner-page-right">
            <div className="partner-content">
              <PartnerDetails data={details} />
              <PartnerContacts data={contacts} />
              <PartnerHistory data={history} />
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
