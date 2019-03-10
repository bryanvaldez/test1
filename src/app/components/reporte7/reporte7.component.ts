import { Component, AfterViewInit } from '@angular/core';

// @ts-ignore
import * as am4core from '@amcharts/amcharts4/core';
// @ts-ignore
import * as am4charts from '@amcharts/amcharts4/charts';
// @ts-ignore
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-reporte7',
  templateUrl: './reporte7.component.html',
  styleUrls: ['./reporte7.component.css']
})
export class Reporte7Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    am4core.useTheme(am4themes_animated);
    let chart: any;
    createChart();
    function createChart(){
      chart = am4core.create("chartdiv7", am4charts.XYChart);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
      
      chart.data = [{
          'name': 'organizacion1',
          "date": "2018-01-01",
          "steps": 4561
      }, {
          'name': 'organizacion2',
          "date": "2018-01-02",
          "steps": 5687
      }, {
          'name': 'organizacion3',
          "date": "2018-01-03",
          "steps": 6348
      }, {
          'name': 'organizacion4',
          "date": "2018-01-04",
          "steps": 4878
      }, {
          'name': 'organizacion5',
          "date": "2018-01-05",
          "steps": 9867
      }, {
          'name': 'organizacion6',
          "date": "2018-01-06",
          "steps": 7561
      }, {
          'name': 'organizacion7',
          "date": "2018-01-07",
          "steps": 1287
      }, {
          "date": "2018-01-08",
          "steps": 3298
      }, {
          "date": "2018-01-09",
          "steps": 5697
      }, {
          "date": "2018-01-10",
          "steps": 4878
      }, {
          "date": "2018-01-11",
          "steps": 8788
      }, {
          "date": "2018-01-12",
          "steps": 9560
      }, {
          "date": "2018-01-13",
          "steps": 11687
      }, {
          "date": "2018-01-14",
          "steps": 5878
      }, {
          "date": "2018-01-15",
          "steps": 9789
      }, {
          "date": "2018-01-16",
          "steps": 3987
      }, {
          "date": "2018-01-17",
          "steps": 5898
      }, {
          "date": "2018-01-18",
          "steps": 9878
      }, {
          "date": "2018-01-19",
          "steps": 13687
      }, {
          "date": "2018-01-20",
          "steps": 6789
      }, {
          "date": "2018-01-21",
          "steps": 4531
      }, {
          "date": "2018-01-22",
          "steps": 5856
      }, {
          "date": "2018-01-23",
          "steps": 5737
      }, {
          "date": "2018-01-24",
          "steps": 9987
      }, {
          "date": "2018-01-25",
          "steps": 16457
      }, {
          "date": "2018-02-26",
          "steps": 7878
      }, {
          "date": "2018-02-27",
          "steps": 6845
      }, {
          "date": "2018-03-28",
          "steps": 4659
      }, {
          "date": "2018-01-29",
          "steps": 7892
      }, {
          "date": "2018-01-30",
          "steps": 7362
      }, {
          "date": "2018-01-31",
          "steps": 3268
      }];
      
      chart.dateFormatter.inputDateFormat = "YYYY-MM-dd";
      chart.zoomOutButton.disabled = true;
      
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.strokeOpacity = 0;
      dateAxis.renderer.minGridDistance = 10;
      dateAxis.dateFormats.setKey("month", "m");
      dateAxis.tooltip.hiddenState.properties.opacity = 1;
      dateAxis.tooltip.hiddenState.properties.visible = true;
      
      
      dateAxis.tooltip.adapter.add("x", function (x, target) {
          return am4core.utils.spritePointToSvg({ x: chart.plotContainer.pixelX, y: 0 }, chart.plotContainer).x + chart.plotContainer.pixelWidth / 2;
      })
      
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.inside = true;
      valueAxis.renderer.labels.template.fillOpacity = 0.3;
      valueAxis.renderer.grid.template.strokeOpacity = 0;
      valueAxis.min = 0;
      valueAxis.cursorTooltipEnabled = false;
      
      var series = chart.series.push(new am4charts.ColumnSeries);
      series.dataFields.valueY = "steps";
      series.dataFields.dateX = "date";
      series.tooltipText = "{valueY.value}";
      series.tooltip.pointerOrientation = "vertical";
      series.tooltip.hiddenState.properties.opacity = 1;
      series.tooltip.hiddenState.properties.visible = true;
      series.tooltip.adapter.add("x", function (x, target) {
          return am4core.utils.spritePointToSvg({ x: chart.plotContainer.pixelX, y: 0 }, chart.plotContainer).x + chart.plotContainer.pixelWidth / 2;
      })
      
      var columnTemplate = series.columns.template;
      columnTemplate.width = 30;
      columnTemplate.column.cornerRadiusTopLeft = 20;
      columnTemplate.column.cornerRadiusTopRight = 20;
      columnTemplate.strokeOpacity = 0;
      
      var cursor = new am4charts.XYCursor();
      cursor.behavior = "panX";
      chart.cursor = cursor;
      cursor.lineX.disabled = true;
      
      chart.events.on("datavalidated", function () {
          console.log("7");
          dateAxis.zoomToDates(new Date(2018, 0, 21), new Date(2018, 1, 1), false, true);
      });
      
      cursor.events.on("cursorpositionchanged", updateTooltip);
      dateAxis.events.on("datarangechanged", updateTooltip);
      function updateTooltip() {
        dateAxis.showTooltipAtPosition(0.5);
        series.showTooltipAtPosition(0.5, 0);
        series.tooltip.validate(); // otherwise will show other columns values for a second
      }

    }
    

    }

  }
