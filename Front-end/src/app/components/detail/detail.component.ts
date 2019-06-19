import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import{Http} from '@angular/http'
import { GoogleMapComponent } from '../google-map/google-map.component'
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material';
import { DetailService } from './detail.component.server'

@Component({
selector: 'app-detail',
templateUrl: './detail.component.html',
styleUrls: ['./detail.component.scss'],
providers:[DetailService]
})
export class DetailComponent implements OnInit {
public event = {};
public user = {};
public nowid;
public email;
public link = ""
public checkEvent = ""
public helpEvent = ""
public toggle
public checkPrivacy = "Private";
public fromPublic = false;

constructor(private router:Router,private route:ActivatedRoute,private detailService: DetailService,private http: Http){}

ngOnInit() {
this.route.queryParams.subscribe(params =>{

console.log(params);
this.nowid = params._id;
this.user['email'] = params['email'];
this.email = params['email'];
if(params.connection == "calendar"){
    this.link = "/components/navi/calendar";
    this.checkEvent = "Add Event";
    this.helpEvent = "Please enter following information:";
}
else if(params.connection == "events"){
    this.link = "/components/navi/events";
    this.checkEvent = "Event Detail";
    this.helpEvent = "Review or Change event detail information:";
}
else{
    this.link = "/components/navi/publicevents";
    this.checkEvent = "Event Detail";
    this.helpEvent = "Review detail information:";
    this.fromPublic = true;
}

})
    this.postevent();


}
    pop=false

    receiveAddress($event) {
    this.event['address'] = $event
    console.log( this.event['address'] )
   }
  receivePopup($event){
    this.pop=$event;
  }

  // add event
    postevent() {

    this.http.post('/findbyid', {"_id": this.nowid}).map(res => res.json())
        .subscribe(data => {
        this.event = data["events"];
        this.nowid = data["events"]._id
        console.log(this.event)
        this.toggle =data["events"].private
        if(data["events"].private==true){
            this.checkPrivacy = "Private";
        }
        else{
            this.checkPrivacy = "Public";
    
        }
        });
    }

popup(t:boolean){
    this.pop=t

  }
  // submit to update event
submit(){
      
    console.log(this.event)
    
    this.http.post('/issues', this.event).subscribe(res => {
    });
    this.router.navigateByUrl(this.link+'?email='+this.email);
    alert("Update success")

  }

  // toggle if public, button will be checked
  toggleButton(){
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
}