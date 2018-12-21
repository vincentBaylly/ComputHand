import { Component, AfterContentInit, HostListener} from '@angular/core';

import '../../../assets/js/raphael.js';
import '../../../assets/js/Treant.js';
import '../../../assets/js/devDiagram.js';
import '../../../assets/js/devDiagramInline.js';

declare var Treant: any;
declare var dev_config: any;
declare var frontend_config: any;
declare var backend_config: any;

@Component({
  selector: 'app-dev-diagram',
  templateUrl: './dev-diagram.component.html',
  styleUrls: ['./dev-diagram.component.less']
})
export class DevDiagramComponent implements AfterContentInit {

  isMobile: boolean;

  items = [
    { id: 'frontendDiagram' },
    { id: 'backendDiagram' }
  ]

  constructor() { }

  ngAfterContentInit(){
    if (window.innerWidth > 980) {
      this.isMobile = false;
      setTimeout(() => {
        new Treant(dev_config);
      });
    } else {
      this.isMobile = true;
      setTimeout(() => {
        new Treant(frontend_config);
        new Treant(backend_config);
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 980) {
      this.isMobile = false;
      setTimeout(() => {
        new Treant(dev_config);
      });
    } else {
      this.isMobile = true;
      setTimeout(() => {
        new Treant(frontend_config);
        new Treant(backend_config);
      });
    }
  }

}
