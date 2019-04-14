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

  const emailLink = (
    contacts.contactName.email ?
      <a href={`mailto:${contacts.contactName.email}`}> {contacts.contactName.email} </a>
      :
      "-"
  )

  return (
    <div className="partner-contact-container" data-aos="fade-left">
      <div className="partner-content-header partner-section-header-wrapper">ข้อมูลการติดต่อ</div>
      <div className="partner-content-item row">
        <div className="partner-contact-title col-4">ที่อยู่</div>
        <div className="col-8">{contacts.contact || "-"}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-contact-title col-4">โทรศัพท์</div>
        <div className="col-8">{contacts.tel1 || "-"}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-contact-title col-4">โทรสาร</div>
        <div className="col-8">{contacts.fax || "-"}</div>
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
        <div className="col-8">{contacts.contactName.tel || "-"}</div>
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
