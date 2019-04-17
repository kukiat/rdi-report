import React from 'react'
import { Line } from 'react-chartjs-2'
import './index.css'

const BORDER_WIDTH = 2
const others = {
  fill: false,
  lineTension: 0.1,
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderWidth: 0,
  pointHoverRadius: 0,
  pointHoverBorderWidth: 1,
  pointRadius: 1,
  borderWidth: BORDER_WIDTH,
  pointHitRadius: 10,
}

const parse = (num) => {
  const val = typeof num === 'number' ? num : Number(num)
  return Number(val.toFixed(2))
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
      ...others,
      label: 'อัตราแลกเปลี่ยนเงินตราต่างประเทศ',
      backgroundColor: '#ff357f',
      borderColor: '#ff357f',
      pointBorderColor: '#ff357f',
      pointBackgroundColor: '#ff357f',
      pointHoverBackgroundColor: 'r#ff357f',
      pointHoverBorderColor: '#ff357f',
      data: getPersentage([30.4944, 31.0848, 30.7319, 32.4841, 34.2524, 35.298, 32.659])

    },
    {
      ...others,
      label: 'จำนวนประชากร (คน)',
      backgroundColor: '#68fffc',
      borderColor: '#68fffc',
      pointBorderColor: '#68fffc',
      pointBackgroundColor: '#68fffc',
      pointHoverBackgroundColor: '#68fffc',
      pointHoverBorderColor: '#68fffc',
      data: getPersentage([64076033, 64456695, 64785909, 65124716, 65729098, 65931550, 66188503]),
    },
    {
      ...others,
      label: 'ผลิตภัณฑ์มวลรวมภายในประเทศ (ล้านบาท)',
      backgroundColor: '#f1c40f',
      borderColor: '#f1c40f',
      pointBorderColor: '#f1c40f',
      pointBackgroundColor: '#f1c40f',
      pointHoverBackgroundColor: '#f1c40f',
      pointHoverBorderColor: '#f1c40f',
      data: getPersentage([10540134, 11375349, 11898710, 12141096, 13537500, 14366557, 15451959]),
    },
  ],
}

const data2 = {
  labels: ['ปี 2554', 'ปี 2555', 'ปี 2556', 'ปี 2557', 'ปี 2558', 'ปี 2559', 'ปี 2560'],
  datasets: [
    {
      ...others,
      label: 'ค่าใช้จ่ายด้านการวิจัยและพัฒนา (ล้านบาท) (BERD)',
      backgroundColor: '#2ecc71',
      borderColor: '#2ecc71',
      pointBorderColor: '#2ecc71',
      pointBackgroundColor: '#2ecc71',
      pointHoverBackgroundColor: '#2ecc71',
      pointHoverBorderColor: '#2ecc71',
      data: getPersentage([20683.73, 23349.63, 26768.19, 34444.58, 59442.56, 82701.23, 123942.04]),
    },
    {
      ...others,
      label: 'ค่าใช้จ่ายด้านการวิจัยและพัฒนา (ล้านเหรียญสหรัฐ)',
      backgroundColor: '#f39c12',
      borderColor: '#f39c12',
      pointBorderColor: '#f39c12',
      pointBackgroundColor: '#f39c12',
      pointHoverBackgroundColor: '#f39c12',
      pointHoverBorderColor: '#f39c12',
      data: getPersentage([678.28, 751.16, 871.02, 1060.35, 1735.43, 2342.94, 3795.03]),
    },
    {
      ...others,
      label: 'ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อประชากร (บาท/คน)',
      backgroundColor: '#7f8c8d',
      borderColor: '#7f8c8d',
      pointBorderColor: '#7f8c8d',
      pointBackgroundColor: '#7f8c8d',
      pointHoverBackgroundColor: '#7f8c8d',
      pointHoverBorderColor: '#7f8c8d',
      data: getPersentage([322.80, 362.25, 413.18, 528.90, 904.36, 1204.35, 1872.56]),
    },
    {
      ...others,
      label: 'ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อประชากร (เหรียญสหรัฐ /คน)',
      backgroundColor: '#9b59b6',
      borderColor: '#9b59b6',
      pointBorderColor: '#9b59b6',
      pointBackgroundColor: '#9b59b6',
      pointHoverBackgroundColor: '#9b59b6',
      pointHoverBorderColor: '#9b59b6',
      data: getPersentage([10.59, 11.65, 13.44, 16.28, 26.40, 35.54, 57.34]),
    },
    {
      ...others,
      label: 'ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อบุคลากรด้านการวิจัยและพัฒนาแบบ FTE (ล้านบาท/คน-ปี)',
      backgroundColor: '#34495e',
      borderColor: '#34495e',
      pointBorderColor: '#34495e',
      pointBackgroundColor: '#34495e',
      pointHoverBackgroundColor: '#34495e',
      pointHoverBorderColor: '#34495e',
      data: getPersentage([0.93, 0.97, 1.05, 0.88, 1.21, 1.33, 1.44]),
    },
    {
      ...others,
      label: 'ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อบุคลากรด้านการวิจัยและพัฒนาแบบรายหัว (ล้านบาท/คน)',
      backgroundColor: '#3498db',
      borderColor: '#3498db',
      pointBorderColor: '#3498db',
      pointBackgroundColor: '#3498db',
      pointHoverBackgroundColor: '#3498db',
      pointHoverBorderColor: '#3498db',
      data: getPersentage([0.83, 0.91, 0.96, 0.82, 1.01, 1.19, 1.35]),
    },
    {
      ...others,
      label: 'ค่าใช้จ่ายด้านการวิจัยและพัฒนาเฉลี่ยต่อบริษัท (ล้านบาท/ราย)',
      backgroundColor: '#ff4757',
      borderColor: '#ff4757',
      pointBorderColor: '#ff4757',
      pointBackgroundColor: '#ff4757',
      pointHoverBackgroundColor: '#ff4757',
      pointHoverBorderColor: '#ff4757',
      data: getPersentage([7.94, 8.19, 9.46, 6.21, 11.14, 16.47, 16.90]),
    },
    {
      ...others,
      label: 'ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อผลิตภัณฑ์มวลรวมภายในประเทศ (BERD/GDP) (%)',
      backgroundColor: '#70a1ff',
      borderColor: '#70a1ff',
      pointBorderColor: '#70a1ff',
      pointBackgroundColor: '#70a1ff',
      pointHoverBackgroundColor: '#70a1ff',
      pointHoverBorderColor: '#70a1ff',
      data: getPersentage([0.20, 0.21, 0.22, 0.28, 0.44, 0.58, 0.80]),
    },
    {
      ...others,
      label: 'ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อผลิตภัณฑ์มวลรวมภายในประเทศ (BERD/GDP) (%)',
      backgroundColor: '#eccc68',
      borderColor: '#eccc68',
      pointBorderColor: '#eccc68',
      pointBackgroundColor: '#eccc68',
      pointHoverBackgroundColor: '#eccc68',
      pointHoverBorderColor: '#eccc68',
      data: getPersentage([1.58, 1.55, 1.64, 1.21, 1.68, 1.54, 2.18]),
    },
    {
      ...others,
      label: 'ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อนักวิจัยแบบรายหัว (ล้านบาท/คน)',
      backgroundColor: '#6D214F',
      borderColor: '#6D214F',
      pointBorderColor: '#6D214F',
      pointBackgroundColor: '#6D214F',
      pointHoverBackgroundColor: '#6D214F',
      pointHoverBorderColor: '#6D214F',
      data: getPersentage([1.45, 1.46, 1.55, 1.15, 1.97, 1.75, 2.04]),
    },
  ]
}

const data3 = {
  labels: ['ปี 2554', 'ปี 2555', 'ปี 2556', 'ปี 2557', 'ปี 2558', 'ปี 2559', 'ปี 2560'],
  datasets: [
    {
      ...others,
      label: 'จำนวนบริษัทที่ดำเนินกิจกรรมด้านการวิจัยและพัฒนา (ราย)',
      backgroundColor: '#ff357f',
      borderColor: '#ff357f',
      pointBorderColor: '#ff357f',
      pointBackgroundColor: '#ff357f',
      pointHoverBackgroundColor: 'r#ff357f',
      pointHoverBorderColor: '#ff357f',
      data: getPersentage([2604, 2849, 2829, 5547, 5334, 5023, 7333])

    },
    {
      ...others,
      label: 'จำนวนบุคลากรด้านการวิจัยและพัฒนา (FTE) (คน-ปี)',
      backgroundColor: '#68fffc',
      borderColor: '#68fffc',
      pointBorderColor: '#68fffc',
      pointBackgroundColor: '#68fffc',
      pointHoverBackgroundColor: '#68fffc',
      pointHoverBorderColor: '#68fffc',
      data: getPersentage([22245, 24063, 25513, 39043, 49004, 61955, 86343]),
    },
    {
      ...others,
      label: 'จำนวนบุคลากรด้านการวิจัยและพัฒนา (รายหัว) (คน)',
      backgroundColor: '#f1c40f',
      borderColor: '#f1c40f',
      pointBorderColor: '#f1c40f',
      pointBackgroundColor: '#f1c40f',
      pointHoverBackgroundColor: '#f1c40f',
      pointHoverBorderColor: '#f1c40f',
      data: getPersentage([24938, 25779, 27779, 42247, 58744, 69476, 92131]),
    },
    {
      ...others,
      label: 'จำนวนบุคลากรด้านการวิจัยและพัฒนา (FTE) ต่อประชากร 10,000 คน',
      backgroundColor: '#eccc68',
      borderColor: '#eccc68',
      pointBorderColor: '#eccc68',
      pointBackgroundColor: '#eccc68',
      pointHoverBackgroundColor: '#eccc68',
      pointHoverBorderColor: '#eccc68',
      data: getPersentage([3.5, 3.7, 3.9, 6, 7.5, 9.4, 13]),
    },
    {
      ...others,
      label: 'จำนวนนักวิจัยแบบFTE(คน-ปี)',
      backgroundColor: '#6D214F',
      borderColor: '#6D214F',
      pointBorderColor: '#6D214F',
      pointBackgroundColor: '#6D214F',
      pointHoverBackgroundColor: '#6D214F',
      pointHoverBorderColor: '#6D214F',
      data: getPersentage([13129, 15064, 16370, 28440, 35465, 53576, 56782]),
    },
    {
      ...others,
      label: 'จำนวนนักวิจัยแบบรายหัว(คน)',
      backgroundColor: '#9b59b6',
      borderColor: '#9b59b6',
      pointBorderColor: '#9b59b6',
      pointBackgroundColor: '#9b59b6',
      pointHoverBackgroundColor: '#9b59b6',
      pointHoverBorderColor: '#9b59b6',
      data: getPersentage([14256, 16019, 17304, 30029, 30234, 47363, 60781]),
    },
  ],
}

const options = {
  maintainAspectRatio: false,
  legend: {
    position: 'bottom',
  }
}
export default () => {


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
        <div className="col-lg-12 graph10-1" data-aos="fade-left">
          <h1>ข้อมูลทั่วไป</h1>
          <Line data={data1} options={options} />
        </div>
        <div className="col-lg-12 graph10-2" data-aos="fade-left">
          <h1>ข้อมูลการวิจัยและพัฒนาโดยแบ่งตามค่าใช้จ่าย</h1>
          <Line data={data2} options={options} />
        </div>
        <div className="col-lg-12 graph10-3" data-aos="fade-left">
          <h1>ข้อมูลการวิจัยและพัฒนาโดยแบ่งตามบุคลากร</h1>
          <Line data={data3} options={options} />
        </div>
      </div>
    </div>
  )
}
