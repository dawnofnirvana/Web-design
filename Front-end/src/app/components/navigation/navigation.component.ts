import { Component, OnInit } from '@angular/core';
import { User } from '../../material/User';
import {NavigationService} from './navigation.server'
import { Router,ActivatedRoute } from '@angular/router';
import{LoginService}from '../login/login.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers:[NavigationService]
})
export class NavigationComponent  {

  public user = {};

  constructor(private navService: NavigationService, private route: ActivatedRoute,private logins:LoginService,private router:Router) {
    // this.user = new User(); 
  }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.user['email'] = params['email'];
      console.log(this.user['email']); 
    })

  }

 // post function for add user
  post() {
    console.log(this.user)
    this.navService.postEvents(this.user);
  }

  // logout fuction
  logout(){
        this.logins.updatedLoginStatus(false);
        this.user=null;
        this.router.navigateByUrl('/components/login')
  }


}

