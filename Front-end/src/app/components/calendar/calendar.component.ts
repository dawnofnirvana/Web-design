import { Component, OnInit } from '@angular/core';
import { GoogleMapComponent } from '../google-map/google-map.component'
import{Http} from '@angular/http'
import { DatePipe } from '@angular/common'
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { Event } from '../../material/Event';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public Title: any = 'Calendar Picker';
  public selectedDate: Date; 
  public todoList = [];
  public md = "\u00D7";
  public pbody;
  public new_date:String;
  public link = "calendar-list/5"
  public detaillink = "detail"
  public event;
  public email;
  public user = {};
  public clicked = false;
  public pipe;
  public validateDate = false;
  public address:String;  
  pop=false;
  constructor(private http: Http,public datepipe: DatePipe, private route: ActivatedRoute) { }

  receiveAddress($event) {
    this.address = $event
    console.log(this.address)
   }
  receivePopup($event){
    this.pop=$event;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user['email'] = params['email'];
      this.email = params['email'];
      console.log(this.user['email']); 
    })
  }

  // get User data by username and selected Date
  getData(){
    this.todoList = []
    this.http.get('/events')
    .map(res => res.json())
    .subscribe(data => {
      this.event = data;
              for(var i=0;i<this.event.events.length;i++){
                if(this.new_date == this.event.events[i].date && this.email == this.event.events[i].username){
                  this.todoList.push(this.event.events[i])
                }
                console.log("bool",this.new_date == this.event.events[i].date)
                console.log("event",this.event.events[i])
              }
              if(this.todoList.length<1){
                alert("There is no event in "+ this.new_date)
              }
    });
  }

  popup(t:boolean){
    this.pop=t

  }

  // click to check event for selected Date
  clickTrigger(){

    this.pipe = new DatePipe('en-US');
    var today = new Date();
    const myFormattedDate = this.pipe.transform(this.selectedDate, 'shortDate');
    this.new_date = myFormattedDate;
    console.log(this.new_date)
    if(this.selectedDate){
      this.getData()
      this.clicked = true;
      if(today <= new Date(myFormattedDate)){
        this.validateDate = true;
      }
    }
    else{
      alert("Please Select a Date!")
    }

  }

  // navigate to add
  clickAddTrigger(){
    
    if(this.selectedDate){
      alert("Add New Event")  
    }
    else{
      alert("Illegal Date!")  
    }
}
  
// delete when click x on each item
  DeleteTrigger(index){
    console.log("click"+this.event[index])
 
    var temp;
    console.log(this.event.events[index])
    for(var i=0;i<this.event.events.length;i++){
      if(this.todoList[index] == this.event.events[i]){
        temp = this.event.events[i]
        console.log(this.event.events[i])
      }           
    }
    this.http.post('/deleteEvent', temp)
    .subscribe(res => console.log(res.headers.get("notice")));
    this.getData();
  }
  
  // go to detail page with proper object_id
  EditTrigger(index){
    var temp;
    console.log(this.event.events[index])
    for(var i=0;i<this.event.events.length;i++){
      if(this.todoList[index] == this.event.events[i]){
        temp = this.event.events[i]
        console.log(this.event.events[i])
      }           
    }
    var theid = temp._id;
    this.pbody = theid;
    console.log(theid);
    console.log(this.event.events[index]);
  }

  // assign item to selected item, to ignore asynchronous
  assignPbody(index){
    var temp;
    console.log(this.event.events[index])
    for(var i=0;i<this.event.events.length;i++){
      if(this.todoList[index] == this.event.events[i]){
        temp = this.event.events[i]
        console.log(this.event.events[i])
      }           
    }
    var theid = temp._id;
    this.pbody = theid;
    console.log(theid);
    console.log(this.event.events[index]);
    
  }
}

