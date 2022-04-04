import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
} from '@angular/core';
import { ThGridHelper } from 'ngx-three';
import { Material, sRGBEncoding, TextureEncoding } from 'three';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimationComponent implements AfterViewInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public readonly Math = Math;

  public readonly outputEncoding: TextureEncoding = sRGBEncoding;

  @ViewChild('gridHelper', { static: true })
  public gridHelper?: ThGridHelper;

  constructor() {}

  ngAfterViewInit(): void {
    const material = this.gridHelper?.objRef?.material as Material | undefined;
    if (material) {
      material.opacity = 0.2;
      material.transparent = true;
    }
  }

  public onBeforeRender() {
    // TODO: implement me
  }
}
