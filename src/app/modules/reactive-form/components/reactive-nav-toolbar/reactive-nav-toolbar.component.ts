import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-nav-toolbar',
  templateUrl: './reactive-nav-toolbar.component.html',
  styleUrls: ['./reactive-nav-toolbar.component.scss']
})
export class ReactiveNavToolbarComponent implements OnInit {
  routes = [
    {name: '1st Form', path: '/reactive-form/first-form'},
    {name: '2nd Form', path: '/reactive-form/second-form'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
