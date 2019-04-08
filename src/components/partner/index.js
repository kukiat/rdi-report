import React, { useState } from 'react'
import { graphql } from 'gatsby'
import './index.css'
import { LayoutWrapper } from '../../components'
import PartnerDetails from './PartnerDetails'
import PartnerContacts from './PartnerContacts'
import PartnerHistory from './PartnerHistory'

const Partner = ({ data }) => {
  const [type, setType] = useState('details')

  const { contacts, details, history } = data.partnersListJson

  return (
    <LayoutWrapper>
      <div className="partner-page container">
        <div className="row partner-page-card">
          <div className="col-4 partner-page-left">
            <img alt="" width="100%" src={`/static/c3e371dc5864fe9a4d8c80f6fa4fbfa0/f3646/1.png`} />
            {/* <div className="partner-page-left-wrapper">
              <div className="partner-page-left-name">{partnerDetail.details.partnerName2}</div>
              <div className="partner-page-left-name">{partnerDetail.details.partnerName1}</div>
            </div> */}
          </div>
          <div className="col-8 partner-page-right">
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
