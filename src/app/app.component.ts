import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Todo List';
  constructor() {
    this.changedName('John');

  }

  changedName(name:string){
    this.name = name;
  }
}
