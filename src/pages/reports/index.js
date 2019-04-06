import React from 'react'
import withBody from '../../hoc/withBody'
import { LayoutWrapper } from '../../components'
import _Reports from '../../static/data/report/reports'
import pdf from '../../static/images/pdf.png'
import './index.css'

const ReportItem = (props) => {
  const { id, name, detail, date } = props

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

class Reports extends React.Component {
  constructor() {
    super()
    this.state = {
      searchKeyword: '',
    }
  }

  search = ({ target }) => this.setState({ searchKeyword: target.value })

  render() {
    const { searchKeyword } = this.state
    const reports = _Reports
      .filter(({ name, detail, date }) => String(name + detail + date).includes(searchKeyword))
      .map((report) => <ReportItem {...report} />)

    return (
      <LayoutWrapper>
        <div className="report-container container">
          <div className="report-header">
            <div className="report-title font-th">ดาวน์โหลดเอกสาร</div>
            <div className="report-header-detail font-th">
              เอกสารสถิติข้อมูลย้อนหลังจำนวนทั้งสิ้น {reports.length} ไฟล์พร้อมให้ดาวน์โหลดแล้ว
              สามารถค้นหาไฟล์ได้ที่ช่องค้นหาข้างล่าง
            </div>
          </div>
          {/* <div className='report-search input-group'>
            <input
              type='text'
              onChange={this.search}
              className='form-control report-search-input'
              placeholder='ค้นหาเอกสารด้วย ชื่อไฟล์, รายละเอียด, วันที่'
            />
            <div className='input-group-append'>
              <button className='btn btn-outline-danger' type='button'>
                ค้นหาไฟล์
              </button>
            </div>
          </div> */}
          <div className="report-content row" data-aos="fade-up" data-aos-duration={1000}>
            {reports}
          </div>
        </div>
      </LayoutWrapper>
    )
  }
}

// const Reports = () => (
//   <LayoutWrapper>
//     <h1> Reports </h1>
//   </LayoutWrapper>
// )

export default withBody()(Reports)
