import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
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

class Partners extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'all',
      partnersList: getPartnersList(this.props.data),
      partnersType: getPartnersType(this.props.data),
    }
  }

  onFilterPartnerType = (type) => {
    if (type === this.state.type) return
    this.setState({ type })
  }

  filterType = (type) => {
    return this.state.partnersList.filter((pn) => type === 'all' || pn.type === type)
  }

  render() {
    const { partnersType } = this.state
    const { type } = this.state
    return (
      <LayoutWrapper>
        <div className="partners-page container">
          <div className="row">
            <div className="col-8 offset-2">
              <div className="partners-list-header">
                <div className="partners-list-title">IN OUR CORNER</div>
                <div className="partners-list-content">
                  We're proud of the company we keep. Over 500 customers from 50+ countries and counting. Here's a
                  sampling of the amazing businesses we partner with and their stories.
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 30 }}>
            <div>
              <PartnersTable onFilterPartnerType={this.onFilterPartnerType} partnerlist={partnersType} type={type} />
            </div>
          </div>
          <div className="row" style={{ width: '100%' }}>
            <div className="col-10 offset-1">
              <PartnersList partners={this.filterType(type)} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    )
  }
}

export default withBody()(Partners)
