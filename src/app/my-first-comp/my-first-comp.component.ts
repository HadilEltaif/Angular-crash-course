import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss']
})
export class MyFirstCompComponent {
onSubmit() {
  this.isSubmitted = true;
  this.messages.push({
    'name': this.name,
    'email': this.email,
    'message': this.message
  });
  console.log(this.messages);
throw new Error('Method not implemented.');
}
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

}
