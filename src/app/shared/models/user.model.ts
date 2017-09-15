export class User {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public password_confirmation: string;
    public accept: boolean;

    constructor(

	    data ?: {
            id?: number,
            first_name?: string,
            last_name?: string,
            email?: string,
            password?: string,
            password_confirmation?: string,
            accept?: boolean,
        }
  	) {
	    Object.assign(this, data || {});
	    if(data){
	        this.firstName = data.first_name || '';
            this.lastName = data.last_name || '';
            this.email = data.email || '';
            this.password = data.password || '';
            this.password_confirmation = data.password_confirmation || '';
            this.accept = data.accept || false;
        }
    }
}
