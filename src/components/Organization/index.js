import React from "react"
import "./index.css"

const Organization = () => {
  return (
    <div className="org-page row">
      <div className="org-content-header col-lg-12" data-aos="fade-up">
        <h1>RDI SURVEY 2018</h1>
      </div>
      <div className="col-lg-6" data-aos="fade-right">
        <img className="org-image" src={require("../../static/images/others/4.png")} alt="" />
      </div>
      <div className="col-lg-6 org-content-section" data-aos="fade-left">
        <div className="org-content-desc">
          <div className="org-content-desc-text-title">วัตถุประสงค์หลักของการสำรวจในครั้งนี้ คือ</div>
          <p className="org-content-desc-text" data-aos="fade-left">
            {' '}
            เพื่อดำเนินการศึกษาสถานภาพรวมทั้งดำเนินการสำรวจเพื่อให้ได้มาซึ่งข้อมูลอันเป็นประโยชน์ต่อภาครัฐ
            ในการกำหนดนโยบายและมาตรการสนับสนุนความสามารถในการทำวิจัยและพัฒนาและกิจกรรมนวัตกรรม
            ให้สอดคล้องกับความต้องการของภาคอุตสาหกรรมได้ดียิ่งขึ้น
          </p>
          <p className="org-content-desc-text" data-aos="fade-left">
            โดยการสำรวจครอบคลุมด้านการวิจัยและพัฒนา กิจกรรมนวัตกรรม กิจกรรมทางเทคโนโลยี และความต้องการสนับสนุน
            เพื่อพัฒนาเทคโนโลยีของผู้ประกอบการในปี 2560
          </p>
          <p className="org-content-desc-text" data-aos="fade-left">
            ทั้งนี้ สวทน.ได้มอบหมายให้จุฬาลงกรณ์มหาวิทยาลัยเป็นผู้ดำเนินการสำรวจข้อมูลและประมวลผล
            โดยใช้ระยะเวลาดำเนินการทั้งสิ้นประมาณ 7 เดือน (สิงหาคม 2561 – กุมภาพันธ์ 2562)
          </p>
        </div>
      </div>
      <div className="org-content-desc-bottom col-lg-12" data-aos="fade-up">
        <p className="org-content-desc-bottom-text">
          {/* ทั้งนี้ สวทน.ได้มอบหมายให้จุฬาลงกรณ์มหาวิทยาลัยเป็นผู้ดำเนินการสำรวจข้อมูลและประมวลผล
          โดยใช้ระยะเวลาดำเนินการทั้งสิ้นประมาณ 7 เดือน (สิงหาคม 2561 – กุมภาพันธ์ 2562) */}
        </p>
      </div>
    </div>
  )
}

export default Organization
