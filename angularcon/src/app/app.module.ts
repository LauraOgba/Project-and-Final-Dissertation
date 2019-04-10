import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from '../../../angularcon/src/app/components/navbar/navbar.component';
import { LoginComponent } from '../../../angularcon/src/app/components/login/login.component';
import { RegisterComponent } from '../../../angularcon/src/app/components/register/register.component';
import { HomeComponent } from '../../../angularcon/src/app/components/home/home.component';
import { CalendarComponent } from '../../../angularcon/src/app/components/calendar/calendar.component';
import { ProfileComponent } from '../../../angularcon/src/app/components/profile/profile.component';

import { ValidateService} from '../../../angularcon/src/app/services/validate.service';
import { AuthService} from '../../../angularcon/src/app/services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages/module';
import {AuthGuard} from "../../../angularcon/src/app/guard/auth.guard";
import 'fullcalendar';
import * as $ from 'jquery';


const appRoutes: Routes = [
  {path:  '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'calendar', component: CalendarComponent, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]}

]

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CalendarComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
