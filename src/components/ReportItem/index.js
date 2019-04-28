import React from 'react'
import './index.css'

const ReportItem = ({ name, detail, fileName }) => {
  return (
    <div className="report-item col-md-6">
      <a
        href="/static/files/sample-report.pdf"
        download={name}
      >
        <img
          width={60}
          src={require('../../static/images/others/pdf.png')}
          alt=""
          className="report-item-image"
        />
      </a>
      <div className="report-item-detail">
        <a
          className="report-item-detail-name"
          href={require(`../../static/files/${fileName}`)}
          download={name}
        >
          {name}
        </a>
        <div className="report-item-detail-text">{detail}</div>
      </div>
    </div>
  )
}

export default ReportItem
