import React from 'react'
import { graphql } from 'gatsby'
import { PartnersContainer } from '../../containers';

export const query = graphql`
  {
    allPartnersTypeJson {
      edges {
        node {
          name
          type
          subType {
            type
            name
          }
        }
      }
    }
    allPartnersListJson {
      edges {
        node {
          id
          partnerId
          subType
          type
          name
          shortName
        }
      }
    }
  }
`

export default (props) => {
  return <PartnersContainer data={props.data} />
}
