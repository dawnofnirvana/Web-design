import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { User,Type} from 'src/app/material/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  constructor(private http : Http,private router:Router) { }
  u=new User()
 checkUser={}
 namevalid=true;//this is used for check the uniqueness of email are gonna registered
 toReturn:boolean;
  ngOnInit() {
    this.toReturn=false
  }
  regexe = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');//REGEX to check email 
  regexp=new RegExp('^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,15})*$');//REGEX to check password
  useremail:string;
  password:string;
  // check if email already taken
  public checkemail(){
  this.http.get('/user/'+this.useremail).map(res=>res.json()).subscribe(data=>{this.checkUser=data['users'][0];
 
if(!this.checkUser){//if find no user with the same email
this.namevalid=true

}else {
  this.namevalid=false//if find the user with the same email
}})
  }


public validate(){
  if(this.regexe.test(this.useremail)){//validate email
  if(this.regexp.test(this.password)){//validate password
    this.checkemail();//check if email is unique
    if(this.namevalid){
    alert('All done!')
    this.u.email=this.useremail;
    this.u.password=this.password;
    this.u.type=Type.u;
   // console.log(this.u)
   this.http.post('addUser',this.u).subscribe(res=>console.log(res))//add user to database
   this.router.navigateByUrl('/components/login')//navigate to login component
    }else{
alert('please use an unique email!')
    }
  }else{
    alert("Password is invalid!\nAt least on lowercase,one uppercase character and one number\n6-15 chars in total")
  }
  }
}
 

}
