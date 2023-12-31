import { Component, inject } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss']
})
export class MyFirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = []; 
  private service: MyFirstService = inject(MyFirstService);

 constructor( ){
  this.messages = this.service.getAll();
  this.isSubmitted = this.messages.length > 0;
 }


  deleteMessage(index:number):void {
  this.service.deleteMessage(index);
throw new Error('Method not implemented.');
  }
onSubmit() {
  this.isSubmitted = true;
  this.service.insert({
    'name': this.name,
    'email': this.email,
    'message': this.message
  });
  console.log(this.messages);
throw new Error('Method not implemented.');
  }
  

}
