import * as THREE from "three";

// シーンを作成
const scene = new THREE.Scene();

// カメラを作成
const camera = new THREE.PerspectiveCamera(
	45,
	window.innerWidth / window.innerHeight,
	0.1,
	1000,
);
// レンダラーを作成
const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector("#myCanvas") as HTMLCanvasElement,
});
renderer.setClearColor(new THREE.Color(0xeeeeee));
renderer.setSize(window.innerWidth, window.innerHeight);

const axes = new THREE.AxesHelper(20);
scene.add(axes);

// plane
const planetaryGeometry = new THREE.PlaneGeometry(60, 20);
const planetMaterial = new THREE.MeshBasicMaterial({
	color: 0xcccccc,
});
const plane = new THREE.Mesh(planetaryGeometry, planetMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.position.set(15, 0, 0);

scene.add(plane);

// cube
const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
const cubeMaterial = new THREE.MeshBasicMaterial({
	color: 0xff0000,
	wireframe: true,
});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(-4, 3, 0);
scene.add(cube);

// sphere
const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
const sphereMaterial = new THREE.MeshBasicMaterial({
	color: 0x7777ff,
	wireframe: true,
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(20, 4, 2);
scene.add(sphere);

// camera position
camera.position.set(-30, 40, 30);
camera.lookAt(scene.position);

// requestAnimationFrame(render);
renderer.render(scene, camera);
