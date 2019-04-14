import React from 'react'
import './index.css'
import { Parallax } from 'react-scroll-parallax';

const HeaderGraph = () => {
  return (
    <Parallax y={[30, -30]}>
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
            <img
              width={600}
              height={400}
              className="bg-image"
              src={require('../../static/images/others/3.png')}
              alt=""
            />
          </div>
        </div>
      </div>
    </Parallax>
  )
}

export default HeaderGraph