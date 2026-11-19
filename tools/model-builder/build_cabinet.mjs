import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import * as fs from 'fs';
import * as path from 'path';

// Full polyfill for JSDOM-like environment
import { JSDOM } from 'jsdom';
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.FileReader = dom.window.FileReader;
global.Blob = dom.window.Blob;

const scene = new THREE.Scene();

// Materials
const blueMaterial = new THREE.MeshStandardMaterial({ color: 0x1F5FBF, name: 'blue_side' });
const whiteMaterial = new THREE.MeshStandardMaterial({ color: 0xF2F4F7, name: 'white_body' });
const greyMaterial = new THREE.MeshStandardMaterial({ color: 0x888888, name: 'grey_handle' });

// Geometry
const W = 0.9;
const D = 0.45;
const H = 1.3;
const T = 0.006;
const baseH = 0.08;

const baseMesh = new THREE.Mesh(new THREE.BoxGeometry(W - 0.02, baseH, D - 0.02), blueMaterial);
baseMesh.position.set(0, baseH / 2, 0);
scene.add(baseMesh);

const leftSide = new THREE.Mesh(new THREE.BoxGeometry(T, H - baseH, D), blueMaterial);
leftSide.position.set(-W / 2 + T / 2, baseH + (H - baseH) / 2, 0);
scene.add(leftSide);

const rightSide = new THREE.Mesh(new THREE.BoxGeometry(T, H - baseH, D), blueMaterial);
rightSide.position.set(W / 2 - T / 2, baseH + (H - baseH) / 2, 0);
scene.add(rightSide);

const topPanel = new THREE.Mesh(new THREE.BoxGeometry(W, T, D), whiteMaterial);
topPanel.position.set(0, H - T / 2, 0);
scene.add(topPanel);

const exporter = new GLTFExporter();
exporter.parse(
  scene,
  (result) => {
    const output = JSON.stringify(result, null, 2);
    const outputPath = path.join('C:', 'Users', 'crazy', '.gemini', 'antigravity', 'scratch', 'ufi-website', 'public', 'models', 'storage-cabinet.gltf');
    fs.writeFileSync(outputPath, output);
    console.log('GLTF exported to:', outputPath);
  },
  { binary: false }
);
