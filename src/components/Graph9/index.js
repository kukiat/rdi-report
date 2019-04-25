import React, { useState, useEffect } from 'react'
import Pie from 'react-pie3d'
import './index.css'

const data = [
  {
    value: 67486,
    color: '#FF6384',
    label: 'บุคลากรด้านการวิจัยและพัฒนา '
  },
  {
    value: 23875,
    color: '#5ce0de',
    label: 'เครื่องจักรและอุปกรณ์ '
  },
  {
    value: 20141,
    color: '#fed330',
    label: 'ค่าใช้จ่ายอื่นๆ '
  },
]

const config = {
  angle: 50,
  h: 50,
  ir: 0,
}

const Graph9 = () => {
  const [innerWidth, setInnerWidth] = useState(0)
  const onResize = () => {
    setInnerWidth(window.innerWidth)
  }

  useEffect(() => {
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const getSize = () => {
    if (innerWidth < 473) return 55
    if (innerWidth < 768) return Math.ceil(innerWidth / 11)
    return 100
  }

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
        {/* ห้ามแก้เป็น col-4 เดียวคอนเท้นของกราฟจะแสดงไม่ครบ */}
        <div className="col-lg-3 graph9-content">
          <p className="graph9-content-text" data-aos="fade-right">
            <span>โดยค่าใช้จ่ายส่วนใหญ่ร้อยละ 61 </span>
            <span>เป็นค่าใช้จ่ายสำหรับบุคลากรด้านการวิจัยและพัฒนา </span>
            <span>รองลงมาคือค่าใช้จ่ายสำหรับเครื่องจักรและอุปกรณ์ </span>
            <span>ร้อยละ 21 </span>
            <span>และค่าใช้จ่ายอื่นๆ ร้อยละ 18 </span>


          </p>
          {/* <p className="graph9-content-text" data-aos="fade-right">
            รองลงมาคือค่าใช้จ่ายสำหรับเครื่องจักรและอุปกรณ์ ร้อยละ 19.26 และค่าใช้จ่ายอื่นๆ ร้อยละ 16.25
          </p> */}
        </div>
        <div className="col-lg-9 graph9-pie" data-aos="fade-left">
          <Pie
            data={data}
            config={{
              ...config,
              size: getSize(),
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Graph9
