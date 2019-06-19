import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class DetailService {

	constructor(private http: HttpClient){

	}
	
	// validateLogin(user: User){
	// 	return this.http.post('/addname',{
	// 		email : user.email,
	// 		password : user.password
	// 	})
    // }
    postEvents(event) {
        this.http.get('/findbyid', event).subscribe(res => {
        });
        console.log(event)

        

    }

}