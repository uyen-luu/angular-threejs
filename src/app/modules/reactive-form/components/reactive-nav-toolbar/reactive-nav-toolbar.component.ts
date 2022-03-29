import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-nav-toolbar',
  templateUrl: './reactive-nav-toolbar.component.html',
  styleUrls: ['./reactive-nav-toolbar.component.scss']
})
export class ReactiveNavToolbarComponent implements OnInit {
  routes = [
    {name: '1st Form', path: '/first-form'},
    {name: '2nd Form', path: '/second-form'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
