import React from 'react'
import { Line } from 'react-chartjs-2'
import './index.css'

const parse = (num) => {
  return typeof num === 'number' ? Number(num.toFixed(2)) : Number(Number(num).toFixed(2))
}

const getPersentage = (list) => {
  const min = list.reduce((prev, curr) => prev > curr ? curr : prev)
  const max = list.reduce((prev, curr) => prev > curr ? prev : curr)
  const distancePercentage = parse((max - min) / 100)
  const result = list.map((n, index) => {
    const val = parse(100 - ((max - parse(n)) / distancePercentage))
    return val >= 100 ? 100 : val
  })
  return result
}

const data1 = {
  labels: ['ปี 2554', 'ปี 2555', 'ปี 2556', 'ปี 2557', 'ปี 2558', 'ปี 2559', 'ปี 2560'],
  datasets: [
    {
      label: 'อัตราแลกเปลี่ยนเงินตราต่างประเทศ',
      fill: false,
      lineTension: 0.3,
      backgroundColor: '#ff357f',
      borderColor: '#ff357f',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#ff357f',
      pointBackgroundColor: '#ff357f',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: 'r#ff357f',
      pointHoverBorderColor: '#ff357f',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 10,
      data: [0, 18.02, 33.6, 50, 78.61, 88.19, 100],
    },
    {
      label: 'จำนวนประชากร (คน)',
      fill: false,
      lineTension: 0.3,
      backgroundColor: '#68fffc',
      borderColor: '#68fffc',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#68fffc',
      pointBackgroundColor: '#68fffc',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: '#68fffc',
      pointHoverBorderColor: '#68fffc',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [30.4944, 31.0848, 30.7319, 32.4841, 34.2524, 35.298, 32.659],
    },
  ],
}

export default () => {
  console.log(getPersentage([30.4944, 31.0848, 30.7319, 32.4841, 34.2524, 35.298, 32.659]))
  return (
    <div className="graph10-graph-page">
      <div className="graph-header graph-content" style={{ marginTop: 50 }}>
        <div data-aos="fade-up">
          <p className="graph-title">
            ตารางแสดงข้อมูลภาพรวมการสำรวจการวิจัยและพัฒนาและกิจกรรมนวัตกรรม
          </p>
          <p className="graph10-graph-subtitle">
            ในภาคอุตสาหกรรมของประเทศไทย ตั้งแต่ปี 2554-2560
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12" data-aos="fade-left">
          <Line data={data1} />
        </div>
      </div>
    </div>
  )
}
