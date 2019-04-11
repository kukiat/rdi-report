import React from 'react'
import './index.css'

export default () => {
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
          <div className="col-lg-8" data-aos="fade-right">

            <div style={{
              width: '100%',
              height: '280px',
              backgroundColor: '#8c63b1',
            }} />

          </div>
          <div className="graph8-content col-lg-4">
            <p className="graph8-content-text" data-aos="fade-left">
              โดยอุตสาหกรรมห้าง สะดวกซื้อ ของชำ มีค่าใช้จ่ายด้านการวิจัยและพัฒนาสูงที่สุด
            </p>
            <p className="graph8-content-text" data-aos="fade-left">
              รองลงมาคืออุตสาหกรรมธุรกิจค้าส่ง/ตัวแทนจำหน่าย และธุรกิจค้าส่ง/ปลีกยานยนต์และอุปกรณ์ ตามลำดับ
            </p>
            <p className="graph8-content-text-last" data-aos="fade-left">
              โดยมีค่าใช้จ่ายรวมของทั้งอุตสาหกรรมการค้าส่ง/ค้าปลีกอยู่ที่ 18,747 ล้านบาท
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
