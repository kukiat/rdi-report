import React from "react"
import "./index.css"

const PartnerContacts = ({ data: contacts }) => {
  return (
    <div className="container partner-contact-container">
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
        <div className="col-lg-4">{contacts.tel2 || "-"}</div>
      </div>
      <div className="partner-content-item row">
        <div className="partner-contact-title col-lg-2">เว็บไซต์</div>
        <div className="col-lg-4">{contacts.website || "-"}</div>
        <div className="partner-contact-title col-lg-2">ที่อยู่</div>
        <div className="col-lg-4">{contacts.contact || "-"}</div>
      </div>
    </div>
  )
}

export default PartnerContacts
