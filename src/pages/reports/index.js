import React from 'react'
import { LayoutWrapper } from '../../components'
import { reports } from '../../static/data'
import './index.css'

const ReportItem = ({ id, name, detail, date }) => {
  return (
    <div key={id} className="report-item col-4">
      <a href="/static/files/sample-report.pdf" download={name}>
        <img
          width={60}
          src={require('../../static/images/others/pdf.png')}
          alt=""
          className="report-item-image"
        />
      </a>
      <div className="report-item-detail">
        <a href="/static/files/sample-report.pdf" download={name} className="report-item-detail-name">
          {name}
        </a>
        <div className="report-item-detail-text">{detail}</div>
        <div className="report-item-detail-date">{date}</div>
      </div>
    </div>
  )
}

const Reports = () => {
  return (
    <LayoutWrapper>
      <div className="report-container container">
        <div className="report-header">
          <div className="report-title font-th">ดาวน์โหลดเอกสาร</div>
          <div className="report-header-detail font-th">
            เอกสารสถิติข้อมูลย้อนหลังจำนวนทั้งสิ้น {reports.length} ไฟล์พร้อมให้ดาวน์โหลดแล้ว
          </div>
        </div>
        <div className="report-content row" data-aos="fade-up" data-aos-duration={1000}>
          {reports.map((report, index) => (
            <ReportItem key={index} {...report} />
          ))}
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default Reports
