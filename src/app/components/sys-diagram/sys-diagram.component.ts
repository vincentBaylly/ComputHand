import { Component, OnInit } from '@angular/core';

import '../../../assets/js/raphael.js';
import '../../../assets/js/Treant.js';
import '../../../assets/js/sysDiagram.js';

declare var Treant: any;
declare var sys_apps_config:any;

@Component({
  selector: 'app-sys-diagram',
  templateUrl: './sys-diagram.component.html',
  styleUrls: ['./sys-diagram.component.less']
})
export class SysDiagramComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new Treant( sys_apps_config );
  }

}
