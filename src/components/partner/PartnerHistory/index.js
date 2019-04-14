import React from 'react'
import { string, shape } from 'prop-types'
import { convertMoney, convertPeople, convertYear } from '../../../utils/general'
import './index.css'

const PartnerHistory = ({ data }) => {
  const { registeredCapital, income, stockStatus, totalEmployee, year, research, product, process } = data
  return (
    <div className="partner-history-container" data-aos="fade-right">
      <div className="partner-content-header partner-section-header-wrapper">ข้อมูลรายละเอียด</div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-6">ปีที่ก่อตั้ง</div>
        <div className="col-6">{convertYear(year) || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-6">สถานะการถือหุ้น</div>
        <div className="col-6">{stockStatus || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-6">ทุนจดทะเบียน</div>
        <div className="col-6">{convertMoney(registeredCapital) || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-6">รายได้หลักในปี 2560</div>
        <div className="col-6">{convertMoney(income) || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-6">จำนวนพนักงานในปี 2560</div>
        <div className="col-6">{convertPeople(totalEmployee) || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-6">การวิจัยและพัฒนาในปี 2560</div>
        <div className="col-6">{research || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-6">กิจกรรมนวัตกรรมด้านผลิตภัณฑ์/บริการ</div>
        <div className="col-6">{product || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-6">ขั้นตอนด้านการผลิต</div>
        <div className="col-6">{process || '-'}</div>
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
