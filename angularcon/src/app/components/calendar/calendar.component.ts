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
  styleUrls: ['./calendar.component.css'],
  providers:[ AuthService ]
})
export class CalendarComponent implements OnInit {
  @ViewChild("scheduler_here") calendarContainer: ElementRef;

  constructor(
    private authService: AuthService,
    private router:Router,
  ) {}

  ngOnInit() {
    scheduler.config.xml_date = "%Y-%m-%d %H:%i";
    scheduler.init(this.calendarContainer.nativeElement);
    this.authService.get()
      .then((data) => {
        scheduler.parse(data, "json");
      });
  }

}
