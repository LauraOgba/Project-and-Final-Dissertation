import {Component, ElementRef,OnInit, ViewChild,ViewEncapsulation} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import 'fullcalendar';
import {Router} from "@angular/router";
import "dhtmlx-scheduler";
import {} from "@types/dhtmlxscheduler";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  title: String;
  location: String;
  constructor(
    private authService: AuthService,
    private router:Router,
  ) {}

  ngOnInit() {
    $('#calendar').fullCalendar({
      defaultView: 'month'
    });
  }

}
