import React from 'react'
import PieChart from './PieChart'
import './index.css'

const Graph9 = () => {
  return (
    <div className="graph9-graph-page">
      <div className="graph-header graph-content" style={{ marginTop: 50 }}>
        <div data-aos="fade-up">
          <p className="graph-title">
            ค่าใช้จ่ายด้านการวิจัยและพัฒนา
            </p>
          <p className="graph9-graph-subtitle">
            จำแนกตามประเภทของค่าใช้จ่ายด้านการวิจัยและพัฒนา ปี 2560
            </p>
        </div>
      </div>
      <div className="row graph9-content-section">
        <div className="col-lg-3 graph9-content">
          <p className="graph9-content-text" data-aos="fade-right">
            โดยค่าใช้จ่ายส่วนใหญ่ร้อยละ 61 เป็นค่าใช้จ่ายสำหรับบุคลากรด้านการวิจัยและพัฒนา รองลงมาคือค่าใช้จ่ายสำหรับเครื่องจักรและอุปกรณ์ร้อยละ 21 และค่าใช้จ่ายอื่นๆ ร้อยละ 18
          </p>
        </div>
        <div className="col-lg-9 graph9-pie" data-aos="fade-left">
          <PieChart />
        </div>
      </div>
    </div>
  )
}

export default Graph9
