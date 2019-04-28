import React from 'react'
import { LayoutWrapper, ReportItem } from '../../components'
import { reports } from '../../static/data'
import './index.css'

const ReportsContainer = () => {
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
              {
                reports.map((report, index) =>
                  <ReportItem key={index} {...report} />
                )
              }
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default ReportsContainer
