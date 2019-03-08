import { Component, AfterViewInit } from '@angular/core';
// @ts-ignore
import * as am4core from '@amcharts/amcharts4/core';
// @ts-ignore
import * as am4charts from '@amcharts/amcharts4/charts';
// @ts-ignore
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-reporte3',
  templateUrl: './reporte3.component.html',
  styleUrls: ['./reporte3.component.css']
})
export class Reporte3Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    am4core.useTheme(am4themes_animated);
    let chart: any;
    createChart('chartdiv1');
    createChart('chartdiv2');
    function createChart(div) {
      chart = am4core.create(div, am4charts.PieChart);
      chart.data = [ {
        'country': 'Anexo A',
        'litres': 501.9
      }, {
        'country': 'Anexo B',
        'litres': 301.9
      }, {
        'country': 'Anexo C',
        'litres': 201.1
      }];

      chart.innerRadius = am4core.percent(50);
      const pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = 'litres';
      pieSeries.dataFields.category = 'country';
      pieSeries.slices.template.stroke = am4core.color('#fff');
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;

      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;

      pieSeries.alignLabels = false;
      pieSeries.labels.template.bent = true;
      pieSeries.labels.template.fill = am4core.color('#000');
      pieSeries.labels.template.fontSize = 10;
      pieSeries.labels.template.padding(0, 0, 0, 0);
    }
  }

}
