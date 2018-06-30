import { Component } from '@angular/core';
@Component({
   selector: 'app-message',
   template: `<h1>Hello Radhe Krishna...{{message}}</h1>`,
   styles: ['h1{color: green;}']
})
export class MessageComponent {
    message: string = "Hi...!";
}