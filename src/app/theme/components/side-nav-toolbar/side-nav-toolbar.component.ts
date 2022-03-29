import { Component, OnInit } from '@angular/core';
import { MENU_NAV } from '../../theme.constant';

@Component({
  selector: 'app-side-nav-toolbar',
  templateUrl: './side-nav-toolbar.component.html',
  styleUrls: ['./side-nav-toolbar.component.scss']
})
export class SideNavToolbarComponent implements OnInit {
  routes = MENU_NAV;
  constructor() { }

  ngOnInit(): void {
  }

}
