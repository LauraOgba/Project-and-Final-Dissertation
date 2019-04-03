import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import 'fullcalendar';
import {Router} from "@angular/router";


@Component({
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
