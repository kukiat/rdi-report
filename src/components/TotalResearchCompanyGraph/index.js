import React from 'react'
import { Line } from 'react-chartjs-2'
import './index.css'

const data = {
  labels: ['การผลิต', 'การบริการ', 'การค้าส่ง/ค้าปลีก', 'รวม'],
  datasets: [
    {
      label: '2559',
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
      data: [20509, 28104, 35057, 90669],
    },
    {
      label: '2560',
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
      data: [24340, 31931, 39159, 95430],
    },
  ],
}

const data2 = {
  labels: ['การผลิต', 'การบริการ', 'การค้าส่ง/ค้าปลีก', 'รวม'],
  datasets: [
    {
      label: '2559',
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
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 10,
      data: [60590, 15496, 6615, 82701],
    },
    {
      label: '2560',
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
      pointHoverBackgroundColor: '#ff357f',
      pointHoverBorderColor: '#ff357f',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 10,
      data: [80401, 25154, 18707, 123942],
    },
  ],
}

const TotalResearchCompanyGraph = () => {
  return (
    <div className="tr-graph-page">
      <div className="row tr-graph-detail-wrapper">
        <div className="awdas col-5">
          <p className="graph-human-title font-th" data-aos="fade-right">
            จำนวนผู้ประกอบการที่มีกิจกรรมการวิจัยและพัฒนา ในปี 2560
          </p>
          <p className="adaaaa font-th" data-aos="fade-right" data-aos-duration="600">
            เปรียบเทียบกับจำนวนผู้ประกอบการทั้งหมด ซึ่งประกอบไปด้วยข้อมูลของบริษัทในอุตสาหกรรมการผลิต อุตสาหกรรมบริการ
            และอุตสาหกรรมค้าส่ง/ค้าปลีก
          </p>
        </div>
        <div className="col-7" data-aos="fade-left">
          <Line data={data} />
          <div className="tr-graph-desc" data-aos="fade-up">
            <p className="font-th">จำนวนผู้ประกอบการทั้งหมด (กิจการ)</p>
          </div>
        </div>
      </div>

      <div className="row tr-graph-detail-wrapper">
        <div className="col-7" data-aos="fade-right">
          <Line data={data2} />
          <div className="col-12 tr-graph-desc" data-aos="fade-up">
            <p className="font-th">ค่าใช้จ่ายด้านการวิจัยและพัฒนา (ล้านบาท)</p>
          </div>
        </div>
        <div className="awdas col-5">
          <p className="graph-human-title font-th" data-aos="fade-left">
            ค่าใช้จ่ายด้านการวิจัยและพัฒนาปี 2560
          </p>
          <p className="adaaaa font-th" data-aos="fade-left" data-aos-duration="600">
            โดยค่าใช้จ่ายด้านการวิจัยและพัฒนาเติบโตอย่างต่อเนื่องมาจากภาคอุตสาหกรรมการผลิตเป็นหลัก
            รองลงมาคือภาคการบริการ และอุตสาหกรรมค้าส่ง/ค้าปลีกตามลำดับ
          </p>
        </div>
      </div>
    </div>
  )
}

export default TotalResearchCompanyGraph
