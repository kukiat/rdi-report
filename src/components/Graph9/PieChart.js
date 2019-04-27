import React, { useEffect } from 'react'
import { useScreenSize } from '../customHook'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const getPieHeightByWidth = (width) => {
  if (width < 525) return 140
  if (width < 768) return 180
  if (width < 992) return 250
  if (width < 1200) return 210
  return 270
}

const PieChart = () => {
  const { width } = useScreenSize(0)
  const height = getPieHeightByWidth(width)

  useEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.PieChart3D);

    chart.innerRadius = am4core.percent(0);

    chart.data = [{
      "label": "บุคลากรด้านการวิจัยและพัฒนา",
      "value": 67486,
    }, {
      "label": "ค่าใช้จ่ายอื่นๆ",
      "value": 20141,
    }, {
      "label": "เครื่องจักรและอุปกรณ์",
      "value": 23875,
    }, {
      "label": "อาคารและสิ่งปลูกสร้าง",
      "value": 6045,
    }, {
      "label": "ไม่ระบุ",
      "value": 3992,
    }, {
      "label": "ซอฟต์แวร์",
      "value": 1780,
    }, {
      "label": "ยานยนต์และพาหนะอื่นๆ",
      "value": 450,
    }, {
      "label": "ที่ดิน",
      "value": 168,
    }]
    var colorSet = new am4core.ColorSet();
    colorSet.list = ['#FF6384', '#5ce0de', '#e1b12c', '#8c7ae6', '#44bd32', '#353b48', '#00a8ff'].map((color) => new am4core.color(color));

    let pieSeries = chart.series.push(new am4charts.PieSeries3D());
    pieSeries.dataFields.value = "value"
    pieSeries.dataFields.category = "label"
    pieSeries.fontSize = 10
    pieSeries.colors = colorSet
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 1;
    pieSeries.slices.template.strokeOpacity = 1;

    pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
    pieSeries.slices.template.states.getKey("hover").properties.scale = 1.1;

    document.querySelector("g[aria-labelledby]").style.display = 'none'
    return () => {
      if (chart) {
        chart.dispose()
      }
    }
  }, [])

  return (
    <div id="chartdiv" style={{ width: "100%", height }} />
  )
}

export default PieChart
