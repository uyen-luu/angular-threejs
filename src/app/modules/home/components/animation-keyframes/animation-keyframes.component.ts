import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Stats from 'three/examples/jsm/libs/stats.module';
import * as THREE from 'three';
@Component({
  selector: 'app-animation-keyframes',
  templateUrl: './animation-keyframes.component.html',
  styleUrls: ['./animation-keyframes.component.scss'],
})
export class AnimationKeyframesComponent implements OnInit {
  @Input() name!: string;
  @ViewChild('canvas') canvasRef!: ElementRef;

  renderer = new THREE.WebGLRenderer();
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  controls!: OrbitControls;
  mixer!: THREE.AnimationMixer;
  clock = new THREE.Clock();
  stats = Stats();
  i = 0;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(35, 800 / 640, 0.1, 1000);
  }
  ngOnInit(): void {}

  ngAfterViewInit() {
    this.canvas.appendChild(this.stats.dom);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    this.canvas.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xbfe3dd);
    this.scene.environment = pmremGenerator.fromScene(
      new RoomEnvironment(),
      0.04
    ).texture;

    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      1,
      100
    );
    camera.position.set(5, 2, 8);

    this.controls = new OrbitControls(camera, renderer.domElement);
    this.controls.target.set(0, 0.5, 0);
    this.controls.update();
    this.controls.enablePan = false;
    this.controls.enableDamping = true;

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/'
    );

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.load(
      'assets/three-examples/LittlestTokyo.glb',
      (gltf) => {
        const model = gltf.scene;
        model.position.set(1, 1, 0);
        model.scale.set(0.01, 0.01, 0.01);
        this.scene.add(model);

        this.mixer = new THREE.AnimationMixer(model);
        this.mixer.clipAction(gltf.animations[0]).play();

        this.animate();
      },
      undefined,
      function (e) {
        console.error(e);
      }
    );
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    // this.mesh.rotation.x += 0.01;
    // this.mesh.rotation.y += 0.01;

    console.log(this.i);
    const delta = this.clock.getDelta();

    this.mixer.update(delta);

    this.controls.update();

    this.stats.update();

    this.renderer.render(this.scene, this.camera);
    this.i++;
  }

  resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
