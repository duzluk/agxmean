import { Injectable } from '@angular/core';
import { PieChartConfig, GoogleChartsBaseService, CalendarChartConfig } from '../_helpers';

declare var google: any;

@Injectable()
export class GoogleCalendarChartService{

  constructor() { 
    //google.load('visualization', '1', {'packages':['corechart'], 'language': 'ja'});
    google.charts.load('current', {'packages':['calendar']});
  }

  public BuildCalenderChart(elementId: string, data: any[], config: CalendarChartConfig): void {
    var chartFunc = () => { return new google.visualization.Calendar(document.getElementById(elementId)); };
    var options = {
      title: config.title,
      height: config.height
    };

    this.buildChart(data, chartFunc, options);
  }

  buildChart(data: any[], chartFunc: any, options: any): void {
    var func = (chartFunc, options) => {
      var datatable = google.visualization.arrayToDataTable(data);
      chartFunc().draw(datatable, options);
    };
    var callback = () => func(chartFunc, options);
    google.charts.setOnLoadCallback(callback);
  }

}