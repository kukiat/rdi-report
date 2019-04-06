import React, { Component } from 'react'
import { graphql } from 'gatsby'
import classNames from 'classnames'
import './index.css'
import { LayoutWrapper } from '../../components'
import withBody from '../../hoc/withBody'

export const data = graphql`
  {
    allPartnersDetailJson(filter: { companyName: { eq: "rdi" } }) {
      edges {
        node {
          id
          companyName
          contacts {
            contactName {
              name
              role
              tel
              email
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
    }
  }
`

const PartnerDetails = ({ data }) => {
  console.log(data)
  const { descriptions, partnerName1, partnerName2 } = data
  return (
    <div className="">
      <div className="partner-page-left-name font-th">{partnerName2}</div>
      <div className="partner-page-left-name font-th">{partnerName1}</div>
      {descriptions.map((content, index) => (
        <div key={index} className="partner-description">
          <p className="font-th">{content}</p>
        </div>
      ))}
    </div>
  )
}

const PartnerContacts = ({ data }) => {
  const contacts = data
  return (
    <div className="partner-content-contacts container">
      <div className="partner-content-header font-th">ข้อมูลการติดต่อ</div>
      <div className="partner-content-item row">
        <div className="partner-content-title col-3 font-th">ชื่อผู้ติดต่อ</div>
        <div className="col-9 font-th">{contacts.contactName.name || '-'}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-content-title col-3 font-th">ตำแหน่ง</div>
        <div className="col-9 font-th">{contacts.contactName.role || '-'}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-content-title col-3 font-th">โทรศัพท์</div>
        <div className="col-9 font-th">{contacts.contactName.tel || '-'}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-content-title col-3 font-th">Email</div>
        <div className="col-9 font-th">{contacts.contactName.email || '-'}</div>
      </div>
      <hr />
      <div className="partner-content-item row">
        <div className="partner-content-title col-3 font-th">โทรศัพท์</div>
        <div className="col-9 font-th">{contacts.tel1 || '-'}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-content-title col-3 font-th">โทรสาร</div>
        <div className="col-9 font-th">{contacts.tel2 || '-'}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-content-title col-3 font-th">เว็บไซต์</div>
        <div className="col-9 font-th">{contacts.website || '-'}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-content-title col-3 font-th">ที่อยู่</div>
        <div className="col-9 font-th">{contacts.contact || '-'}</div>
      </div>
    </div>
  )
}

const PartnerHistory = ({ data }) => {
  const { cost, income, status, totalEmployee, year, research, service } = data
  return (
    <div className="container">
      <div className="partner-content-header font-th">ข้อมูลรายละเอียด</div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-6 font-th">ปีที่ก่อตั้ง</div>
        <div className="col-5 font-th">พ.ศ. {year || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-6 font-th">สถานะการถือหุ้น</div>
        <div className="col-5 font-th">{status || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-6 font-th">ทุนจดทะเบียน</div>
        <div className="col-5 font-th">{cost || '-'} บาท</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-6 font-th">รายได้หลักของบริษัทในปี 2560</div>
        <div className="col-5 font-th">{income || '-'} บาท</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-6 font-th">จำนวนพนักงานของบริษัทในปี 2560</div>
        <div className="col-5 font-th">{totalEmployee || '-'} คน</div>
      </div>
      <hr />
      <div className="partner-history-item row">
        <div className="partner-history-title col-6 font-th">การวิจัยและพัฒนาในปี 2560</div>
        <div className="col-5 font-th">{research || '-'} คน</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-6 font-th">กิจกรรมนวัตกรรมด้านผลิตภัณฑ์/บริการ</div>
        <div className="col-5 font-th">{service || '-'} คน</div>
      </div>
    </div>
  )
}

class Partner extends Component {
  state = {
    type: 'details',
    tabIndex: 0,
    partnerDetail: this.props.data.allPartnersDetailJson.edges[0].node,
  }

  changeTab = (type, tabIndex) => {
    if (this.state.type === type) return
    this.setState({
      type,
      tabIndex,
    })
  }

  managePartnerGroupByType = (type = 'details') => {
    const { contacts, details, history } = this.state.partnerDetail
    return {
      details: <PartnerDetails data={details} />,
      contacts: <PartnerContacts data={contacts} />,
      history: <PartnerHistory data={history} />,
    }[type]
  }

  getTabClass = (_tabIndex) => {
    const { tabIndex } = this.state
    if (tabIndex === _tabIndex) {
      return 'active'
    }
    return ''
  }

  render() {
    const { partnerDetail, type } = this.state
    return (
      <LayoutWrapper>
        <div className="partner-page container">
          <div className="row partner-page-card">
            <div className="col-4 partner-page-left">
              <img
                width="100%"
                src={`/static/c3e371dc5864fe9a4d8c80f6fa4fbfa0/f3646/1.png`}
                style={{ borderRadius: 10, marginBottom: 20 }}
              />
              <div className="partner-page-left-name">{partnerDetail.details.partnerName2}</div>
              <div className="partner-page-left-name">{partnerDetail.details.partnerName1}</div>
            </div>
            <div className="col-8 partner-page-right">
              <div className="partner-tab">
                <div
                  className={classNames('partner-tab-item-wrap', this.getTabClass(0))}
                  onClick={() => this.changeTab('details', 0)}
                >
                  ข้อมูลเบื้องต้น
                </div>
                <div
                  className={classNames('partner-tab-item-wrap', this.getTabClass(1))}
                  onClick={() => this.changeTab('history', 1)}
                >
                  รายละเอียด
                </div>
                <div
                  className={classNames('partner-tab-item-wrap', this.getTabClass(2))}
                  onClick={() => this.changeTab('contacts', 2)}
                >
                  ติดต่อ
                </div>
              </div>
              <div className="partner-content">{this.managePartnerGroupByType(type)}</div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    )
  }
}

export default withBody()(Partner)
