import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/material/User';
import{Http} from '@angular/http'
import {Router} from '@angular/router'
import{LoginService} from'../login/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:Http,private router:Router,private logins:LoginService) { }
user=new User();//used for data binding with the user
isSingedin:boolean// check whether there's user signed in 

  ngOnInit() {
   
  }
  public login(){
    if(this.user.email){
    this.http.get('/user/'+this.user.email).map(res=>res.json()).subscribe(data=>{
      if(data['users'][0]!=null){//check whether the user with the user name exist
      if(data['users'][0]['password']==this.user.password){// validate the email and password pair
        this.logins.updatedLoginStatus(true);
        this.router.navigateByUrl('/components/navi?email='+this.user.email)//if the user is valid ,change the status and navigate to navigation component
      }else{
        alert('invalid email and password pair!')
      }}else{
        alert('invalid email and password pair!')
      }
    
  })
}else{
  alert("email is neccessary!")
}
    
 
}

}
