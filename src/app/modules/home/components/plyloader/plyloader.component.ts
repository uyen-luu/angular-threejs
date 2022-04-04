import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ThPerspectiveCamera } from 'ngx-three';
import { Vector3 } from 'three';
import { ASSET_PATH } from '../../assets';

@Component({
  selector: 'app-plyloader',
  templateUrl: './plyloader.component.html',
  styleUrls: ['./plyloader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlyloaderComponent implements OnInit {
  public Math = Math;
  public cameraPosition = new Vector3(3, 0.15, 3);

  @ViewChild('camera')
  public camera?: ThPerspectiveCamera;

  public assetPath = `${ASSET_PATH}dolphins.ply`;
  constructor() {}

  ngOnInit(): void {}

  public onBeforeRender(): void {
    const timer = Date.now() * 0.0005;
    if (this.camera) {
      this.camera.position = new Vector3(
        Math.sin(timer) * 2.5,
        0.15,
        Math.cos(timer) * 2.5
      );
      this.camera.lookAt = [0, 0.1, 0];
    }
  }
}
