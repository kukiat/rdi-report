import React from 'react'
import { Bar } from 'react-chartjs-2'
import Description from '../Description'
import './index.css'

const dataI = {
  datasets: [
    {
      yAxisID: 'right-position',
      type: 'line',
      label: 'จำนวนผู้ประกอบการที่ดำเนินกิจกรรมด้านการวิจัยและพัฒนา (กิจการ)',
      borderWidth: 2,
      borderColor: '#FF6384',
      pointBorderColor: 'rgba(0,0,0,0)',
      fill: false,
      data: [628, 16, 203, 269, 127, 10, 57, 953, 119, 55, 231, 59],
    },
    {
      yAxisID: 'left-position',
      label: 'ค่าใช้จ่ายด้านการวิจัยและพัฒนา  (ล้านบาท)',
      type: 'bar',
      backgroundColor: '#5ce0de',
      borderColor: '#f3f3f3',
      hoverBackgroundColor: '#84d8d7',
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
    mode: 'label',
  },
  elements: {
    line: {
      fill: false,
    },
  },
  legend: {
    position: 'bottom',
    display: false,
  },
  scales: {
    xAxes: [
      {
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
      borderWidth: 2,
      pointBorderColor: 'rgba(0,0,0,0)',
      fill: false,
      data: [40, 34, 28, 32, 235, 3, 24, 152, 26, 87, 335, 20, 154],
    },
    {
      yAxisID: 'left-position',
      label: 'ค่าใช้จ่ายด้านการวิจัยและพัฒนา  (ล้านบาท)',
      type: 'bar',
      backgroundColor: '#5ce0de',
      borderColor: '#f3f3f3',
      hoverBackgroundColor: '#84d8d7',
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
  // pieceLabel: { render: 'value', fontSize: 16 },
  responsive: true,
  tooltips: {
    mode: 'label',
  },
  elements: {
    line: {
      fill: false,
    },
  },
  legend: {
    position: 'bottom',
    display: false,
    // marginBottom: '30px'
  },
  scales: {
    xAxes: [
      {
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

const plugins = {
  datalabels: {
    display: true,
    color: 'white',
  },
}

export default () => {
  return (
    <div className="industry-graph-page">
      <Description />
      <div className="industry-graph-detail">
        <div className="row">
          <div className="col-md-8" data-aos="fade-right">
            <Bar data={dataI} options={optionsI} plugins={plugins} />
          </div>
          <div className="col-md-4 ig-content" data-aos="fade-left">
            <p className="font-th ig-content-text">
              ค่าใช้จ่ายด้านการวิจัยและพัฒนาส่วนใหญ่มาจาก อุตสาหกรรมยานยนต์ อุตสาหกรรมอาหาร และอุตสาหกรรมปิโตรเลียม
            </p>
          </div>
        </div>
        <div style={{ marginTop: 130 }} />
        <div className="row">
          <div className="col-md-4 ig-content" data-aos="fade-right">
            <p className="font-th ig-content-text">
              ในขณะที่ผู้ประกอบการส่วนใหญ่มาจาก อุตสาหกรรมอาหาร อุตสาหกรรมเคมี และอุตสาหกรรมยางและพลาสติก
            </p>
          </div>
          <div className="col-md-8" data-aos="fade-left">
            <Bar data={dataII} options={optionsII} plugins={plugins} />
          </div>
        </div>
      </div>
    </div>
  )
}
