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
      chart.dateFormatter.inputDateFormat = "YYYY-MM-dd";
      chart.zoomOutButton.disabled = true;    
      chart.mouseWheelBehavior = "panY";  
      
      chart.data = [{
          'name': 'organizacion1',
          "date": "2018-02-01",
          "steps": 4561,
          'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png' 
      }, {
          'name': 'organizacion2',
          "date": "2018-03-02",
          "steps": 5687,
          'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'
      }, {
          'name': 'organizacion3 ',
          "date": "2018-04-03",
          "steps": 6348,
          'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'
      }, {
          'name': 'organizacion4',
          "date": "2018-04-18",
          "steps": 4878,
          'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'
      }, {
          'name': 'organizacion5',
          "date": "2018-05-05",
          "steps": 9867,
          'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'
      }, {
          'name': 'organizacion6',
          "date": "2018-06-06",
          "steps": 7561,
          'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'
      }, {
          'name': 'organizacion7',
          "date": "2018-07-07",
          "steps": 1287,
          'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'
      }, {
          'name': 'organizacion8',
          "date": "2018-08-08",
          "steps": 3298,
          'bullet': 'https://www.amcharts.com/lib/images/faces/A04.png'
      }];
      
      var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "name";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.inversed = true;
      categoryAxis.fontSize = 10;
      categoryAxis.cursorTooltipEnabled = false;
      categoryAxis.renderer.labels.template.maxWidth = 100;
      categoryAxis.renderer.labels.template.wrap = true;
      categoryAxis.renderer.labels.template.align = 'left';  

      
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.strokeOpacity = 0;
      dateAxis.dateFormats.setKey("month", "m");
      dateAxis.baseInterval = { count: 1, timeUnit: "month" };
      dateAxis.tooltip.hiddenState.properties.opacity = 1;
      dateAxis.tooltip.hiddenState.properties.visible = true;
      
      
    //   dateAxis.tooltip.adapter.add("x", function (x, target) {
    //       return am4core.utils.spritePointToSvg({ x: chart.plotContainer.pixelX, y: 0 }, chart.plotContainer).x + chart.plotContainer.pixelWidth / 2;
    //   })
      
    //   var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    //   valueAxis.renderer.inside = true;
    //   valueAxis.renderer.labels.template.fillOpacity = 0.3;
    //   valueAxis.renderer.grid.template.strokeOpacity = 0;
    //   valueAxis.min = 0;
    //   valueAxis.cursorTooltipEnabled = false;
      
      var series = chart.series.push(new am4charts.ColumnSeries);
      series.columns.template.tooltipText = "Fecha de Presentación: {dateX}";      
      series.dataFields.dateX = "date";
      series.dataFields.categoryY = "name";


    //   series.dataFields.valueY = "steps";
    //   series.dataFields.dateX = "date";
    //   series.tooltipText = "{valueY.value}";
    //   series.tooltip.pointerOrientation = "vertical";
    //   series.tooltip.hiddenState.properties.opacity = 1;
    //   series.tooltip.hiddenState.properties.visible = true;
    //   series.tooltip.adapter.add("x", function (x, target) {
    //       return am4core.utils.spritePointToSvg({ x: chart.plotContainer.pixelX, y: 0 }, chart.plotContainer).x + chart.plotContainer.pixelWidth / 2;
    //   })
      
    //   var columnTemplate = series.columns.template;
    //   columnTemplate.height = 5;
    //   columnTemplate.column.cornerRadiusBottomRight = 20;
    //   columnTemplate.column.cornerRadiusTopRight = 20;
    //   columnTemplate.strokeOpacity = 0;
      
    //   var cursor = new am4charts.XYCursor();
    //   cursor.behavior = "panX";
    //   chart.cursor = cursor;
    //   cursor.lineX.disabled = true;
      
      chart.events.on("datavalidated", function () {
        categoryAxis.zoomToIndexes (0,5, false, true);
      });
      

      chart.scrollbarY = new am4core.Scrollbar();
      chart.scrollbarY.width = 5;
      chart.scrollbarY.background.fill = am4core.color('green');
      chart.scrollbarY.fillOpacity = 1;
      chart.scrollbarY.stroke = am4core.color('rgba(0,0,0,.5)');
      chart.scrollbarY.strokeWidth = 0.5;
      chart.scrollbarY.thumb.minHeight = 50;
      chart.scrollbarY.thumb.clickable = false;
      chart.scrollbarY.startGrip.hide();
      chart.scrollbarY.endGrip.hide();

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "panY";
      chart.cursor.lineY.disabled = false;
      chart.cursor.lineY.stroke = am4core.color('#8F3985');
      chart.cursor.lineY.strokeWidth = '60%';     
      chart.cursor.lineY.strokeOpacity = 0.2;
      chart.cursor.lineY.strokeDasharray = '';


    //   cursor.events.on("cursorpositionchanged", updateTooltip);
    //   dateAxis.events.on("datarangechanged", updateTooltip);
    //   function updateTooltip() {
    //     dateAxis.showTooltipAtPosition(0.5);
    //     series.showTooltipAtPosition(0.5, 0);
    //     series.tooltip.validate(); // otherwise will show other columns values for a second
    //   }

    var bullet = series.bullets.push(new am4charts.Bullet());
      var image = bullet.createChild(am4core.Image);
      image.verticalCenter = "middle";
      image.horizontalCenter = "left";   
      image.dx = -20;   
      image.propertyFields.href = "bullet";
      image.tooltipText = series.columns.template.tooltipText;
      image.propertyFields.fill = "color";
      image.filters.push(new am4core.DropShadowFilter());    

    }
    

    }

  }
