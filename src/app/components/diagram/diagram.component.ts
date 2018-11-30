import { Component, OnInit } from '@angular/core';

import '../../../assets/js/raphael.js';
import '../../../assets/js/Treant.js';
import '../../../assets/js/diagram.js';

declare var Treant: any;

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.less']
})
export class DiagramComponent implements OnInit {

  archi_config = {
      chart: {
          container: "#archiDiagram",

          nodeAlign: "BOTTOM",

          connectors: {
              type: 'step'
          },
          node: {
              HTMLclass: 'node1'
          }
      },
      nodeStructure: {
        text: {
                name: "Architecture"
            },
            HTMLclass: 'blue',
            stackChildren:true,
            children: [
                        {
                            text:{
                                name: "Analyze"
                            },
                            HTMLclass: 'blue',
                            link: {
                                href: "http://www.google.com"
                            }
                        },
                        {
                            text:{
                                name: "Conception"
                            },
                            HTMLclass: 'blue'
                        },
                        {
                            text:{
                                name: "Technical Recommandation"
                            },
                            HTMLclass: 'blue'
                        }
                    ]
      }
  };

  devops_config = {
      chart: {
          container: "#devOpsDiagram",

          nodeAlign: "BOTTOM",

          connectors: {
              type: 'step'
          },
          node: {
              HTMLclass: 'node1'
          }
      },
      nodeStructure: {
        text: {
                name: "DevOps"
            },
            HTMLclass: 'blue',
            stackChildren:true,
            children: [
                        {
                            text:{
                                name: "Development Environment",
                                title: "Setup"

                            },
                            HTMLclass: 'blue',
                            link: {
                                href: "http://www.google.com"
                            }
                        },
                        {
                            text:{
                                name: "Standard Development"
                                title: "Rule Configuration"
                            },
                            HTMLclass: 'blue'
                        },
                        {
                            text:{
                                name: "IoC Management"
                            },
                            HTMLclass: 'blue'
                        }
                    ]
      }
  };

  constructor() { }

  ngOnInit() {
    new Treant( this.archi_config );
    new Treant( this.devops_config );
  }

}
