import {Component, ElementRef, Injectable, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import 'fullcalendar';
import {Router} from "@angular/router";
import "dhtmlx-scheduler";
// @ts-ignore
import {} from "@types/dhtmlxscheduler";




@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @ViewChild("scheduler_here") calendarContainer: ElementRef;
  id: string;
  start_date: string;
  end_date: string;
  text: string;



  constructor(
    private authService: AuthService,
    private router:Router,
  ) {}

  ngOnInit() {
    scheduler.init(this.calendarContainer.nativeElement, new Date());
  }

}
