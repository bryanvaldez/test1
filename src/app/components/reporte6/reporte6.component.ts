import { Component, AfterViewInit } from '@angular/core';
// @ts-ignore
import * as am4core from '@amcharts/amcharts4/core';
// @ts-ignore
import * as am4charts from '@amcharts/amcharts4/charts';
// @ts-ignore
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-reporte6',
  templateUrl: './reporte6.component.html',
  styleUrls: ['./reporte6.component.css']
}) 
export class Reporte6Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    am4core.useTheme(am4themes_animated);
    let chart: any;
    createChart();
    function createChart() {
      chart = am4core.create('chartdiv6', am4charts.XYChart);
      chart.numberFormatter.numberFormat = '#a';
      chart.zoomOutButton.disabled = true;
      chart.mouseWheelBehavior = "panX";  
      chart.numberFormatter.bigNumberPrefixes = [{ 'number': 1e+3, 'suffix': 'K', 'prefix': 'S/' }, { 'number': 1e+6, 'suffix': 'M', 'prefix': 'S/' }];
      chart.data = [
        {'country': 'PARTIDO POLÍTICO', 'year2004': 15151, 'year2005': 51156, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'}, 
        {'country': 'MOVIMIENTO REGIONAL', 'year2004': 16516, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL(PROVINCIAL)', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL(DISTRITAL)', 'year2004': 2166, 'year2005': 265561, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL1', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL2', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL3', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL4', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL5', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL6', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL7', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL8', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL9', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL10', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL11', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL12', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL13', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL14', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL15', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL16', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL17', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL18', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL19', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL20', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL21', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'},
        {'country': 'ORGANIZACIÓN LOCAL22', 'year2004': 1651, 'year2005': 61515, 'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'}
      ];
      chart.events.on("datavalidated", function () {
        categoryAxis.zoomToIndexes (0,4, false, true);
      });

      const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = 'country';
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;
      categoryAxis.fontSize = 10;
      categoryAxis.cursorTooltipEnabled = false;
      categoryAxis.renderer.labels.template.maxWidth = 150;
      categoryAxis.renderer.labels.template.wrap = true;
      categoryAxis.marginBottom = -10;
      categoryAxis.align = 'center';        

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.fontWeight = 200;
      valueAxis.fontSize = 10;
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

      // chart.cursor = new am4charts.XYCursor();
      // chart.cursor.behavior = 'none';
      // chart.cursor.lineX.opacity = 0;
      // chart.cursor.lineY.opacity = 0;
      
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "panX";
      chart.cursor.lineX.disabled = false;
      chart.cursor.lineX.stroke = am4core.color('#8F3985');
      chart.cursor.lineX.strokeWidth = '60%';     
      chart.cursor.lineX.strokeOpacity = 0.2;
      chart.cursor.lineX.strokeDasharray = '';
    

      chart.scrollbarX = new am4core.Scrollbar();
      chart.scrollbarX.height = 5;
      chart.scrollbarX.background.fill = am4core.color('green');
      chart.scrollbarX.fillOpacity = 1;
      chart.scrollbarX.stroke = am4core.color('rgba(0,0,0,.5)');
      chart.scrollbarX.strokeWidth = 0.5;
      chart.scrollbarX.margin(0, 30, 0, 30);
      chart.scrollbarX.thumb.minWidth = 50;
      chart.scrollbarX.thumb.clickable = false;
      chart.scrollbarX.startGrip.hide();
      chart.scrollbarX.endGrip.hide();

      var bullet = series2.bullets.push(new am4charts.Bullet());
      var image = bullet.createChild(am4core.Image);
      image.horizontalCenter = "middle";
      image.verticalCenter = "bottom";
      image.dy = 0;
      image.y = am4core.percent(100);
      image.propertyFields.href = "bullet";
      image.tooltipText = series.columns.template.tooltipText;
      image.propertyFields.fill = "color";
      image.filters.push(new am4core.DropShadowFilter());


    }

  }

}
