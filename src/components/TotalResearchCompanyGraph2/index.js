import React from 'react'
import numeral from 'numeral'
import { HorizontalBar } from 'react-chartjs-2'
import './index.css'

const data = {
  labels: ['การผลิต', 'การบริการ', 'การค้าส่ง/ค้าปลีก'],
  datasets: [
    {
      label: 'ปี 2559',
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
      data: [6615, 15496, 60590],
    },
    {
      label: 'ปี 2560',
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
      data: [18747, 25154, 80041],
    },
  ],
}

const options = {
  scales: {
    xAxes: [{
      ticks: {
        callback: (value) => {
          return numeral(value).format('0,0')
        }
      },
    }],
    yAxes: [{
      barPercentage: 0.7
    }],
  },
}

const TotalResearchCompanyGraph = () => {
  return (
    <div className="tr2-graph-page">
      <p className="tr2-graph-title" data-aos="fade-up">
        ค่าใช้จ่ายด้านการวิจัยและพัฒนาปี 2560
      </p>
      <div className="tr2-graph-detail-wrapper row">
        <div className="col-lg-8" data-aos="fade-right">
          <HorizontalBar data={data} options={options} />
          <div className="tr2-graph-desc">
            <p>ค่าใช้จ่ายด้านการวิจัยและพัฒนา (ล้านบาท)</p>
          </div>
        </div>
        <div className="tr2-graph-detail col-lg-4">
          <p className="tr2-graph-detail-text" data-aos="fade-left">
            ค่าใช้จ่ายด้านการวิจัยและพัฒนาเติบโตอย่างต่อเนื่องมาจากภาคอุตสาหกรรมการผลิตเป็นหลัก
          </p>
          <p className="tr2-graph-detail-text" data-aos="fade-left">
            รองลงมาคือภาคการบริการ
            และอุตสาหกรรมค้าส่ง/ค้าปลีก ตามลำดับ
          </p>
          <p className="tr2-graph-detail-text-last" data-aos="fade-left" data-aos-duration="500">
            โดยค่าใช้จ่ายด้านการวิจัยและพัฒนาในปี 2560 อยู่ที่ 123,942 ล้านบาท
          </p>
        </div>
      </div>
    </div>
  )
}

export default TotalResearchCompanyGraph
