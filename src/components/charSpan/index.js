import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);

class index extends Component {

    componentDidMount() {
        let chart = am4core.create("chartspan", am4charts.XYChart);

        // Add data
        chart.data = [{
        "country": "USA",
        "visits": 2025
        }, {
        "country": "China",
        "visits": 1882
        }, {
        "country": "Japan",
        "visits": 1809
        }, {
        "country": "Germany",
        "visits": 1322
        }, {
        "country": "UK",
        "visits": 1122
        }, {
        "country": "France",
        "visits": 1114
        }, {
        "country": "India",
        "visits": 984
        }, {
        "country": "Spain",
        "visits": 711
        }, {
        "country": "Netherlands",
        "visits": 665
        }, {
        "country": "Russia",
        "visits": 580
        }, {
        "country": "South Korea",
        "visits": 443
        }, {
        "country": "Canada",
        "visits": 441
        }, {
        "country": "Brazil",
        "visits": 395
        }];
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "visits";
        series.dataFields.categoryX = "country";
    }

    render() {
        return (
            <span id="chartspan"></span>
        );
    }
}

export default index;