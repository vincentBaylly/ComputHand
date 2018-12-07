import { Component, OnInit } from '@angular/core';

import '../../../assets/js/raphael.js';
import '../../../assets/js/Treant.js';
import '../../../assets/js/devDiagram.js';

declare var Treant: any;
declare var dev_config:any;

@Component({
  selector: 'app-dev-diagram',
  templateUrl: './dev-diagram.component.html',
  styleUrls: ['./dev-diagram.component.less']
})
export class DevDiagramComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new Treant( dev_config );
  }

}
