import React from 'react'
import { string, shape } from 'prop-types'
import { convertMoney, convertPeople, convertYear } from '../../../utils/general'
import './index.css'

const PartnerHistory = ({ data }) => {
  const { registeredCapital, income, stockStatus, totalEmployee, year, research, product, process } = data

  let researchs = '-'
  if (research) {
    researchs = String(research).split(/[\n]/g).map((paragraph, index) => (
      <div key={index} style={{ marginBottom: 10 }}>
        {
          String(paragraph).split(/[ ]/g).map((p, index2) => (
            <span key={index + index2}>
              {p + ' '}
            </span>
          ))
        }
      </div>
    ))
  }

  let stockStatuses = '-'
  if (stockStatus) {
    stockStatuses = String(stockStatus).split(/ /g).map((paragraph, index) => (
      <span key={index}>
        {paragraph + ' '}
      </span>
    ))
  }

  let products = '-'
  if (product) {
    products = String(product).split(/[\n]/g).map((paragraph, index) => (
      <div key={index} style={{ marginBottom: 10 }}>{paragraph}</div>
    ))
  }

  let processs = '-'
  if (process) {
    processs = String(process).split(/[\n]/g).map((paragraph, index) => (
      <div key={index} style={{ marginBottom: 10 }}>{paragraph}</div>
    ))
  }

  return (
    <div className="partner-history-container">
      <div className="partner-content-header partner-section-header-wrapper">ข้อมูลรายละเอียด</div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-5">ปีที่ก่อตั้ง</div>
        <div className="col-7">{convertYear(year) || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-5">สถานะการถือหุ้น</div>
        <div className="col-7">{stockStatuses}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-5">ทุนจดทะเบียน</div>
        <div className="col-7">{convertMoney(registeredCapital) || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-5">รายได้หลักในปี 2560</div>
        <div className="col-7">{convertMoney(income) || '-'}</div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-5">จำนวนพนักงานในปี 2560</div>
        <div className="col-7">{convertPeople(totalEmployee) || '-'}</div>
      </div>
      <div className="partner-history-item row" style={{ marginTop: 50 }}>
        <div className="partner-history-title col-5">การวิจัยและพัฒนาในปี 2560</div>
        <div className="col-7">
          {researchs}
        </div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-5">กิจกรรมนวัตกรรมด้านผลิตภัณฑ์/บริการ</div>
        <div className="col-7">
          {products}
        </div>
      </div>
      <div className="partner-history-item row">
        <div className="partner-history-title col-5">กิจกรรมนวัตกรรมด้านกระบวนการ</div>
        <div className="col-7">
          {processs}
        </div>
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
