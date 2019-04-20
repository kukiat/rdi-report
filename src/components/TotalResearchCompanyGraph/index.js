import React from 'react'
import { Bar } from 'react-chartjs-2'
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
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3339, 1143, 480],
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
      pointHoverBackgroundColor: 'r#ff357f',
      pointHoverBorderColor: '#ff357f',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 10,
      data: [3891, 1112, 2329],
    },
  ],
}

const options = {
  scales: {
    xAxes: [{
      barPercentage: 0.4
    }],
  },
}

const TotalResearchCompanyGraph = () => {
  return (
    <div className="tr-graph-page">
      <p className="tr-graph-title" data-aos="fade-right">
        จำนวนผู้ประกอบการที่มีกิจกรรมการวิจัยและพัฒนา ในปี 2560
      </p>
      <p className="tr-graph-subtitle" data-aos="fade-left" data-aos-duration="600">
        เปรียบเทียบกับจำนวนผู้ประกอบการที่มีกิจกรรมวิจัยในปี 2560
      </p>
      <div className="tr-graph-detail-wrapper row">
        <div className="col-lg-4">
          <p className="tr-graph-detail-text" data-aos="fade-right" data-aos-duration="600">
            ซึ่งประกอบไปด้วยข้อมูลของบริษัท
          </p>
          <ul className="tr-graph-detail-list">
            <li data-aos="fade-right" data-aos-duration="500">อุตสาหกรรมการผลิต</li>
            <li data-aos="fade-right" data-aos-duration="500">อุตสาหกรรมบริการ</li>
            <li data-aos="fade-right" data-aos-duration="500">อุตสาหกรรมค้าส่ง/ค้าปลีก</li>
          </ul>
          <p className="tr-graph-detail-text-last" data-aos="fade-up">
            โดยในปี 2560 มีจำนวนผู้ประกอบการที่มีกิจกรรมการวิจัยและพัฒนาทั้งสิ้น 7,332 บริษัท
          </p>
        </div>
        <div className="col-lg-8" data-aos="fade-left">
          <Bar data={data} options={options} />
          <div className="tr-graph-desc">
            <p>จำนวนผู้ประกอบการทั้งหมด (กิจการ)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TotalResearchCompanyGraph
