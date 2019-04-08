import React from 'react'
import './index.css'

export default () => {
  return (
    <div className="org-page row">
      <div className="col-6" data-aos="fade-right">
        <img className="org-image" src={require('../../static/images/others/4.png')} alt="" />
      </div>
      <div className="col-6 org-content-section" data-aos="fade-left">
        <div className="org-content-header">
          <h1 className="font-de">RDI SURVEY 2018</h1>
        </div>
        <div className="org-content-desc mgt50 text-right">
          <p className="org-content-desc-text font-th">
            รายงานผลการสำรวจการวิจัยและพัฒนาและกิจกรรมนวัตกรรม ในภาคอุตสาหกรรมของประเทศไทย ประจำปี 2561
          </p>
        </div>
      </div>
    </div>
  )
}
