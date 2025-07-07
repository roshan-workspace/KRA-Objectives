export class UserCreatedEvent{
    constructor(private readonly userId: string,  email:string){}
}