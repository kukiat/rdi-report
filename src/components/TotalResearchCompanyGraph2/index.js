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
    <div className="tr-graph-page container">
      <div className="row tr-graph-detail-wrapper">
        <div className="col-lg-7" data-aos="fade-right">
          <Line data={data} />
          <div className="col-lg-12 tr-graph-desc">
            <p className="font-th">ค่าใช้จ่ายด้านการวิจัยและพัฒนา (ล้านบาท)</p>
          </div>
        </div>
        <div className="col-lg-5">
          <p className="graph-human-title font-th" data-aos="fade-left">
            ค่าใช้จ่ายด้านการวิจัยและพัฒนาปี 2560
          </p>
          <p className="adaaaa font-th" data-aos="fade-left" data-aos-duration="600">
            โดยค่าใช้จ่ายด้านการวิจัยและพัฒนาเติบโตอย่างต่อเนื่องมาจากภาคอุตสาหกรรมการผลิตเป็นหลัก
            รองลงมาคือภาคการบริการ และอุตสาหกรรมค้าส่ง/ค้าปลีกตามลำดับ
          </p>
        </div>
      </div>
      <div className="tr-bottom-text row" data-aos="fade-up">
        <div className="col-lg-10 offset-1">
          โดยค่าใช้จ่ายด้านการวิจัยและพัฒนาในปี 2560 อยู่ที่ 123,942 ล้านบาท
        </div>
      </div>
    </div>
  )
}

export default TotalResearchCompanyGraph
