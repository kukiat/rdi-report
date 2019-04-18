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
const Graph10Table = () => {
  return (
    <table className="table table-hover graph10-table">
      <thead className="thead-dark graph10-table-head">
        <tr>
          <th scope="col">รายการ</th>
          <th scope="col">ปี 2554</th>
          <th scope="col">ปี 2555</th>
          <th scope="col">ปี 2556</th>
          <th scope="col">ปี 2557</th>
          <th scope="col">ปี 2558</th>
          <th scope="col">ปี 2559</th>
          <th scope="col">ปี 2560</th>
        </tr>
      </thead>
      <thead className="thead-light graph10-table-thead">
        <tr>
          <th colSpan="8">ข้อมูลทั่วไป</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>อัตราแลกเปลี่ยนเงินตราต่างประเทศ (บาท)</td>
          <td>30.4944</td>
          <td>31.0848</td>
          <td>30.7319</td>
          <td>32.4841</td>
          <td>34.2524</td>
          <td>35.298</td>
          <td>32.659</td>
        </tr>
        <tr>
          <td>จำนวนประชากร (คน)</td>
          <td>64,076,033</td>
          <td>64,456,695</td>
          <td>64,785,909</td>
          <td>65,124,716</td>
          <td>65,729,098</td>
          <td>65,931,550</td>
          <td>66,188,503</td>
        </tr>
        <tr>
          <td>ผลิตภัณฑ์มวลรวมภายในประเทศ (ล้านบาท)</td>
          <td>10,540,134</td>
          <td>11,375,349</td>
          <td>11,898,710</td>
          <td>12,141,096</td>
          <td>13,537,500</td>
          <td>14,366,557</td>
          <td>15,451,959</td>
        </tr>
      </tbody>
      <thead className="thead-light graph10-table-thead">
        <tr>
          <th colspan="8">ข้อมูลการวิจัยและพัฒนา</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>จำนวนบริษัทที่ดำเนินกิจกรรมด้านการวิจัยและพัฒนา (ราย)</td>
          <td>2,604</td>
          <td>2,849</td>
          <td>2,829</td>
          <td>5,547</td>
          <td>5,334</td>
          <td>5,023</td>
          <td>7,333</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนา (ล้านบาท) (BERD)</td>
          <td>20,683.73</td>
          <td>23,349.63</td>
          <td>26,768.19</td>
          <td>34,444.58</td>
          <td>59,442.56</td>
          <td>82,701.23</td>
          <td>123,942.04</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนา (ล้านเหรียญสหรัฐ)</td>
          <td>678.28</td>
          <td>751.16</td>
          <td>871.02</td>
          <td>1,060.35</td>
          <td>1,735.43</td>
          <td>2,342.94</td>
          <td>3,795.03</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อประชากร (บาท/คน)</td>
          <td>322.8</td>
          <td>362.25</td>
          <td>413.18</td>
          <td>528.9</td>
          <td>904.36</td>
          <td>1,254.35</td>
          <td>1,872.56</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อประชากร (เหรียญสหรัฐ /คน)</td>
          <td>10.59</td>
          <td>11.65</td>
          <td>13.44</td>
          <td>16.28</td>
          <td>26.4</td>
          <td>35.54</td>
          <td>57.34</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อบุคลากรด้านการวิจัยและพัฒนาแบบ FTE (ล้านบาท/คน-ปี)</td>
          <td>0.93</td>
          <td>0.97</td>
          <td>1.05</td>
          <td>0.88</td>
          <td>1.21</td>
          <td>1.33</td>
          <td>1.44</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อบุคลากรด้านการวิจัยและพัฒนาแบบรายหัว (ล้านบาท/คน)</td>
          <td>0.83</td>
          <td>0.91</td>
          <td>0.96</td>
          <td>0.82</td>
          <td>1.01</td>
          <td>1.19</td>
          <td>1.35</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนาเฉลี่ยต่อบริษัท (ล้านบาท/ราย)</td>
          <td>7.94</td>
          <td>8.19</td>
          <td>9.46</td>
          <td>6.21</td>
          <td>11.14</td>
          <td>16.47</td>
          <td>16.9</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อผลิตภัณฑ์มวลรวมภายในประเทศ (BERD/GDP) (%)</td>
          <td>0.2</td>
          <td>0.21</td>
          <td>0.22</td>
          <td>0.28</td>
          <td>0.44</td>
          <td>0.58</td>
          <td>0.8</td>
        </tr>
        <tr>
          <td>จำนวนบุคลากรด้านการวิจัยและพัฒนา (FTE) (คน-ปี)</td>
          <td>22,245</td>
          <td>24,063</td>
          <td>25,513</td>
          <td>39,043</td>
          <td>49,004</td>
          <td>61,955</td>
          <td>86,343</td>
        </tr>
        <tr>
          <td>จำนวนบุคลากรด้านการวิจัยและพัฒนา (รายหัว) (คน)</td>
          <td>24,938</td>
          <td>25,779</td>
          <td>27,779</td>
          <td>42,247</td>
          <td>58,744</td>
          <td>69,476</td>
          <td>92,131</td>
        </tr>
        <tr>
          <td>จำนวนบุคลากรด้านการวิจัยและพัฒนา (FTE) ต่อประชากร 10,000 คน</td>
          <td>3.5</td>
          <td>3.7</td>
          <td>3.9</td>
          <td>6</td>
          <td>7.5</td>
          <td>9.4</td>
          <td>13</td>
        </tr>
        <tr>
          <td>จำนวนนักวิจัยแบบFTE(คน-ปี)</td>
          <td>13,129</td>
          <td>15,064</td>
          <td>16,370</td>
          <td>28,440</td>
          <td>35,465</td>
          <td>53,576</td>
          <td>56,782</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อนักวิจัยแบบFTE (ล้านบาท/คน-ปี)</td>
          <td>1.58</td>
          <td>1.55</td>
          <td>1.64</td>
          <td>1.21</td>
          <td>1.68</td>
          <td>1.54</td>
          <td>2.18</td>
        </tr>
        <tr>
          <td>จำนวนนักวิจัยแบบรายหัว(คน)</td>
          <td>14,256</td>
          <td>16,019</td>
          <td>17,304</td>
          <td>30,029</td>
          <td>30,234</td>
          <td>47,363</td>
          <td>60,781</td>
        </tr>
        <tr>
          <td>ค่าใช้จ่ายด้านการวิจัยและพัฒนาต่อนักวิจัยแบบรายหัว (ล้านบาท/คน)</td>
          <td>1.45</td>
          <td>1.46</td>
          <td>1.55</td>
          <td>1.15</td>
          <td>1.97</td>
          <td>1.75</td>
          <td>2.04</td>
        </tr>
      </tbody>
    </table>
  )
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
        {/* <div className="col-lg-12 graph10-1" data-aos="fade-left">
          <h3>ข้อมูลทั่วไป</h3>
          <Line data={data1} options={options} />
        </div>
        <div className="col-lg-12 graph10-2" data-aos="fade-left">
          <h3>ข้อมูลการวิจัยและพัฒนาโดยแบ่งตามค่าใช้จ่าย</h3>
          <Line data={data2} options={options} />
        </div>
        <div className="col-lg-12 graph10-3" data-aos="fade-left">
          <h3>ข้อมูลการวิจัยและพัฒนาโดยแบ่งตามบุคลากร</h3>
          <Line data={data3} options={options} />
        </div> */}
        <div className="col-12 table-responsive" data-aos="fade-up">
          <Graph10Table />
        </div>
      </div>
    </div>
  )
}
