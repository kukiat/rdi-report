import React from "react"
import { parseLocaleString } from '../../utils/general'
import { Bar } from 'react-chartjs-2'
import "./index.css"


const data = {
  labels: ['การผลิต', 'การบริการ', 'การค้าส่ง/ค้าปลีก'],
  datasets: [
    {
      fill: false,
      lineTension: 0.3,
      backgroundColor: [
        '#68fffc',
        "#FF6384",
        '#4b6584'
      ],
      borderColor: '#68fffc',
      pointBorderColor: '#68fffc',
      pointBackgroundColor: '#68fffc',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: '#68fffc',
      pointHoverBorderColor: '#68fffc',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [20.57, 22.61, 8.05],
    }
  ],
}

const options = {
  responsive: true,
  // maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    callbacks: {
      label: (tooltipItem, data) => {
        return `ปี 2560: ${data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]}`
      }
    }
  },
  scales: {
    xAxes: [{ barPercentage: 0.3 }],
    yAxes: [{
      ticks: {
        min: 0,
        callback: (value) => {
          return parseLocaleString(value)
        }
      }
    }],
  },
}

const Graph4 = () => {
  return (
    <div className="graph4-page">
      <div className="graph4-content-header col-lg-12" data-aos="fade-right">
        <p>ค่าใช้จ่ายด้านการวิจัยและพัฒนาเฉลี่ยต่อกิจการในปี 2560</p>
      </div>
      <div className='row graph4-container'>
        <div className="col-lg-5 graph4-content-section">
          <div className="graph4-content-desc">
            <p className="graph4-content-desc-text" data-aos="fade-right">
              โดยอุตสาหกรรมการบริการมีค่าใช้จ่ายด้านการวิจัยและพัฒนาเฉลี่ยต่อกิจการสูงที่สุด
            </p>
            <p className="graph4-content-desc-text" data-aos="fade-right">
              รองลงมาคืออุตสาหกรรมการผลิตและอุตสาหกรรมค้าส่งค้าปลีกตามลำดับ
            </p>
            <p className="graph4-content-desc-text" data-aos="fade-up">
              ซึ่งในภาพรวมทุกอุตสาหกรรมมีค่าใช้จ่ายเฉลี่ยอยู่ที่ 16.9 ล้านบาทต่อกิจการ
          </p>
          </div>
        </div>
        <div className="col-lg-7 graph-4-section" data-aos="fade-left">
          <Bar options={options} data={data} />
          <div className="graph-4-desc">
            <p>ค่าใช้จ่ายด้านการวิจัยและพัฒนาเฉลี่ยต่อกิจการ (ล้านบาท/กิจการ)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graph4
