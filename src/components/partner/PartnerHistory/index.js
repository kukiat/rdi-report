import React from 'react'
import { string, shape } from 'prop-types'
import './index.css'

const PartnerHistory = ({ data }) => {
  const { cost, income, status, totalEmployee, year, research, service } = data
  return (
    <div className="container partner-history-container">
      <div className="partner-content-header partner-section-header-wrapper">ข้อมูลรายละเอียด</div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-lg-6">ปีที่ก่อตั้ง</div>
        <div className="col-lg-5">พ.ศ. {year || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-lg-6">สถานะการถือหุ้น</div>
        <div className="col-lg-5">{status || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-lg-6">ทุนจดทะเบียน</div>
        <div className="col-lg-5">{cost || '-'} บาท</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-lg-6">รายได้หลักของบริษัทในปี 2560</div>
        <div className="col-lg-5">{income || '-'} บาท</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-lg-6">จำนวนพนักงานของบริษัทในปี 2560</div>
        <div className="col-lg-5">{totalEmployee || '-'} คน</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-lg-6">การวิจัยและพัฒนาในปี 2560</div>
        <div className="col-lg-5">{research || '-'} คน</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-lg-6">กิจกรรมนวัตกรรมด้านผลิตภัณฑ์/บริการ</div>
        <div className="col-lg-5">{service || '-'} คน</div>
      </div>
    </div>
  )
}

PartnerHistory.defaultProps = {
  data: { cost: '', income: '', status: '', totalEmployee: '', year: '', research: '', service: '' }
}

PartnerHistory.defaultProps = {
  data: shape({
    cost: string,
    income: string,
    status: string,
    totalEmployee: string,
    year: string,
    research: string,
    service: string
  })
}
export default PartnerHistory
