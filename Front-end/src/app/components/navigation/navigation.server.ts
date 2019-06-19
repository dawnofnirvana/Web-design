import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Http} from '@angular/http'
import { User } from '../../material/User';

@Injectable()
export class NavigationService {

	constructor(private httpc: HttpClient,private http:Http){

	}
	// post function for add user
    postEvents(user) {
        this.http.post('/addname', user).subscribe(res => {
			console.log(res);
        });
        console.log(user)

    }

}