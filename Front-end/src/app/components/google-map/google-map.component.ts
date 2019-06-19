import { BrowserModule } from '@angular/platform-browser';
import {  Component,Output, EventEmitter, Input } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
//import { toPromise } from 'rxjs/Operator/toPromise';
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent  {
  @Output() addressEvent = new EventEmitter<String>();// used to send address back to navigation component
  @Output() popEvent = new EventEmitter<Boolean>();// used when we finished add and set the pop status so that the
  // div will disappear in navigation component
 
  constructor (private httpService: HttpClient) { }
  ngOnInit () {
  
  }

  addplace(){// when user click add button, get postion and transer it into string format and send it back to navigation component
    if(this.locationchoosed){
    this.httpService.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+this.lat+','+this.lng+'&key=AIzaSyAioxoXFhJmOEFLyosEN6JjhpWq-ElUx7M').subscribe(
      data => {
        this.addressList = data as object[];	 // FILL THE ARRAY WITH DATA.
       
        var add:String
        this.address=this.addressList['results'][0]['formatted_address'];
        this.addressEvent.emit(this.address)

      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    
    this.popEvent.emit(false);
    alert("add succeed!");
    }else {
      alert("choose a place first!")
    }
  }
 
 

  getAddress(lat:number,lng:number){
 this.httpService.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key=AIzaSyAioxoXFhJmOEFLyosEN6JjhpWq-ElUx7M').subscribe(
      data => {
        this.addressList = data as object[];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
        var add:String
        this.address=this.addressList['results'][0]['formatted_address']
       // add=this.address
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }//use lat and lng to get the location 

  getPosition(add:String){// this function is used for get lat and lng according to user input as string
    console.log("input:"+add)
    this.httpService.get('https://maps.googleapis.com/maps/api/geocode/json?address='+add+'&key=AIzaSyAioxoXFhJmOEFLyosEN6JjhpWq-ElUx7M').subscribe(
      data => {
        this.positionList= data as object[];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
        this.position=this.positionList['results'][0]['geometry']['location']
        console.log(this.position);
        this.lat=this.position['lat'];
        this.lng=this.position['lng'];
        this.locationchoosed=true;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    
  }
  
  title:String ="marvel map";
 lat: number = 51.678418;
 lng: number = 7.809007;
  locationchoosed=false;
  marker:any;
  addressList=[];
 @Input() address:String;
  positionList=[];
  position:[];
  @Input() from:String;
  //map: google.maps.Map;

  
  chooselocation(event){// when user click on map, update the lag and lng accordinglly
    console.log(event);
    this.lat=event.coords.lat;
    this.lng=event.coords.lng;
    this.locationchoosed=true;
    this.getAddress(this.lat,this.lng)
  }

  findMe() {// get current location via geolocation
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
       // this.showPosition(position);
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;
   
       this.locationchoosed=true;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  
  }
  getlocation(){// reset the location
    this.getPosition(this.address);
  }
}


