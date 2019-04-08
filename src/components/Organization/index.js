import React from 'react'
import './index.css'

export default () => {
  return (
    <div className="org-page row" style={{ marginTop: 50 }}>
      <div className="col-6" data-aos="fade-right">
        <img width={470} height={310} src={require('../../static/images/others/4.png')} />
      </div>
      <div className="col-6 org-content-section" data-aos="fade-left">
        <div className="org-content-header">
          <h1 className="font-de">RDI SURVEY 2018</h1>
        </div>
        <div className="org-content-desc mgt50 text-right">
          <p className="font-th" style={{ fontSize: 20 }}>
            รายงานผลการสำรวจการวิจัยและพัฒนาและกิจกรรมนวัตกรรม ในภาคอุตสาหกรรมของประเทศไทย ประจำปี 2561
          </p>
        </div>
        <div className="org-content-desc mgt20 text-justify" />
      </div>
    </div>
  )
}
