import React from "react"
import { string, shape } from 'prop-types'
import "./index.css"

const PartnerContacts = ({ data: contacts }) => {
  return (
    <div className="partner-contact-container">
      <div className="partner-content-header partner-section-header-wrapper">ข้อมูลการติดต่อ</div>
      <div className="partner-content-item row">
        <div className="partner-contact-title col-lg-2">ชื่อผู้ติดต่อ</div>
        <div className="col-lg-4">{contacts.contactName.name || "-"}</div>
        <div className="partner-contact-title col-lg-2">ตำแหน่ง</div>
        <div className="col-lg-4">{contacts.contactName.role || "-"}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-contact-title col-lg-2">เบอร์ติดต่อ</div>
        <div className="col-lg-4">{contacts.contactName.tel || "-"}</div>
        <div className="partner-contact-title col-lg-2">Email</div>
        <div className="col-lg-4">{contacts.contactName.email || "-"}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-contact-title col-lg-2">โทรศัพท์</div>
        <div className="col-lg-4">{contacts.tel1 || "-"}</div>
        <div className="partner-contact-title col-lg-2">โทรสาร</div>
        <div className="col-lg-4">{contacts.fax || "-"}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-contact-title col-lg-2">ที่อยู่</div>
        <div className="col-lg-4">{contacts.contact || "-"}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-contact-title col-lg-2">เว็บไซต์</div>
        <div className="col-lg-4">
          {
            contacts.homepage ?
              <a
                className='link-homepage' t
                arget='__blank'
                href={contacts.homepage}
              >
                {contacts.homepage}
              </a> : '-'
          }
        </div>
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
