import React from "react"
import { string, shape } from 'prop-types'
import "./index.css"

const PartnerContacts = ({ data: contacts }) => {
  let homepageLink = (
    contacts.homepage ?
      <a className='link-homepage' target='__blank' href={`http://${contacts.homepage}`} >
        {contacts.homepage}
      </a> : "-"
  )

  let tel1 = '-'
  const companyTel = contacts.tel
  if (companyTel) {
    tel1 = String(companyTel).split(/[/,:]/g).map((tel) => (
      <div>{tel}</div>
    ))
  }

  let tel2 = '-'
  const contactTel = contacts.contactName.tel
  if (contactTel) {
    tel2 = String(contactTel).split(/[/,:]/g).map((tel) => (
      <div>{tel}</div>
    ))
  }

  let emailLink = '-'
  const { email } = contacts.contactName
  if (email) {
    emailLink = String(email).split(/[/, :]/g).map((mail) => (
      <a className='partner-content-email' href={`mailto:${mail}`}>{mail}</a>
    ))
  }

  let faxContact = '-'
  const fax = contacts.fax
  if (fax) {
    faxContact = String(fax).split(/[/,:]/g).map((tel) => (
      <div>{tel}</div>
    ))
  }

  return (
    <div className="partner-contact-container">
      <div className="partner-content-header partner-section-header-wrapper">ข้อมูลการติดต่อ</div>
      <div className="partner-content-item row">
        <div className="partner-contact-title col-4">ที่อยู่</div>
        <div className="col-8">{contacts.address || "-"}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-contact-title col-4">โทรศัพท์</div>
        <div className="col-8">{tel1}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-contact-title col-4">โทรสาร</div>
        <div className="col-8">{faxContact}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-contact-title col-4">เว็บไซต์</div>
        <div className="col-8">{homepageLink}</div>
      </div>

      <div className="partner-content-item row" style={{ marginTop: 50 }}>
        <div className="partner-contact-title col-4">ชื่อผู้ติดต่อ</div>
        <div className="col-8">{contacts.contactName.name || "-"}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-contact-title col-4">ตำแหน่ง</div>
        <div className="col-8">{contacts.contactName.role || "-"}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-contact-title col-4">เบอร์ติดต่อ</div>
        <div className="col-8">{tel2}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-contact-title col-4">Email</div>
        <div className="col-8">{emailLink}</div>
      </div>
    </div>
  )
}

PartnerContacts.defaultProps = {
  data: {
    contacts: {
      contactName: {
        name: '',
        role: '',
        tel: '',
        email: ''
      },
      address: '',
      tel: '',
      fax: '',
      homepage: ''
    }
  }
}

PartnerContacts.propTypes = {
  data: shape({
    contacts: shape({
      contactName: shape({
        name: string,
        role: string,
        tel: string,
        email: string
      }),
      address: string,
      tel: string,
      fax: string,
      homepage: string
    })
  })
}

export default PartnerContacts
