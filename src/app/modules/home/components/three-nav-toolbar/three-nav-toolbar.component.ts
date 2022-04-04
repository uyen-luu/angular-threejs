import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-nav-toolbar',
  templateUrl: './three-nav-toolbar.component.html',
  styleUrls: ['./three-nav-toolbar.component.scss']
})
export class ThreeNavToolbarComponent implements OnInit {
  routes = [
    {name: 'Animation', path: '/three/animation'},
    {name: 'Events', path: '/three/events'},
    {name: 'PLY Loader', path: '/three/ply-loader'},
    {name: 'Multiple View Post Processing', path: '/three/multi-view-postprocessing'},
    {name: 'Multiple Scenes', path: 'multi-scene'},
    {name: 'Store Examples', path: '/three/store-examples'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
