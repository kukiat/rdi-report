import React from 'react'
import { parseLocaleString } from '../../utils/general'
import { Bar } from 'react-chartjs-2'
import './index.css'

const data = {
  datasets: [
    {
      yAxisID: 'right-position',
      type: 'line',
      label: 'จำนวนผู้ประกอบการ (กิจการ)',
      pointRadius: 0,
      pointHoverRadius: 0,
      borderWidth: 1.5,
      borderColor: '#FF6384',
      pointBorderColor: 'rgba(0,0,0,0)',
      fill: false,
      data: [
        35,
        2207,
        87,
      ],
    },
    {
      yAxisID: 'left-position',
      label: 'ค่าใช้จ่ายด้านการวิจัยและพัฒนา (ล้านบาท)',
      type: 'bar',
      pointRadius: 0,
      pointHoverRadius: 0,
      borderWidth: 1.5,
      backgroundColor: '#5ce0de',
      borderColor: '#5ce0de',
      hoverBackgroundColor: '#5ce0de',
      data: [560, 7995, 10192],
    },
  ],
}

const options = {
  // pieceLabel: { render: 'value', fontSize: 16 },
  responsive: true,
  tooltips: {
    mode: 'label',
  },
  elements: {
    line: {
      fill: false,
    },
  },
  legend: {
    position: 'bottom',
    display: false,
  },
  scales: {
    xAxes: [
      {
        barPercentage: 0.3,
        display: true,
        gridLines: {
          display: false,
        },
        labels: [
          'ธุรกิจปลีกยานยนต์และอุปกรณ์',
          'ธุรกิจค้าส่ง/ตัวแทนจำหน่าย',
          'ห้างสะดวกซื้อ ของชำ',
        ],
      },
    ],
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'left-position',
        gridLines: {
          display: true,
        },
        labels: {
          show: true,
        },
        ticks: {
          callback: (value) => {
            return parseLocaleString(value)
          }
        },
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'right-position',
        gridLines: {
          display: false,
        },
        labels: {
          show: true,
        },
        ticks: {
          callback: (value) => {
            return parseLocaleString(value)
          }
        },
      },
    ],
  },
}

const Graph8 = () => {
  return (
    <div className="graph8-graph-page">
      <div className="graph-header graph-content" style={{ marginTop: 50 }}>
        <div data-aos="fade-up">
          <p className="graph-title">
            ค่าใช้จ่ายด้านการวิจัยและพัฒนา ในภาคอุตสาหกรรมการค้าส่ง/ค้าปลีก
          </p>
          <p className="graph8-graph-subtitle">
            จำแนกตามประเภทอุตสาหกรรม ปี 2560
            </p>
        </div>
      </div>
      <div className="graph8-graph-detail">
        <div className="row">
          <div className="graph8-bar col-lg-8" data-aos="fade-right">
            <Bar
              data={data}
              options={options}
            />
          </div>
          <div className="graph8-content col-lg-4">
            <p className="graph8-content-text" data-aos="fade-left">
              โดยอุตสาหกรรมห้าง สะดวกซื้อ ของชำ มี80,041 สูงที่สุด
            </p>
            <p className="graph8-content-text" data-aos="fade-left">
              รองลงมาคืออุตสาหกรรมธุรกิจค้าส่ง/ตัวแทนจำหน่าย และธุรกิจค้าส่ง/ปลีกยานยนต์และอุปกรณ์ ตามลำดับ
            </p>
          </div>
          <div className='graph8-summary'>
            <p className="graph8-content-text-last" data-aos="fade-left">
              โดยมีค่าใช้จ่ายรวมของทั้งอุตสาหกรรมการค้าส่ง/ค้าปลีกอยู่ที่ 18,747 ล้านบาท
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graph8
