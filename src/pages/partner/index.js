import React from 'react'
import { graphql } from 'gatsby'
import { PartnerContainer } from '../../containers'
import NotFoundPage from '../404'

export const query = graphql`
  query($id: String){
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

export default ({ data, ...props }) => {
  const isCreateFromPages = props.pageContext.isCreatedByStatefulCreatePages
  return (
    isCreateFromPages ? (
      <NotFoundPage />
    ) : (
        <PartnerContainer data={data.partnerDetailsJson} />
      )
  )
}
