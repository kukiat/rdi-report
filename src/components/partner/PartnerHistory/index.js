import React from 'react'
import './index.css'

const PartnerHistory = ({ data }) => {
  const { cost, income, status, totalEmployee, year, research, service } = data
  return (
    <div className="container partner-history-container">
      <div className="partner-content-header partner-section-header-wrapper font-th">ข้อมูลรายละเอียด</div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-md-6 font-th">ปีที่ก่อตั้ง</div>
        <div className="col-md-5 font-th">พ.ศ. {year || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-md-6 font-th">สถานะการถือหุ้น</div>
        <div className="col-md-5 font-th">{status || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-md-6 font-th">ทุนจดทะเบียน</div>
        <div className="col-md-5 font-th">{cost || '-'} บาท</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-md-6 font-th">รายได้หลักของบริษัทในปี 2560</div>
        <div className="col-md-5 font-th">{income || '-'} บาท</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-md-6 font-th">จำนวนพนักงานของบริษัทในปี 2560</div>
        <div className="col-md-5 font-th">{totalEmployee || '-'} คน</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-md-6 font-th">การวิจัยและพัฒนาในปี 2560</div>
        <div className="col-md-5 font-th">{research || '-'} คน</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-md-6 font-th">กิจกรรมนวัตกรรมด้านผลิตภัณฑ์/บริการ</div>
        <div className="col-md-5 font-th">{service || '-'} คน</div>
      </div>
    </div>
  )
}

export default PartnerHistory
