import React from 'react'
import './index.css'

const PartnerContacts = ({ data: contacts }) => {
  return (
    <div className="container">
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

export default PartnerContacts
