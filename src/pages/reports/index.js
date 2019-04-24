import React from 'react'
import { LayoutWrapper } from '../../components'
import { reports } from '../../static/data'
import './index.css'

const ReportItem = ({ name, detail, fileName }) => {
  return (
    <div className="report-item col-md-6">
      <a href="/static/files/sample-report.pdf" download={name}>
        <img
          width={60}
          src={require('../../static/images/others/pdf.png')}
          alt=""
          className="report-item-image"
        />
      </a>
      <div className="report-item-detail">
        <a href={require(`../../static/files/${fileName}`)} download={name} className="report-item-detail-name">
          {name}
        </a>
        <div className="report-item-detail-text">{detail}</div>
      </div>
    </div>
  )
}

const Reports = () => {
  return (
    <LayoutWrapper>
      <div className="report-container container">
        <div className="report-header row">
          <div className="report-title col-12">ดาวน์โหลดเอกสาร</div>
          <div className="report-header-detail col-lg-10 offset-md-1">
            <p>
              รายงานผลการสำรวจการวิจัยและพัฒนาและกิจกรรมนวัตกรรม ในภาคอุตสาหกรรมของประเทศไทย
              ประจำปี 2561
            </p>
            <p>
              และทำเนียบบริษัทเอกชนในประเทศไทยที่มีกิจกรรมด้านวิจัยและพัฒนา
              และกิจกรรมนวัตกรรม ประจำปี 2561
            </p>
          </div>
        </div>
        <div className="report-content row" data-aos="fade-up">
          <div className="col-lg-10 offset-lg-1">
            <div className="row">
              {reports.map((report, index) => (
                <ReportItem key={index} {...report} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default Reports