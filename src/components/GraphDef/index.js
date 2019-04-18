import React from 'react'
import './index.css'


const Graph7 = () => {
  return (
    <div className="tr2-graph-page">
      <p className="tr2-graph-title" data-aos="fade-up">
        ค่าใช้จ่ายด้านการวิจัยและพัฒนา ในภาคอุตสาหกรรมการบริการ จำแนกตามประเภทอุตสาหกรรม ปี 2560
      </p>
      <div className="tr2-graph-detail-wrapper row">
        <div className="col-lg-4" data-aos="fade-right">
          <p className="tr2-graph-detail-text" data-aos="fade-right" style={{ textAlign: 'left' }}>
            โดยอุตสาหกรรมการเงินและประกันภัยมีค่าใช้จ่ายด้านการวิจัยและพัฒนาสูงที่สุด รองลงมาคืออุตสาหกรรมบริการด้านธุรกิจอื่นๆ
          </p>
          <p className="tr2-graph-detail-text" data-aos="fade-right" style={{ textAlign: 'left' }}>
            และอุตสาหกรรมการวิจัยและพัฒนาตามลำดับ โดยมีค่าใช้จ่ายรวมของทั้งอุตสาหกรรมการบริการอยู่ที่ 25,154 ล้านบาท
          </p>
        </div>
        <div className="tr2-graph-detail col-lg-8" data-aos="fade-left">
          <img width={500} src={require('../../static/images/graph/graph7.png')} alt="" />
          <div className="tr2-graph-desc">
            <p>ค่าใช้จ่ายด้านการวิจัยและพัฒนา (ล้านบาท)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graph7