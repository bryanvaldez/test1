import { Component, AfterViewInit } from '@angular/core';

// @ts-ignore
import * as am4core from "@amcharts/amcharts4/core";
// @ts-ignore
import * as am4charts from "@amcharts/amcharts4/charts";
// @ts-ignore
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-reporte2',
  templateUrl: './reporte2.component.html',
  styleUrls: ['./reporte2.component.css'] 
})

export class Reporte2Component implements AfterViewInit {



  constructor() { }

  ngAfterViewInit() {
    var chart: any;


    createChart(); 


  function createChart() {
    // SERIAL CHART
    chart = am4core.create("chartdiv", am4charts.XYChart);
    // Add data
    chart.data = [{
      "year": 2005,
      "income": 23.5,
      "expenses": 18.1
    },{
      "year": 2006,
      "income": 26.2,
      "expenses": 22.8
    },{
      "year": 2007,
      "income": 30.1,
      "expenses": 23.9
    },{
      "year": 2008,
      "income": 29.5,
      "expenses": 25.1
    },{
      "year": 2009,
      "income": 24.6,
      "expenses": 25
    }];

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.numberFormatter.numberFormat = "#";
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;

    let  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
    valueAxis.renderer.opposite = true;

    function createSeries(field, name) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = "year";
      series.name = name;
      series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
      series.columns.template.height = am4core.percent(100);
      series.sequencedInterpolation = true;
    
      let valueLabel = series.bullets.push(new am4charts.LabelBullet());
      valueLabel.label.text = "{valueX}";
      valueLabel.label.horizontalCenter = "left";
      valueLabel.label.dx = 10;
      valueLabel.label.hideOversized = false;
      valueLabel.label.truncate = false;
    
      let categoryLabel = series.bullets.push(new am4charts.LabelBullet());
      categoryLabel.label.text = "{name}";
      categoryLabel.label.horizontalCenter = "right";
      categoryLabel.label.dx = -10;
      categoryLabel.label.fill = am4core.color("#fff");
      categoryLabel.label.hideOversized = false;
      categoryLabel.label.truncate = false;
    }
    
    createSeries("income", "Income");
    createSeries("expenses", "Expenses");

 


    }
}

  
}
