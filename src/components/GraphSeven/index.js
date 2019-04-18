import React from 'react'
import { Bar } from 'react-chartjs-2'
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
      pointRadius: 0,
      pointHoverRadius: 0,
      data: [153, 20, 953, 3, 87, 86, 24, 21, 57, 33, 56, 628, 336, 231, 41, 235, 120, 10, 127, 270, 154, 34, 204, 17, 50],
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
        1441,
        147,
        16203,
        14,
        749,
        157,
        142,
        74,
        520,
        100,
        11721,
        9113,
        2134,
        3977,
        144,
        716,
        441,
        4745,
        3243,
        2736,
        18855,
        169,
        584,
        47,
        1868
      ],
    },
  ],
}

const options = {
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
          'เกษตรกรรม',
          'เหมืองแร่และหิน',
          'อาหาร',
          'ยาสูบ',
          'สิ่งทอ',
          'เครื่องนุ่งห่ม',
          'ฟอกย้อม',
          'ไม้',
          'กระดาษา',
          'การพิมพ์',
          'ปิโตรเลียม',
          'เคมี',
          'ยางและพลาสติก',
          'แร่อโลหะ แก้ว',
          'โลหะขั้นมูลฐาน',
          'โลหะประดิษฐ์',
          'วิทยุ โทรทัศน์',
          'เครื่องจักรสำนักงาน',
          'อุปกรณ์ไฟฟ้า',
          'เครื่องจักร',
          'ยานยนต์',
          'อุปกรณ์การขนส่ง',
          'เครื่องเรือน ของเล่น และเครื่องประดับ',
          'เครื่องมือแพทย์',
          'รีไซเคิล ไฟฟ้า แก๊ส และอากาศ',
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

const plugins = {
  maintainAspectRatio: false,
  datalabels: {
    display: true,
    color: 'white',
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
          <Bar data={data} options={options} plugins={plugins} />
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