import { Component, OnInit } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-events',
templateUrl: './events.component.html',
styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public selectedDate: any = ''; 
  public todoList = [];
  public md = "\u00D7";
  public dataStorage = [];
  public event;
  public email;
  public user = {};
  public pbody;
  public detaillink = "detail"
  public searchItem;
  

  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user['email'] = params['email'];
      this.email = params['email'];
      console.log(this.user['email']); 
    })
    if(this.todoList.length<1){
      this.getData()
    }

  }
  getData(){
    this.http.get('/events')
            .map(res => res.json())
            .subscribe(data => {
              this.event = data;
              for(var i=0;i<this.event.events.length;i++){
                if(this.email == this.event.events[i].username){
                  this.todoList.push(this.event.events[i])
                  console.log(this.event.events[i])
                }           
              }
    });

  }

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
    this.todoList.splice(index, 1);
    this.http.post('/deleteEvent', temp)
    .subscribe(res => console.log(res.headers.get("notice")));
    this.todoList = [];
    this.getData();
  }

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
    console.log(temp);
  }

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
    console.log(temp);
    console.log(this.event.events[index]);
    
  }

  SearchTrigger(){
    var temp = [];
    if(!this.searchItem){
      alert("Please enter something")
      this.todoList=[]
      this.getData()
    }
    else{
      for(var i=0;i<this.todoList.length;i++){
        if(this.todoList[i].title.indexOf(this.searchItem)<=-1 && this.todoList[i].address.indexOf(this.searchItem)<=-1 && this.todoList[i].date.indexOf(this.searchItem)<=-1){
        }    
        else{
          temp.push(this.todoList[i])
        }       
      }
      this.todoList = temp;
      if(this.todoList.length==0){
        alert("No result Found")
        this.getData()
      }
    }
   
  }
}

