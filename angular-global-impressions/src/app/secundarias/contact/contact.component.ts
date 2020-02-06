import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  zoom: number = 8;
  lat: number = -2.1985391;
  lng: number = -79.8809507;
  markers: marker[] = [
	  {
		  lat: -2.1985391,
		  lng: -79.8809507,
		  label: 'Local Malecon',
	  },
	  {
		  lat: -2.1376476,
		  lng: -79.9063379,
		  label: 'Local Alborada',
    }
  ]
  constructor() { }

  ngOnInit() {
  }


}
interface marker {
	lat: number;
	lng: number;
	label?: string;
}