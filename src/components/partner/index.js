import React, { useState } from 'react'
import { graphql } from 'gatsby'
import classNames from 'classnames'
import './index.css'
import { LayoutWrapper } from '../../components'
import PartnerDetails from './PartnerDetails'
import PartnerContacts from './PartnerContacts'
import PartnerHistory from './PartnerHistory'

const Partner = ({ data }) => {
  const [type, setType] = useState('details')

  const partnerDetail = data.partnersListJson

  const changeTab = (_type) => {
    return _type === type || setType(_type)
  }

  const managePartnerGroupByType = (_type = 'details') => {
    const { contacts, details, history } = partnerDetail
    return {
      details: <PartnerDetails data={details} />,
      contacts: <PartnerContacts data={contacts} />,
      history: <PartnerHistory data={history} />,
    }[_type]
  }

  const getTabClass = (_type) => (type === _type ? 'active' : '')

  return (
    <LayoutWrapper>
      <div className="partner-page container">
        <div className="row partner-page-card">
          <div className="col-4 partner-page-left">
            <img
              alt=""
              width="100%"
              src={`/static/c3e371dc5864fe9a4d8c80f6fa4fbfa0/f3646/1.png`}
              style={{ borderRadius: 10, marginBottom: 20 }}
            />
            <div className="partner-page-left-wrapper">
              <div className="partner-page-left-name">{partnerDetail.details.partnerName2}</div>
              <div className="partner-page-left-name">{partnerDetail.details.partnerName1}</div>
            </div>
          </div>
          <div className="col-8 partner-page-right">
            <div className="partner-tab">
              <div
                className={classNames('partner-tab-item-wrap', getTabClass('details'))}
                onClick={() => changeTab('details')}
              >
                ข้อมูลเบื้องต้น
              </div>
              <div
                className={classNames('partner-tab-item-wrap', getTabClass('history'))}
                onClick={() => changeTab('history')}
              >
                รายละเอียด
              </div>
              <div
                className={classNames('partner-tab-item-wrap', getTabClass('contacts'))}
                onClick={() => changeTab('contacts')}
              >
                ติดต่อ
              </div>
            </div>
            <div className="partner-content">{managePartnerGroupByType(type)}</div>
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
