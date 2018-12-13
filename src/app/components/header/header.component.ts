import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  icon = 'menu';
  opened = false;

  constructor(){}

  ngOnInit(){}

  openMenu(){
    this.trigger.openMenu();
    this.trigger.menuClosed.subscribe(() => this.icon = 'menu');
    this.icon = 'close';
    this.opened = false;
  }
}
