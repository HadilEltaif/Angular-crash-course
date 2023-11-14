import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {


  messages : Array<any> = [];
  
  constructor() {
    this.Int();
   }

  Int():void{
    this.insert(
      {
        name: 'Hadil',
        email: 'Hadil@gmail.com',
        message: 'hello world'
      }
    )

    this.insert(
      {
        name: 'Hiba',
        email: 'Hiba@gmail.com',
        message: 'hello world-Hiba'
      }
    )

    this.insert(
      {
        name: 'Ahmed',
        email: 'Ahmed@gmail.com',
        message: 'hello world-Ahmed'
      }
    )
  }
  
  insert(message:{name:string,email:string,message:string}):void {
     this.messages.push(message);
  }

  getAll():Array<any> {
    return  this.messages;
  }

  deleteMessage(index:number):void {
    this.messages.splice(index,1);
  }

}