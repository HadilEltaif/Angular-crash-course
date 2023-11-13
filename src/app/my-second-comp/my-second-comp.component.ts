import { Component } from '@angular/core';

@Component({
  selector: 'app-my-second-comp',
  templateUrl: './my-second-comp.component.html',
  styleUrls: ['./my-second-comp.component.scss']
})
export class MySecondCompComponent {
onSubmit() {
  this.isSubmitted=true;
  this.messages.push({'email':this.email, 'password':this.password})
throw new Error('Method not implemented.');
}
  email: string ='';
  password: string ='';
  isSubmitted: boolean = false;
  messages: Array<any> = [];
}
