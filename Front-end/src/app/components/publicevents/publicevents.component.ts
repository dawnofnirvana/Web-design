import { Component, OnInit } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-publicevents',
  templateUrl: './publicevents.component.html',
  styleUrls: ['./publicevents.component.scss']
})
export class PubliceventsComponent implements OnInit {

  public selectedDate: any = ''; 
  public todoList = [];
  public md = "\u00D7";
  public dataStorage = [];
  public event;
  public user = {};
  public email;
  public pbody;
  public detaillink = "detail"
  public searchItem

  constructor(private http: Http,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{

      console.log(params);
      this.user['email'] = params['email'];
      this.email = params['email'];
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
                if(this.event.events[i].private==false){
                  this.todoList.push(this.event.events[i])
                  console.log(this.event.events[i])
                }
              }
    });

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

  // search button clicked
  SearchTrigger(){
    var temp = [];
    // check if search item not empty
    if(!this.searchItem){
      alert("Please enter something")
      this.todoList=[]
      this.getData()
    }
    else{
      // check if search item in Title/address/
      for(var i=0;i<this.todoList.length;i++){
     
        if(this.todoList[i].title.indexOf(this.searchItem)<=-1 && this.todoList[i].address.indexOf(this.searchItem)<=-1 && this.todoList[i].date.indexOf(this.searchItem)<=-1){
        }    
        else{
          temp.push(this.todoList[i])
        }       
      }
      this.todoList = temp; 
        console.log(this.todoList)
      // if no result found return all item back
      if(this.todoList.length==0){
        alert("No result Found")
        this.getData()
      }
    }
   
  }

}
