import React from "react"
import { graphql } from "gatsby"
import "./index.css"
import { LayoutWrapper } from "../../components"
import PartnerDetails from "./PartnerDetails"
import PartnerContacts from "./PartnerContacts"
import PartnerHistory from "./PartnerHistory"

const Partner = ({ data }) => {
  const { contacts, details, history } = data.partnersListJson

  return (
    <LayoutWrapper>
      <div className="partner-page container">
        <div className="row partner-page-card">
          <div className="col-lg-4 partner-page-left">
            <img alt="" width={340} height={120} src={require("../../static/images/company/1.png")} />
            <div className="partner-page-left-wrapper">
              <p className="partner-page-left-name font-th">{details.partnerName2}</p>
              <p className="partner-page-left-name font-th">{details.partnerName1}</p>
            </div>
          </div>
          <div className="col-lg-8 partner-page-right">
            <div className="partner-content">
              <PartnerDetails data={details} />
              <PartnerContacts data={contacts} />
              <PartnerHistory data={history} />
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}

export const query = graphql`
  query($id: String!) {
    partnersListJson(path: { eq: $id }) {
      id
      contacts {
        contactName {
          name
          role
          tel
        }
        contact
        tel
        tel2
        homepage
      }
      portfolio {
        research
        product
        product2
      }
      history {
        year
        status
        cost
        income
        totalEmployee
        research
        service
      }
      details {
        partnerName2
        partnerName1
        descriptions
      }
    }
  }
`

export default Partner
