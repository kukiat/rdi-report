import React from 'react'
import './index.css'

const HeaderGraph = () => {
  return (
    <div className="header-graph-container">
      <div className="bg-header-graph">
        <div className="bg-header-graph-landing container">
          <div className="bg-header-graph-landing-text">
            <div className="bg-title">
              <b>RDI SURVEY 2018</b>
            </div>
            <div className="bg-line" />
            <div className="bg-desc">
              <p>
                รายงานผลการสำรวจการวิจัยและพัฒนาและกิจกรรมนวัตกรรม ในภาคอุตสาหกรรมของประเทศไทย ประจำปี 2561
              </p>
            </div>
          </div>
          <div className='bg-image-wrapper'>
            <img
              className="bg-image"
              src={require('../../static/images/others/3.png')}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderGraph