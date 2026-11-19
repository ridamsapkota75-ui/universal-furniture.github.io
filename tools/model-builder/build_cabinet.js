import * as THREE from 'https://esm.sh/three@0.160.0';
import { GLTFExporter } from 'https://esm.sh/three@0.160.0/examples/jsm/exporters/GLTFExporter.js';
import * as fs from 'fs';
import * as path from 'path';

// Create a scene
const scene = new THREE.Scene();

// Materials
const blueMaterial = new THREE.MeshStandardMaterial({
  color: 0x1F5FBF,
  metalness: 0.2,
  roughness: 0.5,
  name: 'blue_side'
});

const whiteMaterial = new THREE.MeshStandardMaterial({
  color: 0xF2F4F7,
  metalness: 0.1,
  roughness: 0.4,
  name: 'white_body'
});

const greyMaterial = new THREE.MeshStandardMaterial({
  color: 0x888888,
  metalness: 0.5,
  roughness: 0.3,
  name: 'grey_handle'
});

// Dimensions (mm converted to meters)
// width 900mm (0.9m), depth 450mm (0.45m), height 1300mm (1.3m), thickness 6mm (0.006m)
const W = 0.9;
const D = 0.45;
const H = 1.3;
const T = 0.006;
const baseH = 0.08;
const doorGap = 0.003;

// 1. Base Plinth (Blue)
const baseGeo = new THREE.BoxGeometry(W - 0.02, baseH, D - 0.02);
const baseMesh = new THREE.Mesh(baseGeo, blueMaterial);
baseMesh.position.set(0, baseH / 2, 0);
baseMesh.name = 'base_plinth';
scene.add(baseMesh);

// 2. Left Side Panel (Blue)
const sideGeo = new THREE.BoxGeometry(T, H - baseH, D);
const leftSide = new THREE.Mesh(sideGeo, blueMaterial);
leftSide.position.set(-W / 2 + T / 2, baseH + (H - baseH) / 2, 0);
leftSide.name = 'side_left';
scene.add(leftSide);

// 3. Right Side Panel (Blue)
const rightSide = new THREE.Mesh(sideGeo, blueMaterial);
rightSide.position.set(W / 2 - T / 2, baseH + (H - baseH) / 2, 0);
rightSide.name = 'side_right';
scene.add(rightSide);

// 4. Top Panel (White)
const topGeo = new THREE.BoxGeometry(W, T, D);
const topPanel = new THREE.Mesh(topGeo, whiteMaterial);
topPanel.position.set(0, H - T / 2, 0);
topPanel.name = 'top_panel';
scene.add(topPanel);

// 5. Bottom Panel / Floor above base (White)
const bottomPanel = new THREE.Mesh(topGeo, whiteMaterial);
bottomPanel.position.set(0, baseH + T / 2, 0);
bottomPanel.name = 'bottom_panel';
scene.add(bottomPanel);

// 6. Back Panel (White)
const backGeo = new THREE.BoxGeometry(W - 2 * T, H - baseH - 2 * T, T);
const backPanel = new THREE.Mesh(backGeo, whiteMaterial);
backPanel.position.set(0, baseH + (H - baseH) / 2, -D / 2 + T / 2);
backPanel.name = 'back_panel';
scene.add(backPanel);

// 7. Shelves (2 shelves INSIDE evenly spaced)
// Height available: from baseH + T to H - T. Let's place 2 shelves.
const innerHeight = H - baseH - 2 * T;
const shelfY1 = baseH + innerHeight * 0.33;
const shelfY2 = baseH + innerHeight * 0.66;

const shelfGeo = new THREE.BoxGeometry(W - 2 * T, T, D - T - 0.02);
const shelf1 = new THREE.Mesh(shelfGeo, whiteMaterial);
shelf1.position.set(0, shelfY1, 0);
shelf1.name = 'shelf_1';
scene.add(shelf1);

const shelf2 = new THREE.Mesh(shelfGeo, whiteMaterial);
shelf2.position.set(0, shelfY2, 0);
shelf2.name = 'shelf_2';
scene.add(shelf2);

// 8. Doors (Two white doors with grey handles)
const doorWidth = (W - doorGap) / 2;
const doorHeight = H - baseH - 0.01;
const doorGeo = new THREE.BoxGeometry(doorWidth, doorHeight, T);

const leftDoor = new THREE.Mesh(doorGeo, whiteMaterial);
leftDoor.position.set(-W / 4 - doorGap / 4, baseH + doorHeight / 2, D / 2 + T / 2);
leftDoor.name = 'door_left';
scene.add(leftDoor);

const rightDoor = new THREE.Mesh(doorGeo, whiteMaterial);
rightDoor.position.set(W / 4 + doorGap / 4, baseH + doorHeight / 2, D / 2 + T / 2);
rightDoor.name = 'door_right';
scene.add(rightDoor);

// Handles
const handleGeo = new THREE.CylinderGeometry(0.008, 0.008, 0.12, 16);
handleGeo.rotateX(Math.PI / 2);

const leftHandle = new THREE.Mesh(handleGeo, greyMaterial);
leftHandle.position.set(-0.08, baseH + doorHeight / 2, D / 2 + T + 0.015);
leftHandle.name = 'handle_left';
scene.add(leftHandle);

const rightHandle = new THREE.Mesh(handleGeo, greyMaterial);
rightHandle.position.set(0.08, baseH + doorHeight / 2, D / 2 + T + 0.015);
rightHandle.name = 'handle_right';
scene.add(rightHandle);

// Export to GLB
const exporter = new GLTFExporter();
exporter.parse(
  scene,
  (gltf) => {
    const buffer = Buffer.from(gltf as ArrayBuffer);
    const outputPath = path.join(process.cwd(), 'public', 'models', 'storage-cabinet.glb');
    fs.writeFileSync(outputPath, buffer);
    console.log('GLB exported successfully to:', outputPath);
    console.log('File size:', (buffer.length / 1024 / 1024).toFixed(2), 'MB');
  },
  (error) => {
    console.error('An error occurred while exporting GLTF:', error);
  },
  { binary: true }
);
