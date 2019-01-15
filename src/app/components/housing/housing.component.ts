import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.less']
})
export class HousingComponent implements OnInit {

  lat: number = 46.5618296;
  lng: number = -72.74353;
  height = '100%';

  constructor() { }

  ngOnInit() {
  }

}
