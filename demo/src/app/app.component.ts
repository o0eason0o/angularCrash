import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = 'This is the start of your demo. lets do this mothafker';

  constructor(){
    this.name = 'updated info';
    this.changeName('more');
  }

  changeName(name:string):void {
    this.name = name;
  }
}
