import { Component, OnInit, Input } from '@angular/core';
import { CalendarChartConfig } from '../../_helpers';
import { GoogleCalendarChartService } from '../../_services/GoogleCalendarChartService';

@Component({
  selector: 'calendar-chart',
  templateUrl: './calendar-chart.component.html',
  styleUrls: ['./calendar-chart.component.css']
})
export class CalendarChartComponent implements OnInit {

  @Input() data: any[];
  @Input() config: CalendarChartConfig;
  @Input() elementId: string;

  constructor(private _calendarChartService: GoogleCalendarChartService) {
      
  }

  ngOnInit(): void {
      this._calendarChartService.BuildCalenderChart(this.elementId,this.data,this.config)
  }

}
