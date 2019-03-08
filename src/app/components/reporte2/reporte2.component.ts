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
        'country': 'PARTIDO POLÍTICO',
        'year2004': 15151,
        'year2005': 51156
        }, {
        'country': 'MOVIMIENTO REGIONAL',
        'year2004': 16516,
        'year2005': 61515
        }, {
        'country': 'ORGANIZACIÓN LOCAL(PROVINCIAL)',
        'year2004': 1651,
        'year2005': 61515
        }, {
        'country': 'ORGANIZACIÓN LOCAL(DISTRITAL)',
        'year2004': 2166,
        'year2005': 265561
        }];
      const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = 'country';
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;
      categoryAxis.fontSize = 10;
      categoryAxis.cursorTooltipEnabled = false;
      categoryAxis.renderer.labels.template.maxWidth = 150;
      categoryAxis.renderer.labels.template.wrap = true;
      categoryAxis.marginBottom = -20;

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.fontWeight = 200;
      valueAxis.fontSize = 10;
      valueAxis.marginLeft = -20;
      valueAxis.cursorTooltipEnabled = false;

      const series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = 'year2004';
      series.dataFields.categoryX = 'country';
      series.clustered = false;
      series.tooltipText = 'GDP grow in {categoryX} (2004): [bold]{valueY}[/]';
      // series.columns.template.tooltipText = '[bold font-size: 22px; #fff]{categoryX}[/]\n[font-size: 20px]{name}:[/] [font-size: 20px #fff]{valueY}[/]';
      series.tooltipHTML  =
        `<table width=180>
        <tr><th colspan="3" align="center" style="font-size:13px;"><strong>{categoryX}</strong></th></tr>
        <tr>
          <th align="left" style="font-size:12px;">Anexo A</th>
          <td style="font-size:12px;">S/ 99000000</td>
          <td align="right" style="font-size:12px;">100%</td>
        </tr>
        <tr>
          <th style="font-size:12px;" align="left">Anexo B</th>
          <td style="font-size:12px;">S/ 99000000</td>
          <td align="right" style="font-size:12px;">100%</td>
        </tr>
        <tr>
          <th style="font-size:12px;" align="left">Anexo C</th>
          <td style="font-size:12px;">S/ 99000000</td>
          <td align="right" style="font-size:12px;">100%</td>
        </tr>
        </table>`;

      const series2 = chart.series.push(new am4charts.ColumnSeries());
      series2.dataFields.valueY = 'year2005';
      series2.dataFields.categoryX = 'country';
      series2.clustered = false;
      series2.columns.template.width = am4core.percent(50);
      // series2.tooltipText = 'GDP grow in {categoryX} (2005): [bold]{valueY}[/]';
      series2.tooltipHTML  =
        `<table width=180>
        <tr><th colspan="3" align="center" style="font-size:13px;"><strong>{categoryX}</strong></th></tr>
        <tr>
          <th align="left" style="font-size:12px;">Anexo A</th>
          <td style="font-size:12px;">S/ 99000000</td>
          <td align="right" style="font-size:12px;">100%</td>
        </tr>
        <tr>
          <th style="font-size:12px;" align="left">Anexo B</th>
          <td style="font-size:12px;">S/ 9900000</td>
          <td align="right" style="font-size:12px;">20%</td>
        </tr>
        <tr>
          <th style="font-size:12px;" align="left">Anexo C</th>
          <td style="font-size:12px;">S/ 990000</td>
          <td align="right" style="font-size:12px;">10%</td>
        </tr>
        </table>`;

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.lineX.stroke = am4core.color('#8F3985');
      chart.cursor.lineX.strokeWidth = '60%';
      chart.cursor.lineX.strokeOpacity = 0.2;
      chart.cursor.lineX.strokeDasharray = '';


    }
  }
}
