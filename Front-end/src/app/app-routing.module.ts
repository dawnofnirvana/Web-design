import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from 'src/app/components/login/login.component'
import {RegisterComponent} from 'src/app/components/register/register.component'
import { NavigationComponent } from './components/navigation/navigation.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventsComponent } from './components/events/events.component';
import { CalendarListComponent } from './components/calendar/calendar-list/calendar-list.component';
import { DetailComponent } from './components/detail/detail.component';
import { PubliceventsComponent } from './components/publicevents/publicevents.component';
const routes: Routes = [
  { path: 'components/login', component: LoginComponent },
  {path:'components/register',component:RegisterComponent},
  {path:'components/navi',component:NavigationComponent,
    children: [
    {path: 'calendar', component: CalendarComponent},
    {path: 'events', component: EventsComponent},
    {path: 'calendar', component: CalendarComponent},
    {path:'calendar/calendar-list/:id', component:CalendarListComponent},
    {path:'calendar/detail', component:DetailComponent},
    {path:'events/detail', component:DetailComponent},
    {path:'publicevents',component:PubliceventsComponent},
    {path:'publicevents/detail',component:DetailComponent}

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
