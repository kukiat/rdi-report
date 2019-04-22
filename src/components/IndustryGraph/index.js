import React from 'react'
import { parseLocaleString } from '../../utils/general'
import { Bar } from 'react-chartjs-2'
import './index.css'

const dataI = {
  datasets: [
    {
      yAxisID: 'right-position',
      type: 'line',
      label: 'จำนวนผู้ประกอบการที่ดำเนินกิจกรรมด้านการวิจัยและพัฒนา (กิจการ)',
      borderColor: '#FF6384',
      pointBorderColor: '#FF6384',
      hoverBackgroundColor: '#FF6384',
      // pointRadius: 0,
      // pointHoverRadius: 0,
      pointRadius: 1,
      pointHoverRadius: 1,
      borderWidth: 1.5,
      fill: false,
      data: [628, 16, 203, 269, 127, 10, 57, 953, 119, 55, 231, 59],
    },
    {
      yAxisID: 'left-position',
      label: 'ค่าใช้จ่ายด้านการวิจัยและพัฒนา  (ล้านบาท)',
      type: 'bar',
      backgroundColor: '#5ce0de',
      borderColor: '#5ce0de',
      hoverBackgroundColor: '#5ce0de',
      pointRadius: 0,
      pointHoverRadius: 0,
      borderWidth: 1.5,
      data: [
        9113.8967,
        11768.292,
        8976.9101,
        18854.9609,
        2706.8715,
        3245.8951,
        4879.191,
        16202.1123,
        4745.8918,
        11721.8978,
        3977.9856,
        6867.9081,
      ],
    },
  ],
}

const optionsI = {
  // pieceLabel: { render: 'value', fontSize: 16 },
  responsive: true,
  tooltips: {
    callbacks: {
      label: (tooltipItem, data) => {
        const { index, datasetIndex } = tooltipItem
        const { datasets } = data
        return `${datasets[datasetIndex].label}: ${parseLocaleString(datasets[datasetIndex].data[index])} บาท`
      }
    }
  },
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
        ticks: {
          autoSkip: false,
          maxRotation: 90,
          minRotation: 90,
        },
        display: true,
        gridLines: {
          display: false,
        },
        labels: [
          'เคมี',
          'เครื่องมือแพทย์',
          'เครื่องเรือน ของเล่น',
          'เครื่องจักร',
          'อุปกรณ์ไฟฟ้า',
          'เครื่องจักรสำนักงาน',
          'กระดาษ',
          'อาหาร',
          'วิทยุ โทรทัศน์',
          'ปิโตรเลียม',
          'แร่อโลหะ แก้ว',
          'รีไซเคิล & ไฟฟ้า แก๊ส',
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

const dataII = {
  datasets: [
    {
      yAxisID: 'right-position',
      type: 'line',
      label: 'จำนวนผู้ประกอบการที่ดำเนินกิจกรรมด้านการวิจัยและพัฒนา (กิจการ)',
      borderColor: '#FF6384',
      pointRadius: 1,
      pointHoverRadius: 1,
      borderWidth: 1.5,
      pointBorderColor: '#FF6384',
      fill: false,
      data: [40, 34, 28, 32, 235, 3, 24, 152, 26, 87, 335, 20, 154],
    },
    {
      yAxisID: 'left-position',
      label: 'ค่าใช้จ่ายด้านการวิจัยและพัฒนา (ล้านบาท)',
      type: 'bar',
      backgroundColor: '#5ce0de',
      borderColor: '#5ce0de',
      pointRadius: 0,
      pointHoverRadius: 0,
      borderWidth: 1.5,
      hoverBackgroundColor: '#5ce0de',
      data: [
        144.089,
        587.9078,
        156.9892,
        1020.909,
        716.9876,
        14.4685,
        456.1819,
        1440.5178,
        156.7926,
        748.8321,
        2133.7841,
        147.1411,
        1068.9091,
      ],
    },
  ],
}

const optionsII = {
  tooltips: {
    callbacks: {
      label: (tooltipItem, data) => {
        const { index, datasetIndex } = tooltipItem
        const { datasets } = data
        return `${datasets[datasetIndex].label}: ${parseLocaleString(datasets[datasetIndex].data[index])} บาท`
      }
    }
  },
  // pieceLabel: { render: 'value', fontSize: 16 },
  responsive: true,
  elements: {
    line: {
      fill: false,
    },
  },
  legend: {
    position: 'bottom',
    display: true,
    // marginBottom: '30px'
  },
  scales: {
    xAxes: [
      {
        ticks: {
          autoSkip: false,
          maxRotation: 90,
          minRotation: 90,
        },
        display: true,
        gridLines: {
          display: false,
        },
        labels: [
          'โลหะขั้นมูลฐาน',
          'อุปกรณ์การขนส่ง',
          'ฟอกย้อม',
          'การพิมพ์',
          'โลหะประดิษฐ์',
          'ยาสูบ',
          'ไม้',
          'เกษตรกรรม',
          'เครื่องนุ่งห่ม',
          'สิ่งทอ',
          'ยางและพลาสติก',
          'เหมืองแร่และหิน',
          'ยานยนต์',
        ],
      },
    ],
    yAxes: [
      {
        ticks: {
          callback: (value) => {
            return parseLocaleString(value)
          }
        },
        type: 'linear',
        display: true,
        position: 'left',
        id: 'left-position',
        gridLines: {
          display: false,
        },
        labels: {
          show: true,
        },
      },
      {
        ticks: {
          callback: (value) => {
            return parseLocaleString(value)
          }
        },
        type: 'linear',
        display: true,
        position: 'right',
        id: 'right-position',
        gridLines: {
          display: true,
        },
        labels: {
          show: true,
        },
      },
    ],
  },
}

const IndustryGraph = () => {
  return (
    <div className="industry-graph-page">
      <div className="graph-header graph-content" style={{ marginTop: 50 }}>
        <div data-aos="fade-up">
          <p className="graph-title">
            ค่าใช้จ่ายด้านการวิจัยและพัฒนา ในภาคอุตสาหกรรมการผลิต
          </p>
          <p className="industry-graph-subtitle">
            จำแนกตามประเภทอุตสาหกรรม ปี 2560
            </p>
        </div>
      </div>
      <div className="industry-graph-detail">
        <div className="row">
          <div className="col-lg-8" data-aos="fade-right">
            <Bar data={dataI} options={optionsI} />
          </div>
          <div className="ig-content col-lg-4">
            <p className="ig-content-text" data-aos="fade-left">
              โดยอุตสาหกรรมยานยนต์มีค่าใช้จ่ายด้านการวิจัยและพัฒนาสูงที่สุด
            </p>
            <p className="ig-content-text" data-aos="fade-left">
              รองลงมาคืออุตสาหกรรมอาหารและอุตสาหกรรมปิโตรเลียมตามลำดับ
            </p>
            <p className="ig-content-text-last" data-aos="fade-left">
              โดยมีค่าใช้จ่ายรวมของทั้งอุตสาหกรรมการผลิตอยู่ที่ 80,041 ล้านบาท
            </p>
          </div>
        </div>


        <div className="graph-header graph-content" style={{ marginTop: 50 }}>
          <div data-aos="fade-up">
            <p className="graph-title">
              ค่าใช้จ่ายด้านการวิจัยและพัฒนา ในภาคอุตสาหกรรมการบริการ
            </p>
            <p className="industry-graph-subtitle">
              จำแนกตามประเภทอุตสาหกรรม ปี 2560
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ig-content">
            <p className="ig-content-text" data-aos="fade-right">
              โดยอุตสาหกรรมการเงินและประกันภัยมีค่าใช้จ่ายด้านการวิจัยและพัฒนาสูงที่สุด
            </p>
            <p className="ig-content-text" data-aos="fade-right">
              รองลงมาคืออุตสาหกรรมบริการด้านธุรกิจอื่นๆ
              และอุตสาหกรรมการวิจัยและพัฒนาตามลำดับ
            </p>
            <p className="ig-content-text-last" data-aos="fade-right">
              โดยมีค่าใช้จ่ายรวมของทั้งอุตสาหกรรมการบริการอยู่ที่ 25,154 ล้านบาท
            </p>
          </div>
          <div className="col-lg-8" data-aos="fade-left">
            <Bar data={dataII} options={optionsII} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndustryGraph
