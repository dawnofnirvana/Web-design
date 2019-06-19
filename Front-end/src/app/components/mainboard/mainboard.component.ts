import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/material/User';
import { Router,ActivatedRoute,RouterModule } from '@angular/router';
import{LoginService} from'../login/login.service'
@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.scss']
})
export class MainboardComponent implements OnInit {

  constructor(private router: Router,private logins:LoginService) {
     }
 isSignin=false
  user:User
  ngOnInit() {
    this.logins.data.subscribe(data=>this.isSignin=data)// use service to observe the sign in status
  }

  
}
