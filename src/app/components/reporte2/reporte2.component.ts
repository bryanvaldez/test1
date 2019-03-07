import { Component, AfterViewInit } from '@angular/core';

// @ts-ignore
import * as am4core from '@amcharts/amcharts4/core';
// @ts-ignore
import * as am4charts from '@amcharts/amcharts4/charts';
// @ts-ignore
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-reporte2',
  templateUrl: './reporte2.component.html',
  styleUrls: ['./reporte2.component.css']
})

export class Reporte2Component implements AfterViewInit {



  constructor() { }

  ngAfterViewInit() {
    am4core.useTheme(am4themes_animated);
    let chart: any;
    createChart();
    function createChart() {
      chart = am4core.create('chartdiv', am4charts.XYChart);
      chart.numberFormatter.numberFormat = '#a';
      chart.numberFormatter.bigNumberPrefixes = [{ 'number': 1e+3, 'suffix': 'K', 'prefix': 'S/' }, { 'number': 1e+6, 'suffix': 'M', 'prefix': 'S/' }];
      chart.data = [{
        'country': 'USA',
        'year2004': 15151,
        'year2005': 51156
    }, {
        'country': 'UK',
        'year2004': 16516,
        'year2005': 61515
    }, {
        'country': 'Canada',
        'year2004': 1651,
        'year2005': 61515
    }, {
        'country': 'Japan',
        'year2004': 2166,
        'year2005': 265561
    }, {
        'country': 'France',
        'year2004': 61556,
        'year2005': 2561
    }, {
        'country': 'Brazil',
        'year2004': 21612,
        'year2005': 11544
    }];
      const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = 'country';
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;
      categoryAxis.fontSize = 10;

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.fontWeight = 200;
      valueAxis.fontSize = 10;
      valueAxis.marginLeft = -20;

      const series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = 'year2004';
      series.dataFields.categoryX = 'country';
      series.clustered = false;
      series.tooltipText = 'GDP grow in {categoryX} (2004): [bold]{valueY}[/]';

      const series2 = chart.series.push(new am4charts.ColumnSeries());
      series2.dataFields.valueY = 'year2005';
      series2.dataFields.categoryX = 'country';
      series2.clustered = false;
      series2.columns.template.width = am4core.percent(50);
      series2.tooltipText = 'GDP grow in {categoryX} (2005): [bold]{valueY}[/]';

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.lineX.disabled = true;
      chart.cursor.lineY.disabled = true;
    }
  }
}
