import React from 'react'
import './index.css'

const PartnerContacts = ({ data: contacts }) => {
  return (
    <div className="container partner-contact-container">
      <div className=" partner-content-header partner-section-header-wrapper font-th">ข้อมูลการติดต่อ</div>
      <div className="partner-content-item row">
        <div className="partner-content-title col-2 font-th">ชื่อผู้ติดต่อ</div>
        <div className="col-4 font-th">{contacts.contactName.name || '-'}</div>
        <div className="partner-content-title col-2 font-th">ตำแหน่ง</div>
        <div className="col-4 font-th">{contacts.contactName.role || '-'}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-content-title col-2 font-th">บเอร์ติดต่อ</div>
        <div className="col-4 font-th">{contacts.contactName.tel || '-'}</div>
        <div className="partner-content-title col-2 font-th">Email</div>
        <div className="col-4 font-th">{contacts.contactName.email || '-'}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-content-title col-2 font-th">โทรศัพท์</div>
        <div className="col-4 font-th">{contacts.tel1 || '-'}</div>
        <div className="partner-content-title col-2 font-th">โทรสาร</div>
        <div className="col-4 font-th">{contacts.tel2 || '-'}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-content-title col-2 font-th">เว็บไซต์</div>
        <div className="col-4 font-th">{contacts.website || '-'}</div>
        <div className="partner-content-title col-2 font-th">ที่อยู่</div>
        <div className="col-4 font-th">{contacts.contact || '-'}</div>
      </div>
    </div>
  )
}

export default PartnerContacts
