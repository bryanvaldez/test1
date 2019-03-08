import { Component, AfterViewInit } from '@angular/core';
// @ts-ignore
import * as am4core from '@amcharts/amcharts4/core';
// @ts-ignore
import * as am4charts from '@amcharts/amcharts4/charts';
// @ts-ignore
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
@Component({
  selector: 'app-reporte4',
  templateUrl: './reporte4.component.html',
  styleUrls: ['./reporte4.component.css']
})
export class Reporte4Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {

    am4core.useTheme(am4themes_animated);
    let chart: any;
    createChart('chartdiv4');

    function createChart(div) {
      chart = am4core.create(div, am4charts.PieChart);
      chart.data = [ {
        'country': 'Dentro del Plazo',
        'litres': 501.9
      }, {
        'country': 'Fuera del Plazo',
        'litres': 301.9
      }, {
        'country': 'No Presento',
        'litres': 201.1
      }];

      chart.innerRadius = am4core.percent(0);
      chart.radius = am4core.percent(80);
      const pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = 'litres';
      pieSeries.dataFields.category = 'country';
      pieSeries.labels.template.disabled = true;
      pieSeries.ticks.template.disabled = true;


    }
  }

}
