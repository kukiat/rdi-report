import React, { useState } from 'react'
import { graphql } from 'gatsby'
import withBody from '../../hoc/withBody'
import { LayoutWrapper, PartnersTable, PartnersList } from '../../components'
import { getPartnersList, getPartnersType } from '../../utils/selector/partners'
import './index.css'

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "company" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    }
    allPartnersTypeJson {
      edges {
        node {
          name
          type
        }
      }
    }
    allPartnersListJson {
      edges {
        node {
          id
          path
          type
          name
        }
      }
    }
  }
`

const Partners = (props) => {
  const [type, setType] = useState('all')
  const partnersType = getPartnersType(props.data)
  const partnersList = getPartnersList(props.data)

  const onFilterPartnerType = (_type) => {
    if (type === _type) return
    setType(_type)
  }

  const filterType = (type) => {
    return partnersList.filter((partner) => type === 'all' || partner.type === type)
  }

  return (
    <LayoutWrapper>
      <div className="partners-page container">
        <div className="row">
          <div className="col-8 offset-2">
            <div className="partners-header">
              <div className="partners-title">IN OUR CORNER</div>
              <div className="partners-content">
                We're proud of the company we keep. Over 500 customers from 50+ countries and counting. Here's a
                sampling of the amazing businesses we partner with and their stories.
              </div>
            </div>
          </div>
        </div>
        <div className="partner-table-wrapper">
          <PartnersTable onFilterPartnerType={onFilterPartnerType} partnerlist={partnersType} type={type} />
        </div>
        <div className="row" style={{ width: '100%' }}>
          <div className="col-10 offset-1">
            <PartnersList partners={filterType(type)} />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default withBody()(Partners)
