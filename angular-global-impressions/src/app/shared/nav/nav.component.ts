import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navbarOpen = false;
  bandera = false;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  toggleNavBar() {
    this.navbarOpen = !this.navbarOpen;
    this.bandera = !this.bandera;
  }
  // redirigir(){
  //   this.router.navigate(['/Dashboard'])
  // }
}
