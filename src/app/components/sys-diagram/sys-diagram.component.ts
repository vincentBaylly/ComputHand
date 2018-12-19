import { Component, AfterContentInit, HostListener } from '@angular/core';

import '../../../assets/js/raphael.js';
import '../../../assets/js/Treant.js';
import '../../../assets/js/sysDiagram.js';
import '../../../assets/js/sysDiagramInline.js';

declare var Treant: any;
declare var sys_apps_config:any;
declare var sys_config:any;
declare var apps_config:any;
declare var tools_config:any;

@Component({
  selector: 'app-sys-diagram',
  templateUrl: './sys-diagram.component.html',
  styleUrls: ['./sys-diagram.component.less']
})
export class SysDiagramComponent implements AfterContentInit {

  isMobile: boolean;

  items = [
     { id: 'sysDiagram' },
     { id: 'appDiagram' },
     { id: 'toolsDiagram' },
   ]

  constructor() { }

  ngAfterContentInit(){
    if (window.innerWidth > 980) {
      this.isMobile = false;
      setTimeout(() => {
        new Treant(sys_apps_config);
      });
    } else {
      this.isMobile = true;
      setTimeout(() => {
        new Treant( sys_config );
        new Treant( apps_config );
        new Treant( tools_config );
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 980) {
      this.isMobile = false;
      setTimeout(() => {
        new Treant(sys_apps_config);
      });
    } else {
      this.isMobile = true;
      setTimeout(() => {
        new Treant( sys_config );
        new Treant( apps_config );
        new Treant( tools_config );
      });
    }
  }

}
