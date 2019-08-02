import React, { Component } from 'react';
import styles  from './index.css'
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
        let chart = am4core.create("insert", am4charts.XYChart3D);
        chart.paddingBottom = 30;
        chart.angle = 35;

        // Add data
        chart.data = [{
        "country": "USA",
        "visits": 4025
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
        }, {
        "country": "Italy",
        "visits": 386
        }, {
        "country": "Taiwan",
        "visits": 338
        }];

        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.inside = true;
        categoryAxis.renderer.grid.template.disabled = true;

        let labelTemplate = categoryAxis.renderer.labels.template;
        labelTemplate.rotation = -90;
        labelTemplate.horizontalCenter = "left";
        labelTemplate.verticalCenter = "middle";
        labelTemplate.dy = 10; // moves it a bit down;
        labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.grid.template.disabled = true;

        // Create series
        let series = chart.series.push(new am4charts.ConeSeries());
        series.dataFields.valueY = "visits";
        series.dataFields.categoryX = "country";

        let columnTemplate = series.columns.template;
        columnTemplate.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
        })

        columnTemplate.adapter.add("stroke", function(stroke, target) {
        return chart.colors.getIndex(target.dataItem.index);
        })

      }
    
      componentWillUnmount() {
        if (this.chart) {
          this.chart.dispose();
        }
      }


    render() {
        return (
            <div id="insert" className={styles.insert} style={{ width: "100%", height: "300px" }}></div>
        );
    }
}

export default index;