
import { NgModule, Component } from '@angular/core';

import{Http} from '@angular/http'
import { from } from 'rxjs';
import{Observable} from 'rxjs/observable'
import 'rxjs/add/operator/map'
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: `app.component.html`,
  providers: []
})
export class AppComponent 
{
  item = []
  user;
  constructor(private http: Http){

  }
// template for getting data
dosomething() {
  this.http.get('/users')
                .map(res => res.json())
                .subscribe(data => {
                  this.user = data;
                  // console.log(this.user);
                  for(var i=0;i<this.user.users.length;i++){
                    // console.log(this.user.users[i].email)
                    this.item.push(this.user.users[i].email)
                  }
                  alert(this.item)
                })
  
}

doelsething() {
  // this.http.post('/addname')
}

  


  
}


export class AppModule {}
