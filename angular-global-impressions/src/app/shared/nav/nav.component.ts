import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navbarOpen = false;
  bandera = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavBar() {
    this.navbarOpen = !this.navbarOpen;
    this.bandera = !this.bandera;
  }

}
