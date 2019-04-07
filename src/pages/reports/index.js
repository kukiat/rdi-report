import React from 'react'
import withBody from '../../hoc/withBody'
import { LayoutWrapper } from '../../components'
import _Reports from '../../static/data/report/reports'
import pdf from '../../static/images/pdf.png'
import './index.css'

const ReportItem = ({ id, name, detail, date }) => {
  return (
    <div key={id} className="report-item col-4">
      <a href="/static/files/sample-report.pdf" download={name}>
        <img width={60} src={pdf} alt="" className="report-item-image" width="60px" />
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
  const reports = _Reports.map((report) => <ReportItem {...report} />)

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
          {reports}
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default withBody()(Reports)
