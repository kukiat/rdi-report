import React from 'react'
import { string, shape } from 'prop-types'
import { convertMoney, convertPeople, convertYear } from '../../../utils/general'
import './index.css'

const PartnerHistory = ({ data }) => {
  const { registeredCapital, income, stockStatus, totalEmployee, year, research, product, process } = data
  return (
    <div className="partner-history-container">
      <div className="partner-content-header partner-section-header-wrapper">ข้อมูลรายละเอียด</div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-lg-8">ปีที่ก่อตั้ง</div>
        <div className="col-lg-4">{convertYear(year) || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-lg-8">สถานะการถือหุ้น</div>
        <div className="col-lg-4">{stockStatus || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-lg-8">ทุนจดทะเบียน</div>
        <div className="col-lg-4">{convertMoney(registeredCapital) || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-lg-8">รายได้หลักในปี 2560</div>
        <div className="col-lg-4">{convertMoney(income) || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-lg-8">จำนวนพนักงานในปี 2560</div>
        <div className="col-lg-4">{convertPeople(totalEmployee) || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-lg-8">การวิจัยและพัฒนาในปี 2560</div>
        <div className="col-lg-4">{research || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-lg-8">กิจกรรมนวัตกรรมด้านผลิตภัณฑ์/บริการ</div>
        <div className="col-lg-4">{product || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-lg-8">ขั้นตอนด้านการผลิต</div>
        <div className="col-lg-4">{process || '-'}</div>
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
