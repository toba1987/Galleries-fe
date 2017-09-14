export class User {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;

    constructor(

	    data ?: {
            id?: number,
            first_name?: string,
            last_name?: string,
            email?: string,
            password?: string;
        }
  	) {
	    Object.assign(this, data || {});
	    if(data){
	        this.firstName = data.first_name || '';
            this.lastName = data.last_name || '';
            this.email = data.email || '';
            this.password = data.password || '';
        }
    }
}
