import React from 'react'
import ScreenContext from './ScreenContext'
import { useRefScreen, AnimatedNumber } from '../customHook'
import './index.css'

const LaborIcon = ({ total, text, title }) => {
  const amount = parseInt(total / 2000) + 1
  const icons = []
  for (let index = 0; index < amount; index += 1) {
    icons.push(
      <div className="graph-human-icon" key={index}>
        <span className="tooltiptext">{title} <br /> {text} คน</span>
        <img src={require('../../static/images/graph/labor.png')} alt="" height="33px" />
      </div>
    )
  }

  icons.push(
    <AnimatedNumber startValue={0} stopValue={total} key={amount}>
      {(currentValue) => <p css={{ padding: '13px', color: '#7a5699' }}>{currentValue} คน</p>}
    </AnimatedNumber>
  )

  return icons
}

const ServiceIcon = ({ total, text, title }) => {
  const amount = parseInt(total / 2000) + 1
  const icons = []
  for (let index = 0; index < amount; index += 1) {
    icons.push(
      <div className="graph-human-icon" key={index}>
        <span className="tooltiptext">{title} <br /> {text} คน</span>
        <img src={require('../../static/images/graph/service.png')} alt="" height="33px" width="15px" />
      </div>
    )
  }

  icons.push(
    <div key={amount} className="graph-human-total">
      <AnimatedNumber startValue={0} stopValue={total}>
        {(currentValue) => <p>{currentValue} คน</p>}
      </AnimatedNumber>
    </div>
  )

  return icons
}

const MerchantIcon = ({ total, text, title }) => {
  const amount = parseInt(total / 2000) + 1
  const icons = []
  for (let index = 0; index < amount; index += 1) {
    icons.push(
      <div className="graph-human-icon" key={index}>
        <span className="tooltiptext">{title} <br /> {text} คน</span>
        <img src={require('../../static/images/graph/merchant.png')} alt="" height="33px" />
      </div>
    )
  }

  icons.push(
    <div key={amount} className="graph-human-total">
      <AnimatedNumber startValue={0} stopValue={total}>
        {(currentValue) => <p>{currentValue} คน</p>}
      </AnimatedNumber>
    </div>
  )

  return icons
}

const HumanGraph = () => {
  const { offsetTop, ref } = useRefScreen()
  return (
    <ScreenContext.Provider value={{ offsetTop }}>
      <div className="human-graph">
        <div className="graph-header">
          <div className="graph-human-title" data-aos="fade-up">
            บุคลากรด้านการวิจัยและพัฒนาแบบรายหัวและแบบเทียบเป็นการทำงานเต็มเวลา
            <br />
            (Head Count vs Full Time Equivalent)
          </div>
        </div>
        <div className="graph-human-graph" data-aos="fade-up" ref={ref}>
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

          <div className="graph-human-graph-title-topic" data-aos="fade-up">
            การค้าส่ง / ค้าปลีก
        </div>
          <div className="row">
            <div className="col-6">
              <div className="graph-human-graph-left" data-aos="fade-right">
                {' '}
                <MerchantIcon total={15707} text={'15,707'} title={'การค้าส่ง/ค้าปลีก'} />{' '}
              </div>
            </div>
            <div className="col-6 spliter" data-aos="fade-up">
              <div className="graph-human-graph-right" data-aos="fade-left">
                {' '}
                <MerchantIcon total={15373} text={'15,373'} title={'การค้าส่ง/ค้าปลีก'} />{' '}
              </div>
            </div>
          </div>

          <div className="graph-human-graph-title-topic" data-aos="fade-up">
            การบริการ
        </div>
          <div className="row">
            <div className="col-6">
              <div className="graph-human-graph-left" data-aos="fade-right">
                {' '}
                <ServiceIcon total={20584} text={'20,584'} title={'การบริการ'} />{' '}
              </div>
            </div>
            <div className="col-6 spliter" data-aos="fade-up">
              <div className="graph-human-graph-right" data-aos="fade-left">
                {' '}
                <ServiceIcon total={18464} text={'18,464'} title={'การบริการ'} />{' '}
              </div>
            </div>
          </div>

          <div className="graph-human-graph-title-topic" data-aos="fade-up">
            การผลิต
        </div>
          <div className="row">
            <div className="col-6">
              <div className="graph-human-graph-left" data-aos="fade-right">
                <LaborIcon total={55840} text={'55,840'} title={'การผลิต'} />
              </div>
            </div>
            <div className="col-6 spliter" data-aos="fade-up">
              <div className="graph-human-graph-right" data-aos="fade-left">
                <LaborIcon total={52506} text={'52,506'} title={'การผลิต'} />
              </div>
            </div>
          </div>

          <div className="graph-human-graph-title-topic" data-aos="fade-up">
            รวมทั้งสิ้น
        </div>
          <div className="row">
            <div className="col-6">
              <div className="graph-human-graph-left graph-human-total-all" data-aos="fade-right">
                <AnimatedNumber startValue={0} stopValue={92131}>
                  {(currentValue) => <div>{currentValue} คน</div>}
                </AnimatedNumber>
              </div>
            </div>
            <div className="col-6 spliter" data-aos="fade-up">
              <div className="graph-human-graph-right graph-human-total-all" data-aos="fade-left">
                <AnimatedNumber startValue={0} stopValue={86343}>
                  {(currentValue) => <div>{currentValue} คน</div>}
                </AnimatedNumber>
              </div>
            </div>
          </div>
        </div>
        <div className="graph-desc align-center" data-aos="fade-up" data-aos-duration="500">
          จากสติถิพบว่า กว่า 2 ใน 3 ของบุคลากรด้านวิจัยและพัฒนา อยู่ในอุตสาหกรรมการผลิต
      </div>
      </div>
    </ScreenContext.Provider>
  )
}

export default HumanGraph
