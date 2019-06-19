import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Event } from '../../../material/Event'


@Injectable()
export class CalendarService {

	constructor(private http: Http){

	}
	
	
	// validateLogin(user: User){
	// 	return this.http.post('/addname',{
	// 		email : user.email,
	// 		password : user.password
	// 	})
    // }
    postEvents(event) {
        this.http.post('/addevents', event).subscribe(res=>{console.log(res)})
        console.log(event)

    }

}