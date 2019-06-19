import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from'../../material/User' 

@Injectable()
export class LoginService {

private dataSource = new BehaviorSubject<boolean>(false);
data = this.dataSource.asObservable();
//this service is used for change the status of user login
constructor() { }

updatedLoginStatus(data: boolean){
this.dataSource.next(data);
}
}