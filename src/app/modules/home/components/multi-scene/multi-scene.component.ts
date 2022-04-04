import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ThCanvas } from 'ngx-three';
import { Color } from 'three';

@Component({
  selector: 'app-multi-scene',
  templateUrl: './multi-scene.component.html',
  styleUrls: ['./multi-scene.component.scss']
})
export class MultiSceneComponent implements OnInit {

  public sliderPos = 0;
  public controlsEnabled = true;

  public readonly colorLeft = new Color(0xbcd48f);
  public readonly colorRight = new Color(0x8fbcd4);

  @ViewChild('slider', { static: true })
  public slider?: ElementRef;

  @ViewChild(ThCanvas, { static: true })
  public canvas?: ThCanvas;

  constructor() {}

  ngOnInit(): void {
    if (!this.slider || !this.canvas) {
      return;
    }
    this.slider.nativeElement.style.touchAction = 'none'; // disable touch scroll
    this.sliderPos = (this.canvas.rendererCanvas?.nativeElement.clientWidth || 0) / 2;
  }

  @HostListener('window:pointermove', ['$event'])
  public onPointerMove(e: PointerEvent) {
    if (this.controlsEnabled || !this.canvas || !this.canvas.rendererCanvas) {
      return;
    }

    if (!this.slider || e.isPrimary === false) {
      return;
    }

    const el = this.canvas.rendererCanvas.nativeElement;
    const rect = el.getBoundingClientRect();

    this.sliderPos = Math.max(rect.left, Math.min(rect.right, e.pageX)) - rect.left;
    this.slider.nativeElement.style.left = this.sliderPos - this.slider.nativeElement.offsetWidth / 2 + 'px';
  }

  @HostListener('window:pointerup')
  public onPointerUp() {
    this.controlsEnabled = true;
  }

  onSliderPointerDown(e: PointerEvent) {
    if (e.isPrimary === false) {
      return;
    }

    this.controlsEnabled = false;
  }
}
