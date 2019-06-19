import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CalendarService } from './calender-list-component.server'
import { Event } from '../../../material/Event'

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss'],
  providers:[CalendarService]
})
export class CalendarListComponent implements OnInit {
  

  public event = new Event();
  public user = {};
  public email;
  public toggle = false
  public checkPrivacy = "Private";
  
  constructor(private calendarService: CalendarService, private router: Router, private route: ActivatedRoute) { 
  }
  
  
 // post function to add event
  postevent() {
    console.log("postEvent")
    if(this.event.title&&this.event.description){
    this.event["username"] = this.email
    this.calendarService.postEvents(this.event)
    console.log(this.event)
    alert("Add success")
    this.router.navigateByUrl('/components/navi/calendar?email='+this.email)}else {
alert("title and description shouldn't be empty!")
    }
  }

  //check private or public
  toggleButton(){
    alert()
    this.toggle = !this.toggle
    if(this.toggle){
      this.checkPrivacy="Public"
      this.event['private']="false"
    }
    else{
      this.checkPrivacy="Private"
      this.event['private']="true"
    }
}

  ngOnInit() {
    // // check current url
    // console.log(this.router.url)
    this.event['private']="true"
    this.route.queryParams.subscribe(params => {
      console.log(params['address']); 

      this.event['address'] = params['address'];
      this.event['date']= params['date'];
      this.user['email'] = params['email'];
      this.email=params['email'];
    })

  }

}
