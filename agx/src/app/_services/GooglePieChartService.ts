import { Injectable } from '@angular/core';
import { PieChartConfig, GoogleChartsBaseService } from '../_helpers';

declare var google: any;

@Injectable()
export class GooglePieChartService extends GoogleChartsBaseService {

    constructor() {
        super();
        google.charts.load('current', {'packages':['corechart']});
    }

    public BuildPieChart(elementId: string, data: any[], config: PieChartConfig): void {
        var chartFunc = () => { return new google.visualization.PieChart(document.getElementById(elementId)); };
        var options = {
            title: config.title,
            pieHole: config.pieHole,
            width: config.width,
            height: config.height
        };

        this.buildChart(data, chartFunc, options);
    }

    // protected buildChart(data: any[], chartFunc: any, options: any): void {
    //     var func = (chartFunc, options) => {
    //         var datatable = google.visualization.arrayToDataTable(data);
    //         chartFunc().draw(datatable, options);
    //     };
    //     var callback = () => func(chartFunc, options);
    //     google.charts.setOnLoadCallback(callback);
    // }

}