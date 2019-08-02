import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount() {
        let chart = am4core.create("chartType", am4charts.XYChart);

// Export
chart.exporting.menu = new am4core.ExportMenu();

// Data for both series
let data = [ {
  "year": "2009",
  "income": 23.5
}, {
  "year": "2010",
  "income": 26.2
}, {
  "year": "2011",
  "income": 30.1
}, {
  "year": "2012",
  "income": 29.5
}, {
  "year": "2013",
  "income": 30.6,
  "lineDash": "5,5",
}, {
  "year": "2014",
  "income": 34.1,
  "strokeWidth": 1,
  "columnDash": "5,5",
  "fillOpacity": 0.2,
  "additional": "(projection)"
} ];

/* Create axes */
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.minGridDistance = 30;

/* Create value axis */
let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

/* Create series */
let columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.name = "Income";
columnSeries.dataFields.valueY = "income";
columnSeries.dataFields.categoryX = "year";

columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
columnSeries.columns.template.propertyFields.stroke = "stroke";
columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
columnSeries.tooltip.label.textAlign = "middle";

let lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.name = "Expenses";
lineSeries.dataFields.valueY = "expenses";
lineSeries.dataFields.categoryX = "year";

lineSeries.stroke = am4core.color("#fdd400");
lineSeries.strokeWidth = 3;
lineSeries.propertyFields.strokeDasharray = "lineDash";
lineSeries.tooltip.label.textAlign = "middle";

let bullet = lineSeries.bullets.push(new am4charts.Bullet());
bullet.fill = am4core.color("#fdd400"); // tooltips grab fill from parent by default
bullet.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
let circle = bullet.createChild(am4core.Circle);
circle.radius = 4;
circle.fill = am4core.color("#fff");
circle.strokeWidth = 3;

chart.data = data;
    }
    render() {
        return (
            <>
            <div id="chartType" style={{ width: "98%", height: "98%" }}></div>
            </>
        );
    }
}

export default index;
