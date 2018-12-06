import { Component, AfterViewInit } from '@angular/core';

import '../../../assets/js/raphael.js';
import '../../../assets/js/Treant.js';
import '../../../assets/js/diagram.js';
import '../../../assets/js/devDiagram.js';
import '../../../assets/js/sysDiagram.js';

declare var Treant: any;
declare var archi_config: any;
declare var devops_config: any;
declare var database_config: any;
declare var dev_config:any;
declare var sys_apps_config:any;

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.less']
})
export class DiagramComponent  implements AfterViewInit {

  items = [
   { id: 'archiDiagram' },
   { id: 'devOpsDiagram' },
   { id: 'databaseDiagram' }
 ]

  constructor() { }

  ngAfterViewInit() {
    new Treant( archi_config );
    new Treant( devops_config );
    new Treant( database_config );
    new Treant( dev_config );
    new Treant( sys_apps_config );
  }

}
