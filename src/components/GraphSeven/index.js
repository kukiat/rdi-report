import React from 'react'
import { Bar } from 'react-chartjs-2'
import { parseLocaleString } from '../../utils/general'
import './index.css'

const data = {
  datasets: [
    {
      yAxisID: 'right-position',
      type: 'line',
      label: 'จำนวนผู้ประกอบการ (กิจการ)',
      borderWidth: 1.5,
      borderColor: '#FF6384',
      backgroundColor: '#FF6384',
      pointBorderColor: '#FF6384',
      fill: false,
      pointRadius: 1,
      pointHoverRadius: 1,
      data: [42, 3, 1, 0, 37, 55, 90, 21, 298, 18, 155, 270, 55, 44, 18, 5],
    },
    {
      yAxisID: 'left-position',
      label: 'ค่าใช้จ่ายด้านการวิจัยและพัฒนา  (ล้านบาท)',
      type: 'bar',
      borderWidth: 1.5,
      pointRadius: 0,
      pointHoverRadius: 0,
      backgroundColor: '#5ce0de',
      borderColor: '#5ce0de',
      hoverBackgroundColor: '#5ce0de',
      data: [
        2380,
        12,
        1,
        0,
        261,
        3286,
        193,
        78,
        1360,
        6007,
        527,
        4724,
        3707,
        2400,
        210,
        8,
      ],
    },
  ],
}

const options = {
  tooltips: {
    callbacks: {
      label: (tooltipItem, data) => {
        const { index, datasetIndex } = tooltipItem
        const { datasets } = data
        const unit = datasetIndex ? 'บาท' : 'คน'
        return `${datasets[datasetIndex].label}: ${parseLocaleString(datasets[datasetIndex].data[index])} ${unit}`
      }
    }
  },
  responsive: true,
  elements: {
    line: {
      fill: false,
    },
  },
  legend: {
    position: 'bottom',
    display: true,
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false,
        },
        labels: [
          'การก่อสร้าง',
          'การขนส่งทางบก',
          'การขนส่งทางน้ำ',
          'การขนส่งทางอากาศ',
          'ขนส่งและท่องเที่ยว',
          'ไปรษณีย์และโทรคมนาคม',
          'โรงแรมและภัตาคาร',
          'สื่อสิงพิมพ์ บันเทิงและการกีฬา',
          'คอมพิวเตอร์และซอฟแวร์',
          'การเงินและประกันภัย',
          'อสังหาริมทรัพย์',
          'บริการด้านธุรกิจอื่นๆ',
          'วิจัยและพัฒนา',
          'สุขภาพและอนามัย',
          'สุขภาพ สปาและสังคม',
        ],
      },
    ],
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'left-position',
        gridLines: {
          display: true,
        },
        labels: {
          show: true,
        },
        ticks: {
          callback: (value) => {
            return parseLocaleString(value)
          }
        },
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'right-position',
        gridLines: {
          display: false,
        },
        labels: {
          show: true,
        },
        ticks: {
          callback: (value) => {
            return parseLocaleString(value)
          }
        },
      },
    ],
  },
}

const GraphSeven = () => {
  return (
    <div className="tr2-graph-page">
      <p className="tr2-graph-title" data-aos="fade-up">
        ค่าใช้จ่ายด้านการวิจัยและพัฒนา ในภาคอุตสาหกรรมการบริการ จำแนกตามประเภทอุตสาหกรรม ปี 2560
      </p>
      <div className="tr2-graph-detail-wrapper row">
        <div className="col-lg-12" data-aos="fade-right">
          <Bar data={data} options={options} />
        </div>
        <div style={{ marginTop: '40px' }} className="tr2-graph-detail col-lg-12" data-aos="fade-up">
          <p className="tr2-graph-detail-text" style={{ textAlign: 'center' }}>
            โดยอุตสาหกรรมการเงินและประกันภัยมีค่าใช้จ่ายด้านการวิจัยและพัฒนาสูงที่สุด รองลงมาคืออุตสาหกรรมบริการด้านธุรกิจอื่นๆ และอุตสาหกรรมการวิจัยและพัฒนาตามลำดับ โดยมีค่าใช้จ่ายรวมของทั้งอุตสาหกรรมการบริการอยู่ที่ 25,154 ล้านบาท
          </p>
        </div>
      </div>
    </div>
  )
}

export default GraphSeven