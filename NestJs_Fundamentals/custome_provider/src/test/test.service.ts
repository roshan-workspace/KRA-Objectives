import { Injectable, Scope } from '@nestjs/common';

@Injectable({scope:Scope.REQUEST})
export class TestService {

    count:number = 0;

    increment (){
        console.log(`Count Incremented by 1 Count:${this.count}`);
        this.count+=1
    }
}
