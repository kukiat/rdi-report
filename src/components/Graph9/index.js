import React from 'react'
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import './index.css'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: 'Pie3D',
  width: 800,
  height: 500,
  dataSource: {
    "chart": {
      "baseFont": "Prompt, sans-serif",
      "showValues": "1",
      "showPercentInTooltip": "0",
      "enableMultiSlicing": "1",
      "theme": "zune"
    },
    "data": [
      {
        "label": "บุคลากรด้านการวิจัยและพัฒนา",
        "value": "67486",
        "color": '#FF6384'
      },
      {
        "label": "เครื่องจักรและอุปกรณ์",
        "value": "23875",
        "color": '#5ce0de'
      },
      {
        "label": "ค่าใช้จ่ายอื่นๆ",
        "value": "20141",
        "color": '#192a56'
      },
    ]
  },
};

const Graph9 = () => {
  return (
    <div className="graph9-graph-page">
      <div className="graph-header graph-content" style={{ marginTop: 50 }}>
        <div data-aos="fade-up">
          <p className="graph-title">
            ค่าใช้จ่ายด้านการวิจัยและพัฒนา
            </p>
          <p className="graph9-graph-subtitle">
            จำแนกตามประเภทของค่าใช้จ่ายด้านการวิจัยและพัฒนา ปี 2560
            </p>
        </div>
      </div>
      <div className="row graph9-content-section">
        <div className="col-lg-4 graph9-content">
          <p className="graph9-content-text" data-aos="fade-right">
            โดยค่าใช้จ่ายส่วนใหญ่ร้อยละ 54.45 เป็นค่าใช้จ่ายสำหรับบุคลากรด้านการวิจัยและพัฒนา
            </p>
          <p className="graph9-content-text" data-aos="fade-right">
            รองลงมาคือค่าใช้จ่ายสำหรับเครื่องจักรและอุปกรณ์ ร้อยละ 19.26 และค่าใช้จ่ายอื่นๆ ร้อยละ 16.25
            </p>
        </div>
        <div className="col-lg-8 graph9-pie" data-aos="fade-left">
          <ReactFC {...chartConfigs} />
        </div>
      </div>
    </div>
  )
}

export default Graph9
