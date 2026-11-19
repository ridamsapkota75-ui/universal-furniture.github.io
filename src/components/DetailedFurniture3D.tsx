import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ──────────────────────────────────────────────────────────────
// Premium industrial PBR material palette
// ──────────────────────────────────────────────────────────────
const ufiBlue = new THREE.MeshStandardMaterial({
  color: '#1265D8',
  metalness: 0.8,
  roughness: 0.25,
});

const darkSteel = new THREE.MeshStandardMaterial({
  color: '#151D28',
  metalness: 0.85,
  roughness: 0.3,
});

const shelfWhite = new THREE.MeshStandardMaterial({
  color: '#E8EFF8',
  metalness: 0.5,
  roughness: 0.2,
});

const woodOak = new THREE.MeshStandardMaterial({
  color: '#BC8244',
  roughness: 0.55,
  metalness: 0.05,
});

const woodDark = new THREE.MeshStandardMaterial({
  color: '#4A2E1B',
  roughness: 0.45,
  metalness: 0.05,
});

const chromeMetal = new THREE.MeshStandardMaterial({
  color: '#DCE6F2',
  metalness: 0.95,
  roughness: 0.1,
});

const hospitalBlue = new THREE.MeshStandardMaterial({
  color: '#1D63B8',
  roughness: 0.6,
  metalness: 0.1,
});

const clinicalWhite = new THREE.MeshStandardMaterial({
  color: '#F4F7FC',
  roughness: 0.3,
  metalness: 0.3,
});

const sofaFabric = new THREE.MeshStandardMaterial({
  color: '#1B2C46',
  roughness: 0.85,
  metalness: 0.05,
});

const zincPlated = new THREE.MeshStandardMaterial({
  color: '#C8CED8',
  metalness: 0.7,
  roughness: 0.35,
});

const walnut = new THREE.MeshStandardMaterial({
  color: '#5D3A1A',
  roughness: 0.5,
  metalness: 0.05,
});

const blackPowder = new THREE.MeshStandardMaterial({
  color: '#1A1F28',
  metalness: 0.8,
  roughness: 0.4,
});

const greyPowder = new THREE.MeshStandardMaterial({
  color: '#7A8490',
  metalness: 0.6,
  roughness: 0.45,
});

const navyFabric = new THREE.MeshStandardMaterial({
  color: '#1A2840',
  roughness: 0.8,
  metalness: 0.05,
});

const oliveFabric = new THREE.MeshStandardMaterial({
  color: '#3A3F2E',
  roughness: 0.85,
  metalness: 0.05,
});

const stainlessSteel = new THREE.MeshStandardMaterial({
  color: '#E8EAED',
  metalness: 0.9,
  roughness: 0.15,
});

const whitePowder = new THREE.MeshStandardMaterial({
  color: '#F0F3F8',
  metalness: 0.4,
  roughness: 0.35,
});

const blueGreyFabric = new THREE.MeshStandardMaterial({
  color: '#2D3A4A',
  roughness: 0.8,
  metalness: 0.05,
});

// ──────────────────────────────────────────────────────────────
// Shared auto-rotation hook
// ──────────────────────────────────────────────────────────────
function useAutoRotation(ref: React.RefObject<THREE.Group>, enabled: boolean, speed = 0.4) {
  useFrame((_, delta) => {
    if (enabled && ref.current) {
      ref.current.rotation.y += delta * speed;
    }
  });
}

// ──────────────────────────────────────────────────────────────
// 1. STORE — Double-Sided Gondola Rack
// ──────────────────────────────────────────────────────────────
export function GondolaRack3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useAutoRotation(ref, autoRotate);
  const shelfTiers = [0.1, 0.45, 0.8, 1.15, 1.5];
  return (
    <group ref={ref} position={[0, -0.85, 0]}>
      <mesh position={[-0.8, 0.9, 0]} material={ufiBlue} castShadow><boxGeometry args={[0.07, 1.85, 0.07]} /></mesh>
      <mesh position={[0.8, 0.9, 0]} material={ufiBlue} castShadow><boxGeometry args={[0.07, 1.85, 0.07]} /></mesh>
      <mesh position={[0, 1.8, 0]} material={ufiBlue} castShadow><boxGeometry args={[1.68, 0.05, 0.07]} /></mesh>
      <mesh position={[0, 0.9, 0]} material={shelfWhite} receiveShadow><boxGeometry args={[1.55, 1.7, 0.02]} /></mesh>
      <mesh position={[-0.8, 0.04, 0]} material={ufiBlue} castShadow><boxGeometry args={[0.07, 0.08, 0.8]} /></mesh>
      <mesh position={[0.8, 0.04, 0]} material={ufiBlue} castShadow><boxGeometry args={[0.07, 0.08, 0.8]} /></mesh>
      <mesh position={[0, 0.08, 0.22]} material={shelfWhite} castShadow receiveShadow><boxGeometry args={[1.66, 0.03, 0.4]} /></mesh>
      <mesh position={[0, 0.08, 0.42]} material={ufiBlue} castShadow><boxGeometry args={[1.66, 0.04, 0.015]} /></mesh>
      <mesh position={[0, 0.08, -0.22]} material={shelfWhite} castShadow receiveShadow><boxGeometry args={[1.66, 0.03, 0.4]} /></mesh>
      <mesh position={[0, 0.08, -0.42]} material={ufiBlue} castShadow><boxGeometry args={[1.66, 0.04, 0.015]} /></mesh>
      {shelfTiers.map((y, idx) => (
        <group key={idx}>
          <mesh position={[0, y, 0.18]} material={shelfWhite} castShadow receiveShadow><boxGeometry args={[1.6, 0.025, 0.32]} /></mesh>
          <mesh position={[0, y, 0.34]} material={ufiBlue} castShadow><boxGeometry args={[1.6, 0.035, 0.012]} /></mesh>
          <mesh position={[-0.78, y - 0.04, 0.1]} material={ufiBlue}><boxGeometry args={[0.02, 0.06, 0.18]} /></mesh>
          <mesh position={[0.78, y - 0.04, 0.1]} material={ufiBlue}><boxGeometry args={[0.02, 0.06, 0.18]} /></mesh>
          <mesh position={[0, y, -0.18]} material={shelfWhite} castShadow receiveShadow><boxGeometry args={[1.6, 0.025, 0.32]} /></mesh>
          <mesh position={[0, y, -0.34]} material={ufiBlue} castShadow><boxGeometry args={[1.6, 0.035, 0.012]} /></mesh>
          <mesh position={[-0.78, y - 0.04, -0.1]} material={ufiBlue}><boxGeometry args={[0.02, 0.06, 0.18]} /></mesh>
          <mesh position={[0.78, y - 0.04, -0.1]} material={ufiBlue}><boxGeometry args={[0.02, 0.06, 0.18]} /></mesh>
        </group>
      ))}
      {[-0.8, 0.8].map((x) => [-0.38, 0.38].map((z, i) => (
        <mesh key={`${x}-${i}`} position={[x, -0.01, z]} material={darkSteel}><cylinderGeometry args={[0.025, 0.025, 0.02, 16]} /></mesh>
      )))}
    </group>
  );
}

// ──────────────────────────────────────────────────────────────
// 2. STORE — Supermarket Shopping Trolley
// ──────────────────────────────────────────────────────────────
export function SupermarketTrolley3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useAutoRotation(ref, autoRotate);
  return (
    <group ref={ref} position={[0, -0.3, 0]}>
      {/* Basket */}
      <mesh position={[0, 0.4, 0]} material={zincPlated} castShadow>
        <boxGeometry args={[0.8, 0.6, 0.55]} />
      </mesh>
      {/* Wire mesh sides */}
      <mesh position={[0, 0.4, 0.28]} material={zincPlated}>
        <boxGeometry args={[0.78, 0.58, 0.02]} />
      </mesh>
      <mesh position={[0, 0.4, -0.28]} material={zincPlated}>
        <boxGeometry args={[0.78, 0.58, 0.02]} /></mesh>
      <mesh position={[0.4, 0.4, 0]} material={zincPlated}>
        <boxGeometry args={[0.02, 0.58, 0.53]} /></mesh>
      <mesh position={[-0.4, 0.4, 0]} material={zincPlated}>
        <boxGeometry args={[0.02, 0.58, 0.53]} /></mesh>
      {/* Frame rails */}
      <mesh position={[0, 0.1, 0]} material={darkSteel} castShadow>
        <boxGeometry args={[0.85, 0.05, 0.6]} /></mesh>
      {/* Wheels */}
      {[-0.38, 0.38].map((x) => [-0.25, 0.25].map((z, i) => (
        <group key={`wheel-${x}-${i}`} position={[x, -0.05, z]}>
          <mesh material={darkSteel} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.055, 0.055, 0.04, 16]} /></mesh>
          <mesh position={[0, 0.06, 0]} material={chromeMetal}><cylinderGeometry args={[0.018, 0.018, 0.09, 12]} /></mesh>
        </group>
      )))}
      {/* Handle */}
      <mesh position={[0, 0.95, 0.32]} material={ufiBlue}><boxGeometry args={[0.6, 0.04, 0.04]} /></mesh>
      <mesh position={[0.3, 0.7, 0.32]} material={ufiBlue}><boxGeometry args={[0.04, 0.55, 0.04]} /></mesh>
      <mesh position={[-0.3, 0.7, 0.32]} material={ufiBlue}><boxGeometry args={[0.04, 0.55, 0.04]} /></mesh>
    </group>
  );
}

const whiteBody = new THREE.MeshStandardMaterial({
  color: '#F2F4F7',
  metalness: 0.2,
  roughness: 0.5,
});

const blueSide = new THREE.MeshStandardMaterial({
  color: '#1F5FBF',
  metalness: 0.2,
  roughness: 0.5,
});

// ──────────────────────────────────────────────────────────────
// 3. STORE — Heavy-Duty Two-Door Storage Cabinet
// ──────────────────────────────────────────────────────────────
export function StorageCabinet3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useAutoRotation(ref, autoRotate);
  return (
    <group ref={ref} position={[0, -0.9, 0]}>
      {/* Body */}
      <mesh position={[0, 0.9, 0]} material={whiteBody} castShadow><boxGeometry args={[1.0, 1.8, 0.5]} /></mesh>
      {/* Doors */}
      <mesh position={[-0.25, 0.9, 0.26]} material={blueSide} castShadow><boxGeometry args={[0.48, 1.76, 0.03]} /></mesh>
      <mesh position={[0.25, 0.9, 0.26]} material={blueSide} castShadow><boxGeometry args={[0.48, 1.76, 0.03]} /></mesh>
      {/* Lock */}
      <mesh position={[0, 0.9, 0.295]} material={chromeMetal}><cylinderGeometry args={[0.025, 0.025, 0.04, 16]} /></mesh>
      {/* Handles */}
      <mesh position={[-0.45, 0.9, 0.29]} material={chromeMetal} rotation={[0, Math.PI / 2, 0]}><cylinderGeometry args={[0.012, 0.012, 0.12, 12]} /></mesh>
      <mesh position={[0.45, 0.9, 0.29]} material={chromeMetal} rotation={[0, Math.PI / 2, 0]}><cylinderGeometry args={[0.012, 0.012, 0.12, 12]} /></mesh>
      {/* Shelves */}
      {[0.3, -0.1, -0.5, -0.9].map((y) => (
        <mesh key={y} position={[0, y, 0]} material={whiteBody} castShadow receiveShadow><boxGeometry args={[0.94, 0.02, 0.46]} /></mesh>
      ))}
      {/* Base */}
      <mesh position={[0, -0.05, 0]} material={whiteBody}><boxGeometry args={[1.02, 0.08, 0.52]} /></mesh>
    </group>
  );
}

// ──────────────────────────────────────────────────────────────
// 4. SCHOOL — Two-Seater Classroom Bench & Desk
// ──────────────────────────────────────────────────────────────
export function SchoolBench3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useAutoRotation(ref, autoRotate);
  return (
    <group ref={ref} position={[0, -0.5, 0]}>
      <mesh position={[0, 0.6, 0.15]} material={woodOak} castShadow><boxGeometry args={[1.5, 0.035, 0.55]} /></mesh>
      <mesh position={[0, 0.48, 0.15]} material={ufiBlue} castShadow><boxGeometry args={[1.4, 0.02, 0.45]} /></mesh>
      {[-0.68, 0.68].map((x) => (
        <group key={x}>
          <mesh position={[x, 0.3, 0.35]} material={ufiBlue} castShadow><boxGeometry args={[0.04, 0.6, 0.04]} /></mesh>
          <mesh position={[x, 0.3, -0.05]} material={ufiBlue} castShadow><boxGeometry args={[0.04, 0.6, 0.04]} /></mesh>
          <mesh position={[x, 0.02, 0.15]} material={ufiBlue}><boxGeometry args={[0.04, 0.04, 0.45]} /></mesh>
        </group>
      ))}
      <mesh position={[0, 0.12, 0.15]} material={ufiBlue}><boxGeometry args={[1.4, 0.03, 0.03]} /></mesh>
      <mesh position={[0, 0.35, -0.35]} material={woodOak} castShadow><boxGeometry args={[1.5, 0.03, 0.3]} /></mesh>
      <mesh position={[0, 0.62, -0.48]} material={woodOak} castShadow><boxGeometry args={[1.5, 0.18, 0.025]} /></mesh>
      {[-0.65, 0.65].map((x) => (
        <group key={`bench-${x}`}>
          <mesh position={[x, 0.17, -0.35]} material={ufiBlue} castShadow><boxGeometry args={[0.04, 0.34, 0.04]} /></mesh>
          <mesh position={[x, 0.48, -0.48]} material={ufiBlue} castShadow><boxGeometry args={[0.03, 0.3, 0.03]} /></mesh>
          <mesh position={[x, 0.02, -0.1]} material={ufiBlue}><boxGeometry args={[0.04, 0.04, 0.5]} /></mesh>
        </group>
      ))}
    </group>
  );
}

// ──────────────────────────────────────────────────────────────
// 5. SCHOOL — Single Student Desk & Chair Set
// ──────────────────────────────────────────────────────────────
export function StudentDeskChair3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useAutoRotation(ref, autoRotate);
  return (
    <group ref={ref} position={[0, -0.5, 0]}>
      {/* Desk */}
      <mesh position={[0, 0.72, 0.15]} material={woodOak} castShadow><boxGeometry args={[0.8, 0.035, 0.5]} /></mesh>
      <mesh position={[0, 0.6, 0.15]} material={ufiBlue} castShadow><boxGeometry args={[0.7, 0.02, 0.4]} /></mesh>
      {[-0.35, 0.35].map((x) => (
        <group key={x}>
          <mesh position={[x, 0.36, 0.25]} material={ufiBlue} castShadow><boxGeometry args={[0.035, 0.72, 0.035]} /></mesh>
          <mesh position={[x, 0.36, -0.15]} material={ufiBlue} castShadow><boxGeometry args={[0.035, 0.72, 0.035]} /></mesh>
          <mesh position={[x, 0.02, 0.05]} material={ufiBlue}><boxGeometry args={[0.035, 0.035, 0.4]} /></mesh>
        </group>
      ))}
      <mesh position={[0, 0.1, 0.05]} material={ufiBlue}><boxGeometry args={[0.7, 0.03, 0.03]} /></mesh>
      {/* Chair */}
      <mesh position={[0, 0.4, -0.45]} material={woodOak} castShadow><boxGeometry args={[0.45, 0.03, 0.4]} /></mesh>
      <mesh position={[0, 0.65, -0.6]} material={woodOak} castShadow><boxGeometry args={[0.45, 0.2, 0.02]} /></mesh>
      {[-0.2, 0.2].map((x) => (
        <group key={x}>
          <mesh position={[x, 0.2, -0.45]} material={ufiBlue} castShadow><boxGeometry args={[0.03, 0.4, 0.03]} /></mesh>
          <mesh position={[x, 0.55, -0.6]} material={ufiBlue} castShadow><boxGeometry args={[0.025, 0.3, 0.025]} /></mesh>
          <mesh position={[x, 0.02, -0.25]} material={ufiBlue}><boxGeometry args={[0.03, 0.03, 0.4]} /></mesh>
        </group>
      ))}
    </group>
  );
}

// ──────────────────────────────────────────────────────────────
// 6. SCHOOL — 9-Door Steel Storage Locker
// ──────────────────────────────────────────────────────────────
export function SteelLocker3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useAutoRotation(ref, autoRotate);
  return (
    <group ref={ref} position={[0, -0.9, 0]}>
      {/* Body */}
      <mesh position={[0, 0.9, 0]} material={greyPowder} castShadow><boxGeometry args={[0.7, 1.8, 0.45]} /></mesh>
      {/* 3x3 Doors */}
      {[-0.33, 0, 0.33].map((x) => [-0.6, 0, 0.6].map((y) => (
        <mesh key={`${x}-${y}`} position={[x, y, 0.235]} material={greyPowder} castShadow><boxGeometry args={[0.21, 0.58, 0.025]} /></mesh>
      )))}
      {/* Handles + label holders */}
      {[-0.33, 0, 0.33].map((x) => [-0.6, 0, 0.6].map((y) => (
        <group key={`handle-${x}-${y}`} position={[x, y, 0.26]}>
          <mesh material={chromeMetal} rotation={[0, Math.PI / 2, 0]}><cylinderGeometry args={[0.008, 0.008, 0.06, 12]} /></mesh>
          <mesh position={[0, 0.25, 0.01]} material={whitePowder}><boxGeometry args={[0.1, 0.04, 0.01]} /></mesh>
        </group>
      )))}
      {/* Ventilation louvers */}
      {[-0.33, 0, 0.33].map((x) => [-0.6, 0, 0.6].map((y) => (
        <mesh key={`vent-${x}-${y}`} position={[x, y + 0.28, 0.01]} material={greyPowder}><boxGeometry args={[0.15, 0.02, 0.3]} /></mesh>
      )))}
      {/* Base */}
      <mesh position={[0, -0.05, 0]} material={darkSteel}><boxGeometry args={[0.72, 0.08, 0.47]} /></mesh>
      {/* Leveling feet */}
      {[-0.3, 0.3].map((x) => [-0.18, 0.18].map((z, i) => (
        <mesh key={`foot-${x}-${i}`} position={[x, -0.09, z]} material={darkSteel}><cylinderGeometry args={[0.02, 0.02, 0.03, 12]} /></mesh>
      )))}
    </group>
  );
}

// ──────────────────────────────────────────────────────────────
// 7. HOSPITAL — Obstetric Delivery Bed
// ──────────────────────────────────────────────────────────────
export function HospitalBed3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useAutoRotation(ref, autoRotate);
  return (
    <group ref={ref} position={[0, -0.45, 0]}>
      <mesh position={[0, 0.18, 0]} material={clinicalWhite} castShadow><boxGeometry args={[1.8, 0.06, 0.85]} /></mesh>
      {[-0.75, 0.75].map((x) => [-0.38, 0.38].map((z, idx) => (
        <group key={`${x}-${idx}`} position={[x, 0.07, z]}>
          <mesh material={darkSteel} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.045, 0.045, 0.03, 16]} /></mesh>
          <mesh position={[0, 0.06, 0]} material={chromeMetal}><cylinderGeometry args={[0.015, 0.015, 0.08, 12]} /></mesh>
        </group>
      )))}
      <group position={[-0.45, 0.38, 0]} rotation={[0, 0, 0.25]}>
        <mesh material={hospitalBlue} castShadow><boxGeometry args={[0.6, 0.1, 0.78]} /></mesh>
      </group>
      <mesh position={[0.05, 0.32, 0]} material={hospitalBlue} castShadow><boxGeometry args={[0.45, 0.1, 0.78]} /></mesh>
      <group position={[0.55, 0.31, 0]} rotation={[0, 0, -0.05]}>
        <mesh material={hospitalBlue} castShadow><boxGeometry args={[0.55, 0.1, 0.78]} /></mesh>
      </group>
      <mesh position={[-0.92, 0.52, 0]} material={clinicalWhite} castShadow><boxGeometry args={[0.05, 0.5, 0.88]} /></mesh>
      <mesh position={[-0.92, 0.65, 0]} material={ufiBlue}><boxGeometry args={[0.055, 0.08, 0.6]} /></mesh>
      <mesh position={[0.92, 0.45, 0]} material={clinicalWhite} castShadow><boxGeometry args={[0.05, 0.4, 0.88]} /></mesh>
      {[-0.42, 0.42].map((z) => (
        <group key={`rail-${z}`} position={[0, 0.48, z]}>
          <mesh material={chromeMetal}><boxGeometry args={[1.1, 0.03, 0.02]} /></mesh>
          <mesh position={[0, -0.08, 0]} material={chromeMetal}><boxGeometry args={[1.1, 0.03, 0.02]} /></mesh>
          {[-0.45, -0.15, 0.15, 0.45].map((rx) => (
            <mesh key={rx} position={[rx, -0.04, 0]} material={ufiBlue}><cylinderGeometry args={[0.012, 0.012, 0.15, 12]} /></mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

// ──────────────────────────────────────────────────────────────
// 8. HOSPITAL — Medicine & Dressing Trolley
// ──────────────────────────────────────────────────────────────
export function MedicineTrolley3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useAutoRotation(ref, autoRotate);
  return (
    <group ref={ref} position={[0, -0.4, 0]}>
      {/* Trays */}
      <mesh position={[0, 0.75, 0]} material={stainlessSteel} castShadow><boxGeometry args={[0.7, 0.03, 0.45]} /></mesh>
      <mesh position={[0, 0.4, 0]} material={stainlessSteel} castShadow><boxGeometry args={[0.7, 0.03, 0.45]} /></mesh>
      {/* Rim lips */}
      <mesh position={[0, 0.765, 0.24]} material={stainlessSteel}><boxGeometry args={[0.68, 0.05, 0.02]} /></mesh>
      <mesh position={[0, 0.765, -0.24]} material={stainlessSteel}><boxGeometry args={[0.68, 0.05, 0.02]} /></mesh>
      <mesh position={[0.35, 0.765, 0]} material={stainlessSteel}><boxGeometry args={[0.02, 0.05, 0.43]} /></mesh>
      <mesh position={[-0.35, 0.765, 0]} material={stainlessSteel}><boxGeometry args={[0.02, 0.05, 0.43]} /></mesh>
      <mesh position={[0, 0.415, 0.24]} material={stainlessSteel}><boxGeometry args={[0.68, 0.05, 0.02]} /></mesh>
      <mesh position={[0, 0.415, -0.24]} material={stainlessSteel}><boxGeometry args={[0.68, 0.05, 0.02]} /></mesh>
      <mesh position={[0.35, 0.415, 0]} material={stainlessSteel}><boxGeometry args={[0.02, 0.05, 0.43]} /></mesh>
      <mesh position={[-0.35, 0.415, 0]} material={stainlessSteel}><boxGeometry args={[0.02, 0.05, 0.43]} /></mesh>
      {/* Frame */}
      <mesh position={[0, 0.57, 0.25]} material={chromeMetal}><boxGeometry args={[0.6, 0.025, 0.025]} /></mesh>
      <mesh position={[0, 0.57, -0.25]} material={chromeMetal}><boxGeometry args={[0.6, 0.025, 0.025]} /></mesh>
      <mesh position={[0.325, 0.57, 0]} material={chromeMetal}><boxGeometry args={[0.025, 0.7, 0.025]} /></mesh>
      <mesh position={[-0.325, 0.57, 0]} material={chromeMetal}><boxGeometry args={[0.025, 0.7, 0.025]} /></mesh>
      {/* Handle */}
      <mesh position={[0, 0.95, 0.25]} material={chromeMetal}><boxGeometry args={[0.5, 0.03, 0.03]} /></mesh>
      <mesh position={[0.25, 0.8, 0.25]} material={chromeMetal}><boxGeometry args={[0.03, 0.3, 0.03]} /></mesh>
      <mesh position={[-0.25, 0.8, 0.25]} material={chromeMetal}><boxGeometry args={[0.03, 0.3, 0.03]} /></mesh>
      {/* Wheels */}
      {[-0.3, 0.3].map((x) => [-0.2, 0.2].map((z, i) => (
        <group key={`wheel-${x}-${i}`} position={[x, 0.08, z]}>
          <mesh material={darkSteel} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.04, 0.04, 0.03, 16]} /></mesh>
          <mesh position={[0, 0.05, 0]} material={chromeMetal}><cylinderGeometry args={[0.012, 0.012, 0.08, 12]} /></mesh>
        </group>
      )))}
    </group>
  );
}

// ──────────────────────────────────────────────────────────────
// 9. HOSPITAL — Hospital Waiting Bench (4-Seater)
// ──────────────────────────────────────────────────────────────
export function HospitalBench3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useAutoRotation(ref, autoRotate);
  return (
    <group ref={ref} position={[0, -0.3, 0]}>
      {/* Crossbeam */}
      <mesh position={[0, 0.38, 0]} material={blackPowder} castShadow><boxGeometry args={[2.2, 0.06, 0.12]} /></mesh>
      {/* 4 Seats */}
      {[-0.7, -0.23, 0.23, 0.7].map((x) => (
        <group key={x}>
          <mesh position={[x, 0.52, 0]} material={navyFabric} castShadow><boxGeometry args={[0.45, 0.04, 0.45]} /></mesh>
          <mesh position={[x, 0.68, -0.18]} material={navyFabric} castShadow><boxGeometry args={[0.45, 0.12, 0.03]} /></mesh>
        </group>
      ))}
      {/* Arm/Leg supports */}
      {[-1.05, -0.5, 0, 0.5, 1.05].map((x) => (
        <group key={x}>
          <mesh position={[x, 0.22, 0.05]} material={chromeMetal} castShadow><cylinderGeometry args={[0.035, 0.035, 0.4, 16]} /></mesh>
          <mesh position={[x, 0.44, 0.2]} material={chromeMetal}><cylinderGeometry args={[0.025, 0.025, 0.25, 12]} /></mesh>
          <mesh position={[x, 0.02, 0]} material={blackPowder}><boxGeometry args={[0.08, 0.04, 0.12]} /></mesh>
        </group>
      ))}
    </group>
  );
}

// ──────────────────────────────────────────────────────────────
// 10. OFFICE — Executive Office Desk
// ──────────────────────────────────────────────────────────────
export function OfficeDesk3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useAutoRotation(ref, autoRotate);
  return (
    <group ref={ref} position={[0, -0.45, 0]}>
      <mesh position={[0, 0.7, 0]} material={woodDark} castShadow><boxGeometry args={[1.7, 0.045, 0.85]} /></mesh>
      <mesh position={[-0.72, 0.35, 0.35]} material={darkSteel} castShadow><boxGeometry args={[0.05, 0.68, 0.05]} /></mesh>
      <mesh position={[-0.72, 0.35, -0.35]} material={darkSteel} castShadow><boxGeometry args={[0.05, 0.68, 0.05]} /></mesh>
      <mesh position={[-0.72, 0.03, 0]} material={darkSteel}><boxGeometry args={[0.05, 0.04, 0.75]} /></mesh>
      <mesh position={[-0.72, 0.67, 0]} material={darkSteel}><boxGeometry args={[0.05, 0.04, 0.75]} /></mesh>
      <group position={[0.55, 0.36, 0]}>
        <mesh material={darkSteel} castShadow><boxGeometry args={[0.42, 0.64, 0.75]} /></mesh>
        {[0.2, 0.0, -0.2].map((dy, idx) => (
          <group key={idx} position={[0, dy, 0.38]}>
            <mesh material={woodDark}><boxGeometry args={[0.39, 0.18, 0.02]} /></mesh>
            <mesh position={[0, 0, 0.02]} material={chromeMetal}><boxGeometry args={[0.12, 0.02, 0.015]} /></mesh>
          </group>
        ))}
      </group>
      <mesh position={[-0.1, 0.42, -0.32]} material={ufiBlue} castShadow><boxGeometry args={[1.05, 0.38, 0.02]} /></mesh>
    </group>
  );
}

// ──────────────────────────────────────────────────────────────
// 11. OFFICE — Ergonomic Mesh Office Chair
// ──────────────────────────────────────────────────────────────
export function MeshChair3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useAutoRotation(ref, autoRotate);
  return (
    <group ref={ref} position={[0, -0.3, 0]}>
      {/* Base */}
      <mesh position={[0, 0.08, 0]} material={chromeMetal} castShadow><cylinderGeometry args={[0.35, 0.35, 0.03, 32]} /></mesh>
      {/* Gas lift */}
      <mesh position={[0, 0.3, 0]} material={chromeMetal}><cylinderGeometry args={[0.05, 0.05, 0.4, 16]} /></mesh>
      {/* Seat */}
      <mesh position={[0, 0.5, 0]} material={blackPowder} castShadow><boxGeometry args={[0.5, 0.06, 0.5]} /></mesh>
      <mesh position={[0, 0.53, 0]} material={blueGreyFabric} castShadow><boxGeometry args={[0.48, 0.02, 0.48]} /></mesh>
      {/* Backrest */}
      <mesh position={[0, 0.78, -0.18]} material={blueGreyFabric} castShadow><boxGeometry args={[0.45, 0.45, 0.02]} /></mesh>
      <mesh position={[0, 0.78, -0.2]} material={blackPowder}><boxGeometry args={[0.47, 0.47, 0.03]} /></mesh>
      {/* Lumbar support */}
      <mesh position={[0, 0.65, -0.22]} material={ufiBlue}><boxGeometry args={[0.25, 0.08, 0.02]} /></mesh>
      {/* Headrest */}
      <mesh position={[0, 1.05, -0.18]} material={blueGreyFabric} castShadow><boxGeometry args={[0.3, 0.12, 0.02]} /></mesh>
      <mesh position={[0, 1.05, -0.2]} material={blackPowder}><boxGeometry args={[0.32, 0.14, 0.03]} /></mesh>
      {/* Mechanism housing */}
      <mesh position={[0, 0.45, 0]} material={blackPowder}><boxGeometry args={[0.2, 0.06, 0.15]} /></mesh>
      {/* 5-star base wheels */}
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i * 2 * Math.PI) / 5;
        return (
          <group key={i} position={[Math.sin(angle) * 0.35, 0.02, Math.cos(angle) * 0.35]}>
            <mesh material={darkSteel} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.035, 0.035, 0.03, 12]} /></mesh>
            <mesh position={[0, 0.04, 0]} material={chromeMetal}><cylinderGeometry args={[0.01, 0.01, 0.06, 12]} /></mesh>
          </group>
        );
      })}
    </group>
  );
}

// ──────────────────────────────────────────────────────────────
// 12. OFFICE — Executive Office File Cabinet
// ──────────────────────────────────────────────────────────────
export function OfficeCabinet3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useAutoRotation(ref, autoRotate);
  return (
    <group ref={ref} position={[0, -0.9, 0]}>
      <mesh position={[0, 0.9, 0]} material={darkSteel} castShadow><boxGeometry args={[0.8, 1.8, 0.45]} /></mesh>
      <mesh position={[-0.2, 0.9, 0.235]} material={darkSteel} castShadow><boxGeometry args={[0.38, 1.76, 0.025]} /></mesh>
      <mesh position={[0.2, 0.9, 0.235]} material={darkSteel} castShadow><boxGeometry args={[0.38, 1.76, 0.025]} /></mesh>
      <mesh position={[0, 0.9, 0.26]} material={chromeMetal}><cylinderGeometry args={[0.02, 0.02, 0.04, 16]} /></mesh>
      <mesh position={[-0.38, 0.9, 0.26]} material={chromeMetal} rotation={[0, Math.PI / 2, 0]}><cylinderGeometry args={[0.01, 0.01, 0.1, 12]} /></mesh>
      <mesh position={[0.38, 0.9, 0.26]} material={chromeMetal} rotation={[0, Math.PI / 2, 0]}><cylinderGeometry args={[0.01, 0.01, 0.1, 12]} /></mesh>
      {[0.3, -0.1, -0.5, -0.9].map((y) => (
        <mesh key={y} position={[0, y, 0]} material={shelfWhite} castShadow receiveShadow><boxGeometry args={[0.74, 0.02, 0.41]} /></mesh>
      ))}
      <mesh position={[0, -0.05, 0]} material={darkSteel}><boxGeometry args={[0.82, 0.08, 0.47]} /></mesh>
      {[-0.35, 0.35].map((x) => [-0.18, 0.18].map((z, i) => (
        <mesh key={`foot-${x}-${i}`} position={[x, -0.09, z]} material={darkSteel}><cylinderGeometry args={[0.02, 0.02, 0.03, 12]} /></mesh>
      )))}
    </group>
  );
}

// ──────────────────────────────────────────────────────────────
// 13. HOME — Architectural Metal Sofa Set
// ──────────────────────────────────────────────────────────────
export function MetalSofa3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useAutoRotation(ref, autoRotate);
  return (
    <group ref={ref} position={[0, -0.4, 0]}>
      <mesh position={[0, 0.22, 0]} material={darkSteel} castShadow><boxGeometry args={[1.65, 0.05, 0.75]} /></mesh>
      {[-0.72, 0.72].map((x) => [-0.32, 0.32].map((z, idx) => (
        <mesh key={`${x}-${idx}`} position={[x, 0.1, z]} material={ufiBlue}><cylinderGeometry args={[0.02, 0.015, 0.2, 12]} /></mesh>
      )))}
      <mesh position={[-0.38, 0.32, 0.03]} material={sofaFabric} castShadow><boxGeometry args={[0.72, 0.16, 0.65]} /></mesh>
      <mesh position={[0.38, 0.32, 0.03]} material={sofaFabric} castShadow><boxGeometry args={[0.72, 0.16, 0.65]} /></mesh>
      <mesh position={[-0.38, 0.56, -0.25]} material={sofaFabric} castShadow><boxGeometry args={[0.72, 0.35, 0.16]} /></mesh>
      <mesh position={[0.38, 0.56, -0.25]} material={sofaFabric} castShadow><boxGeometry args={[0.72, 0.35, 0.16]} /></mesh>
      <mesh position={[0, 0.58, -0.34]} material={darkSteel}><boxGeometry args={[1.6, 0.04, 0.04]} /></mesh>
      <mesh position={[-0.78, 0.44, 0.02]} material={darkSteel}><boxGeometry args={[0.04, 0.04, 0.68]} /></mesh>
      <mesh position={[0.78, 0.44, 0.02]} material={darkSteel}><boxGeometry args={[0.04, 0.04, 0.68]} /></mesh>
    </group>
  );
}

// ──────────────────────────────────────────────────────────────
// 14. HOME — Industrial Metal Dining Table
// ──────────────────────────────────────────────────────────────
export function MetalDiningTable3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useAutoRotation(ref, autoRotate);
  return (
    <group ref={ref} position={[0, -0.4, 0]}>
      {/* Top */}
      <mesh position={[0, 0.73, 0]} material={woodDark} castShadow><boxGeometry args={[1.6, 0.05, 0.9]} /></mesh>
      {/* Trapezoidal legs */}
      {[-0.7, 0.7].map((x) => [-0.35, 0.35].map((z, idx) => (
        <group key={`${x}-${idx}`} position={[x, 0.35, z]}>
          <mesh material={darkSteel} castShadow><boxGeometry args={[0.08, 0.7, 0.08]} /></mesh>
          <mesh position={[0, -0.36, 0]} material={darkSteel}><boxGeometry args={[0.12, 0.04, 0.12]} /></mesh>
        </group>
      )))}
      {/* Cross braces */}
      <mesh position={[0, 0.2, 0]} material={darkSteel}><boxGeometry args={[1.3, 0.04, 0.04]} /></mesh>
      <mesh position={[0, 0.2, 0]} material={darkSteel} rotation={[0, Math.PI / 2, 0]}><boxGeometry args={[0.6, 0.04, 0.04]} /></mesh>
    </group>
  );
}

// ──────────────────────────────────────────────────────────────
// 15. HOME — Geometric Metal Coffee Table
// ──────────────────────────────────────────────────────────────
export function MetalCoffeeTable3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useAutoRotation(ref, autoRotate);
  return (
    <group ref={ref} position={[0, -0.3, 0]}>
      {/* Upper top */}
      <mesh position={[0, 0.4, 0]} material={woodOak} castShadow><cylinderGeometry args={[0.4, 0.4, 0.035, 32]} /></mesh>
      {/* Lower magazine ring */}
      <mesh position={[0, 0.15, 0]} material={darkSteel} castShadow><cylinderGeometry args={[0.3, 0.3, 0.025, 32]} /></mesh>
      {/* Hairpin legs */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i * Math.PI) / 2;
        return (
          <group key={i} position={[Math.sin(angle) * 0.3, 0.075, Math.cos(angle) * 0.3]}>
            <mesh material={ufiBlue}><cylinderGeometry args={[0.015, 0.01, 0.3, 12]} /></mesh>
          </group>
        );
      })}
      {/* Center support */}
      <mesh position={[0, 0.2, 0]} material={darkSteel}><cylinderGeometry args={[0.02, 0.02, 0.25, 16]} /></mesh>
    </group>
  );
}

// ──────────────────────────────────────────────────────────────
// 16. STORE — Gondola Wall Rack (Single-Sided)
// ──────────────────────────────────────────────────────────────
export function GondolaWallRack3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useAutoRotation(ref, autoRotate);
  const shelfTiers = [0.1, 0.45, 0.8, 1.15, 1.5];
  return (
    <group ref={ref} position={[0, -0.85, 0]}>
      <mesh position={[0, 0.9, 0]} material={ufiBlue} castShadow><boxGeometry args={[0.07, 1.85, 0.07]} /></mesh>
      <mesh position={[0.8, 0.9, 0]} material={ufiBlue} castShadow><boxGeometry args={[0.07, 1.85, 0.07]} /></mesh>
      <mesh position={[0, 1.8, 0]} material={ufiBlue} castShadow><boxGeometry args={[1.68, 0.05, 0.07]} /></mesh>
      <mesh position={[0, 0.9, -0.25]} material={shelfWhite} receiveShadow><boxGeometry args={[1.55, 1.7, 0.02]} /></mesh>
      <mesh position={[0.8, 0.04, 0]} material={ufiBlue} castShadow><boxGeometry args={[0.07, 0.08, 0.5]} /></mesh>
      <mesh position={[-0.8, 0.04, 0]} material={ufiBlue} castShadow><boxGeometry args={[0.07, 0.08, 0.5]} /></mesh>
      <mesh position={[0, 0.08, 0.22]} material={shelfWhite} castShadow receiveShadow><boxGeometry args={[1.66, 0.03, 0.4]} /></mesh>
      <mesh position={[0, 0.08, 0.42]} material={ufiBlue} castShadow><boxGeometry args={[1.66, 0.04, 0.015]} /></mesh>
      {shelfTiers.map((y, idx) => (
        <group key={idx}>
          <mesh position={[0, y, 0.18]} material={shelfWhite} castShadow receiveShadow><boxGeometry args={[1.6, 0.025, 0.32]} /></mesh>
          <mesh position={[0, y, 0.34]} material={ufiBlue} castShadow><boxGeometry args={[1.6, 0.035, 0.012]} /></mesh>
          <mesh position={[-0.78, y - 0.04, 0.1]} material={ufiBlue}><boxGeometry args={[0.02, 0.06, 0.18]} /></mesh>
          <mesh position={[0.78, y - 0.04, 0.1]} material={ufiBlue}><boxGeometry args={[0.02, 0.06, 0.18]} /></mesh>
        </group>
      ))}
      {[-0.8, 0.8].map((x) => [-0.2, 0.2].map((z, i) => (
        <mesh key={`${x}-${i}`} position={[x, -0.01, z]} material={darkSteel}><cylinderGeometry args={[0.025, 0.025, 0.02, 16]} /></mesh>
      )))}
    </group>
  );
}

// ──────────────────────────────────────────────────────────────
// 17. SCHOOL — Teacher's Desk
// ──────────────────────────────────────────────────────────────
export function TeacherDesk3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useAutoRotation(ref, autoRotate);
  return (
    <group ref={ref} position={[0, -0.4, 0]}>
      <mesh position={[0, 0.72, 0]} material={woodDark} castShadow><boxGeometry args={[1.2, 0.04, 0.65]} /></mesh>
      {[-0.55, 0.55].map((x) => (
        <group key={x}>
          <mesh position={[x, 0.36, 0.25]} material={ufiBlue} castShadow><boxGeometry args={[0.04, 0.72, 0.04]} /></mesh>
          <mesh position={[x, 0.36, -0.25]} material={ufiBlue} castShadow><boxGeometry args={[0.04, 0.72, 0.04]} /></mesh>
          <mesh position={[x, 0.02, 0]} material={ufiBlue}><boxGeometry args={[0.04, 0.04, 0.55]} /></mesh>
        </group>
      ))}
      <mesh position={[0, 0.1, 0]} material={ufiBlue}><boxGeometry args={[1.1, 0.03, 0.55]} /></mesh>
      {/* Drawer pedestal */}
      <group position={[-0.55, 0.38, -0.2]}>
        <mesh material={ufiBlue} castShadow><boxGeometry args={[0.35, 0.64, 0.25]} /></mesh>
        {[0.2, 0.0, -0.2].map((dy, idx) => (
          <group key={idx} position={[0, dy, 0.13]}>
            <mesh material={woodDark}><boxGeometry args={[0.32, 0.18, 0.02]} /></mesh>
            <mesh position={[0, 0, 0.02]} material={chromeMetal}><boxGeometry args={[0.1, 0.02, 0.015]} /></mesh>
          </group>
        ))}
      </group>
    </group>
  );
}

// ──────────────────────────────────────────────────────────────
// 18. HOSPITAL — Examination Couch
// ──────────────────────────────────────────────────────────────
export function ExaminationCouch3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useAutoRotation(ref, autoRotate);
  return (
    <group ref={ref} position={[0, -0.4, 0]}>
      <mesh position={[0, 0.18, 0]} material={clinicalWhite} castShadow><boxGeometry args={[1.9, 0.06, 0.65]} /></mesh>
      {[-0.8, 0.8].map((x) => [-0.28, 0.28].map((z, i) => (
        <group key={`${x}-${i}`} position={[x, 0.07, z]}>
          <mesh material={darkSteel} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.04, 0.04, 0.03, 16]} /></mesh>
          <mesh position={[0, 0.06, 0]} material={chromeMetal}><cylinderGeometry args={[0.012, 0.012, 0.08, 12]} /></mesh>
        </group>
      )))}
      <mesh position={[0, 0.32, 0]} material={hospitalBlue} castShadow><boxGeometry args={[1.85, 0.1, 0.6]} /></mesh>
      <group position={[-0.95, 0.45, 0]} rotation={[0, 0, 0.3]}>
        <mesh material={hospitalBlue} castShadow><boxGeometry args={[0.35, 0.1, 0.55]} /></mesh>
      </group>
      <mesh position={[0.95, 0.25, 0]} material={clinicalWhite} castShadow><boxGeometry args={[0.05, 0.3, 0.6]} /></mesh>
      {/* Step */}
      <mesh position={[0, 0.22, 0.55]} material={darkSteel} castShadow><boxGeometry args={[0.5, 0.1, 0.25]} /></mesh>
    </group>
  );
}

// ──────────────────────────────────────────────────────────────
// Selector — SLUG-FIRST (then category fallback)
// ──────────────────────────────────────────────────────────────
export default function DetailedFurniture3D({
  slug,
  category,
  autoRotate = false,
}: {
  slug?: string;
  category?: string;
  autoRotate?: boolean;
}) {
  // SLUG-FIRST mapping — exact product match
  switch (slug) {
    // Store
    case 'double-sided-gondola-rack':
      return <GondolaRack3D autoRotate={autoRotate} />;
    case 'supermarket-trolley':
      return <SupermarketTrolley3D autoRotate={autoRotate} />;
    case 'two-door-storage-cabinet':
      return <StorageCabinet3D autoRotate={autoRotate} />;
    // School
    case 'two-seater-classroom-bench':
      return <SchoolBench3D autoRotate={autoRotate} />;
    case 'student-desk-chair-set':
      return <StudentDeskChair3D autoRotate={autoRotate} />;
    case 'steel-storage-locker':
      return <SteelLocker3D autoRotate={autoRotate} />;
    // Hospital
    case 'obstetric-delivery-bed':
      return <HospitalBed3D autoRotate={autoRotate} />;
    case 'medicine-trolley':
      return <MedicineTrolley3D autoRotate={autoRotate} />;
    case 'hospital-bench-4-seater':
      return <HospitalBench3D autoRotate={autoRotate} />;
    // Office
    case 'executive-office-desk':
      return <OfficeDesk3D autoRotate={autoRotate} />;
    case 'ergonomic-mesh-chair':
      return <MeshChair3D autoRotate={autoRotate} />;
    case 'two-door-office-cabinet':
      return <OfficeCabinet3D autoRotate={autoRotate} />;
    // Home
    case 'metal-sofa-set':
      return <MetalSofa3D autoRotate={autoRotate} />;
    case 'metal-dining-table':
      return <MetalDiningTable3D autoRotate={autoRotate} />;
    case 'metal-coffee-table':
      return <MetalCoffeeTable3D autoRotate={autoRotate} />;
  }

  // Category fallbacks (used on category overview page)
  switch (category) {
    case 'store':
      return <GondolaWallRack3D autoRotate={autoRotate} />;
    case 'school':
      return <TeacherDesk3D autoRotate={autoRotate} />;
    case 'hospital':
      return <ExaminationCouch3D autoRotate={autoRotate} />;
    case 'office':
      return <MeshChair3D autoRotate={autoRotate} />;
    case 'home':
      return <MetalDiningTable3D autoRotate={autoRotate} />;
  }

  // Ultimate fallback
  return <GondolaRack3D autoRotate={autoRotate} />;
}