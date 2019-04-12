import React from "react"
import { graphql } from "gatsby"
import "./index.css"
import { LayoutWrapper } from "../../components"
import PartnerDetails from "./PartnerDetails"
import PartnerContacts from "./PartnerContacts"
import PartnerHistory from "./PartnerHistory"
import { partnerDetails } from '../../static/data'

const Partner = ({ data }) => {
  console.log(partnerDetails);
  const { THName, ENName, description } = partnerDetails
  const { contacts, history } = partnerDetails

  const details = {
    THName,
    ENName,
    description,
  }

  return (
    < LayoutWrapper >
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

// export const query = graphql`
//   query($id: String!) {
//     partnersListJson(path: { eq: $id }) {
//       id
//       contacts {
//         contactName {
//           name
//           role
//           tel
//         }
//         contact
//         tel
//         tel2
//         homepage
//       }
//       portfolio {
//         research
//         product
//         product2
//       }
//       history {
//         year
//         status
//         cost
//         income
//         totalEmployee
//         research
//         service
//       }
//       details {
//         partnerName2
//         partnerName1
//         descriptions
//       }
//     }
//   }
// `

export default Partner
