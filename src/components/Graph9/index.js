import React from 'react'
import './index.css'

export default () => {
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
      <div className="row">
        <div className="col-lg-4 graph9-content">
          <p className="graph9-content-text" data-aos="fade-right">
            โดยค่าใช้จ่ายส่วนใหญ่ร้อยละ 54.45 เป็นค่าใช้จ่ายสำหรับบุคลากรด้านการวิจัยและพัฒนา
            </p>
          <p className="graph9-content-text" data-aos="fade-right">
            รองลงมาคือค่าใช้จ่ายสำหรับเครื่องจักรและอุปกรณ์ ร้อยละ 19.26 และค่าใช้จ่ายอื่นๆ ร้อยละ 16.25
            </p>
        </div>
        <div className="col-lg-8" data-aos="fade-left">

          <div style={{
            width: '100%',
            height: '280px',
            backgroundColor: '#8c63b1',
          }} />

        </div>
      </div>
    </div>
  )
}
