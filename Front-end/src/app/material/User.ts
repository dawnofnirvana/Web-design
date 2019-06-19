// User module with Type
export class User {
	constructor(){
		this.email = '';
		this.password = '';
	}
	public email;
	public password;
	id:number;
	type:Type;

}

export enum Type{
	u = "user",
	a ="administrator"}
