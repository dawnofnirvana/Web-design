import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import{HttpModule} from '@angular/http'
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common'
import { EventsComponent } from './components/events/events.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {LoginService} from '../app/components/login/login.service'

import { CalendarListComponent } from './components/calendar/calendar-list/calendar-list.component';
import { MainboardComponent } from './components/mainboard/mainboard.component';
import { RegisterComponent } from './components/register/register.component';

import { LoginComponent } from './components/login/login.component';
import { DetailComponent } from './components/detail/detail.component';
import { PubliceventsComponent } from './components/publicevents/publicevents.component';
import { NavigationService } from './components/navigation/navigation.server';
@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    CalendarComponent,
    EventsComponent,
    NavigationComponent,
    CalendarListComponent,
    MainboardComponent,
    RegisterComponent,
    LoginComponent,
    DetailComponent,
    PubliceventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BotDetectCaptchaModule,
    CommonModule,
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    HttpModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAioxoXFhJmOEFLyosEN6JjhpWq-ElUx7M'
    }),
    FormsModule,
    MaterialModule
  ],
  providers: [DatePipe,LoginService,NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
