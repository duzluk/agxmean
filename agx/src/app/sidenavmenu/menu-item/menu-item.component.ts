import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Sidenav } from '../../_models/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() items: Sidenav[];
  @Output() navToggle = new EventEmitter<boolean>(); 

  @ViewChild('childMenu') public childMenu;


  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  navOpen() {
    this.navToggle.emit(true);
  }
}
