import React from 'react'
import { Pie } from 'react-chartjs-2'
import './index.css'

const data = {
  labels: [
    'บุคลากรด้านการวิจัยและพัฒนา',
    'เครื่องจักรและอุปกรณ์',
    'ค่าใช้จ่ายอื่นๆ',
  ],
  datasets: [{
    data: [67486, 23875, 20141],
    backgroundColor: [
      '#2ecc71',
      '#3498db',
      '#e67e22',
    ],
    hoverBackgroundColor: [
      '#2ecc71',
      '#3498db',
      '#e67e22',
    ]
  }]
};

const options = {
  legend: {
    position: 'bottom',
  }
}

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
        <div className="col-lg-4 graph9-content">
          <p className="graph9-content-text" data-aos="fade-right">
            โดยค่าใช้จ่ายส่วนใหญ่ร้อยละ 54.45 เป็นค่าใช้จ่ายสำหรับบุคลากรด้านการวิจัยและพัฒนา
            </p>
          <p className="graph9-content-text" data-aos="fade-right">
            รองลงมาคือค่าใช้จ่ายสำหรับเครื่องจักรและอุปกรณ์ ร้อยละ 19.26 และค่าใช้จ่ายอื่นๆ ร้อยละ 16.25
            </p>
        </div>
        <div className="col-lg-8 graph9-pie" data-aos="fade-left">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  )
}

export default Graph9
