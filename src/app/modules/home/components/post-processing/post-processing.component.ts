import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ThObject3D } from 'ngx-three';
import { Light, Vector3, Euler, Color } from 'three';
import { DotScreenShader } from 'three/examples/jsm/shaders/DotScreenShader';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader';

@Component({
  selector: 'app-post-processing',
  templateUrl: './post-processing.component.html',
  styleUrls: ['./post-processing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostProcessingComponent implements OnInit {
  public readonly DotScreenShader = DotScreenShader;
  public readonly RGBShiftShader = RGBShiftShader;

  public shiftAmount = 0.0015;

  @ViewChild('object', { static: true })
  public object?: ThObject3D;
  @ViewChild('light', { static: true })
  public light?: Light;
  public readonly zDist = 400;
  public meshData: {
    pos: Vector3;
    rotation: Euler;
    scale: Vector3;
    color: Color;
  }[] = [];

  constructor(private cdref: ChangeDetectorRef) {
    this.initMeshData();
  }
  ngOnInit(): void {
    this.light?.position?.set(1, 1, 1);
  }

  private initMeshData() {
    for (let i = 0; i < 100; i++) {
      const scale = Math.random() * 50;
      this.meshData.push({
        pos: new Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        )
          .normalize()
          .multiplyScalar(Math.random() * this.zDist),
        rotation: new Euler(
          Math.random() * 2,
          Math.random() * 2,
          Math.random() * 2
        ),
        scale: new Vector3(scale, scale, scale),
        color: new Color(0xffffff * Math.random()),
      });
    }
  }

  animate() {
    if (this.object?.objRef?.rotation) {
      this.object.objRef.rotation.x += 0.005;
      this.object.objRef.rotation.y += 0.01;
    }
  }
}
