import React from 'react'
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
  angle: 60,
  h: 50,
  ir: 0,
  size: 100,
}
class Graph9 extends React.Component {
  render() {
    return (
      <div className="graph9-graph-page" ref={node => this.resf = node}>
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
              โดยค่าใช้จ่ายส่วนใหญ่ร้อยละ 54.45 เป็นค่าใช้จ่ายสำหรับบุคลากรด้านการวิจัยและพัฒนา
              </p>
            <p className="graph9-content-text" data-aos="fade-right">
              รองลงมาคือค่าใช้จ่ายสำหรับเครื่องจักรและอุปกรณ์ ร้อยละ 19.26 และค่าใช้จ่ายอื่นๆ ร้อยละ 16.25
              </p>
          </div>
          <div className="col-lg-9 graph9-pie" data-aos="fade-left">
            <Pie data={data} config={config} />
          </div>
        </div>
      </div>
    )
  }
}

export default Graph9
