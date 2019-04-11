import {Component, ElementRef, Injectable, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import 'fullcalendar';
import {Router} from "@angular/router";
import "dhtmlx-scheduler";
// @ts-ignore
import {} from "@types/dhtmlxscheduler";




@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers:[ AuthService ]
})
export class CalendarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router:Router,
  ) {}

  ngOnInit() {

    scheduler.init('scheduler_here', new Date(2019, 4, 10), "month");
    scheduler.templates.xml_date = function(value){ return new Date(value); };
    scheduler.load("/data", "json");
  }

}
