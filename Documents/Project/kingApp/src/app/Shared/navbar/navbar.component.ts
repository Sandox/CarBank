import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  name = 'John';
  todayDate = new Date();
  constructor() { }

  state: true;

  Logout() {
    this.name = '';
    console.log('User is logging out');
  }

  anotherLink() {
    this.name = this.name;
    console.log(this.name);
  }

  firstScreen() {
    console.log('welcome: ' + this.name);
  }

}
