import React from 'react'
import './index.css'

const LaborIcon = ({ total, text }) => {
  const amount = parseInt(total / 2000) + 1
  const icons = []
  for (let index = 0; index < amount; index += 1) {
    icons.push(
      <div className="graph-human-icon" key={index}>
        <span className="tooltiptext">{total}</span>
        <img src={require('../../static/images/graph/labor.png')} alt="" height="33px" />
      </div>
    )
  }

  icons.push(
    <div key={amount} className="graph-human-total">
      {text}
    </div>
  )

  return icons
}

const ServiceIcon = ({ total, text }) => {
  const amount = parseInt(total / 2000) + 1
  const icons = []
  for (let index = 0; index < amount; index += 1) {
    icons.push(
      <div className="graph-human-icon" key={index}>
        <span className="tooltiptext">{text}</span>
        <img src={require('../../static/images/graph/service.png')} alt="" height="33px" width="15px" />
      </div>
    )
  }

  icons.push(
    <div key={amount} className="graph-human-total">
      {text}
    </div>
  )

  return icons
}

const MerchantIcon = ({ total, text }) => {
  const amount = parseInt(total / 2000) + 1
  const icons = []
  for (let index = 0; index < amount; index += 1) {
    icons.push(
      <div className="graph-human-icon" key={index}>
        <span className="tooltiptext">{total}</span>
        <img src={require('../../static/images/graph/merchant.png')} alt="" height="33px" />
      </div>
    )
  }

  icons.push(
    <div key={amount} className="graph-human-total">
      {text}
    </div>
  )

  return icons
}

export default () => {
  return (
    <div className="human-graph">
      <div className="graph-header">
        <div className="graph-human-title font-th" data-aos="fade-up">
          ค่าใช้จ่ายด้านการวิจัยและพัฒนาเฉลี่ยต่อกิจการในปี 2560
        </div>
        <div className="graph-desc align-center font-th" data-aos="fade-up">
          บุคลากรด้านการวิจัยและพัฒนาแบบรายหัว (Head Count) และแบบเทียบเป็นการทำงานเต็มเวลา (Full Time Equivalent)
        </div>
      </div>
      <div className="graph-human-graph">
        <div className="row">
          <div className="col-6">
            <div className="graph-human-graph-title align-right" data-aos="fade-right">
              Normal (person)
            </div>
          </div>
          <div className="col-6 spliter" data-aos="fade-up">
            <div className="graph-human-graph-title align-left" data-aos="fade-left">
              FTE (person - year)
            </div>
          </div>
        </div>

        <div className="graph-human-graph-title-topic font-th" data-aos="fade-up">
          การค้าส่ง / ค้าปลีก
        </div>
        <div className="row">
          <div className="col-6">
            <div className="graph-human-graph-left" data-aos="fade-right">
              {' '}
              <MerchantIcon total={15707} text={'15,707'} />{' '}
            </div>
          </div>
          <div className="col-6 spliter" data-aos="fade-up">
            <div className="graph-human-graph-right" data-aos="fade-left">
              {' '}
              <MerchantIcon total={15373} text={'15,373'} />{' '}
            </div>
          </div>
        </div>

        <div className="graph-human-graph-title-topic font-th" data-aos="fade-up">
          การบริการ
        </div>
        <div className="row">
          <div className="col-6">
            <div className="graph-human-graph-left" data-aos="fade-right">
              {' '}
              <ServiceIcon total={20584} text={'20,584'} />{' '}
            </div>
          </div>
          <div className="col-6 spliter" data-aos="fade-up">
            <div className="graph-human-graph-right" data-aos="fade-left">
              {' '}
              <ServiceIcon total={18464} text={'18,464'} />{' '}
            </div>
          </div>
        </div>

        <div className="graph-human-graph-title-topic font-th" data-aos="fade-up">
          การผลิต
        </div>
        <div className="row">
          <div className="col-6">
            <div className="graph-human-graph-left" data-aos="fade-right">
              {' '}
              <LaborIcon total={55840} text={'55,840'} />{' '}
            </div>
          </div>
          <div className="col-6 spliter" data-aos="fade-up">
            <div className="graph-human-graph-right" data-aos="fade-left">
              {' '}
              <LaborIcon total={52506} text={'52,506'} />{' '}
            </div>
          </div>
        </div>

        <div className="graph-human-graph-title-topic font-th" data-aos="fade-up" style={{ color: '#7a5699' }}>
          รวมทั้งสิ้น
        </div>
        <div className="row">
          <div className="col-6">
            <div className="graph-human-graph-left graph-human-total-all font-th" data-aos="fade-right">
              {' '}
              92,131{' '}
            </div>
          </div>
          <div className="col-6 spliter" data-aos="fade-up">
            <div className="graph-human-graph-right graph-human-total-all font-th" data-aos="fade-left">
              {' '}
              86,343 <span style={{ marginLeft: 20 }}>คน</span>
            </div>
          </div>
        </div>
      </div>
      <div className="graph-desc align-center font-th" data-aos="fade-up">
        {' '}
        จากสติถิพบว่า กว่า 2 ใน 3 ของบุคคลากรด้านวิจัยและพัฒนา อยู่ในอุตสาหกรรมการผลิต{' '}
      </div>
    </div>
  )
}
