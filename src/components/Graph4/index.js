import React from "react"
import "./index.css"

const Organization = () => {
  return (
    <div className="graph4-page row">

      <div className="col-lg-7 graph4-content-section" data-aos="fade-right">
        <div className="graph4-content-header col-lg-12" data-aos="fade-right">
          <p>ค่าใช้จ่ายด้านการวิจัยและพัฒนาเฉลี่ยต่อกิจการในปี 2560</p>
        </div>
        <div className="graph4-content-desc">
          <p className="graph4-content-desc-text" data-aos="fade-right">
            โดยอุตสาหกรรมการบริการมีค่าใช้จ่ายด้านการวิจัยและพัฒนาเฉลี่ยต่อกิจการสูงที่สุด
            รองลงมาคืออุตสาหกรรมการผลิตและอุตสาหกรรมค้าส่งค้าปลีกตามลำดับ
          </p>
          <p className="graph4-content-desc-text" data-aos="fade-right">
            ซึ่งในภาพรวมทุกอุตสาหกรรมมีค่าใช้จ่ายเฉลี่ยอยู่ที่ 16.9 ล้านบาทต่อกิจการ
          </p>
        </div>
      </div>

      <div className="col-lg-5" data-aos="fade-left">
        <img className="graph4-image" src={require("../../static/images/others/6.png")} alt="" />
      </div>

    </div>
  )
}

export default Organization
