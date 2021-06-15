export class IsUser {
    isUser:boolean;
    apiKey:string;
    message:string;

    constructor(isUser:boolean,apiKey:string,message:string){
        this.isUser = isUser;
        this.apiKey = apiKey;
        this.message = message;
    }
}
