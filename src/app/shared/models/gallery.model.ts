export class Gallery {
    public id: number;
    public name: string;
    public description: string;
    public user_id: number;

    constructor(

	    data ?: {
            id?: number,
            name?: string,
            description?: string,
            user_id?: number
        }
  	) {
	    Object.assign(this, data || {});
	    if(data){
	        this.name = data.name || '';
            this.description = data.description || '';
        }
    }
}
