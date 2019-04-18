import React from 'react'
import './index.css'

const GraphDef = () => {
  return (
    <div className="tr2-graph-page">
      <p className="tr2-graph-title" data-aos="fade-up">
        ค่าใช้จ่ายด้านการวิจัยและพัฒนา ในภาคอุตสาหกรรมการผลิต จำแนกตามประเภทอุตสาหกรรม ปี 2560
      </p>
      <div className="tr2-graph-detail-wrapper row">
        <div className="col-lg-8" data-aos="fade-right">
          <img width={600} src={require('../../static/images/graph/graph6.png')} />
          <div className="tr2-graph-desc">
            <p>ค่าใช้จ่ายด้านการวิจัยและพัฒนา (ล้านบาท)</p>
          </div>
        </div>
        <div className="tr2-graph-detail col-lg-4">
          <p className="tr2-graph-detail-text" data-aos="fade-left" style={{ textAlign: 'center' }}>
            โดยอุตสาหกรรมยานยนต์มีค่าใช้จ่ายด้านการวิจัยและพัฒนาสูงที่สุด รองลงมาคืออุตสาหกรรมอาหาร และอุตสาหกรรมปิโตรเลียมตามลำดับ

          </p>
          <p className="tr2-graph-detail-text" data-aos="fade-left" style={{ textAlign: 'center' }}>
            โดยมีค่าใช้จ่ายรวมของทั้งอุตสาหกรรมการผลิตอยู่ที่ 80,041 ล้านบาท
          </p>
        </div>
      </div>
    </div>
  )
}

export default GraphDef
