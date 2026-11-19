// Augment the global JSX namespace so that Three.js primitives used by
// @react-three/fiber (mesh, group, boxGeometry, textGeometry, etc.) are
// recognized as valid intrinsic elements by TypeScript.
//
// This keeps the 3D code (Product3DViewer.tsx, DetailedFurniture3D.tsx)
// type-checking without modifying any component file.

import type { ReactNode } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Core objects
      group: { children?: ReactNode; [key: string]: unknown };
      mesh: { children?: ReactNode; [key: string]: unknown };
      primitive: { children?: ReactNode; [key: string]: unknown };

      // Geometry
      boxGeometry: { args?: readonly number[]; [key: string]: unknown };
      cylinderGeometry: { args?: readonly number[]; [key: string]: unknown };
      sphereGeometry: { args?: readonly number[]; [key: string]: unknown };
      planeGeometry: { args?: readonly number[]; [key: string]: unknown };
      torusGeometry: { args?: readonly number[]; [key: string]: unknown };
      textGeometry: { args?: readonly unknown[]; [key: string]: unknown };
      bufferGeometry: { children?: ReactNode; [key: string]: unknown };
      bufferAttribute: { args?: readonly unknown[]; [key: string]: unknown };

      // Materials
      meshBasicMaterial: { color?: string; [key: string]: unknown };
      meshStandardMaterial: { color?: string; [key: string]: unknown };
      meshLambertMaterial: { color?: string; [key: string]: unknown };
      meshPhongMaterial: { color?: string; [key: string]: unknown };
      meshPhysicalMaterial: { color?: string; [key: string]: unknown };
      meshMatcapMaterial: { color?: string; [key: string]: unknown };
      meshToonMaterial: { color?: string; [key: string]: unknown };
      lineBasicMaterial: { color?: string; [key: string]: unknown };
      lineSegmentsMaterial: { color?: string; [key: string]: unknown };
      pointsMaterial: { color?: string; [key: string]: unknown };

      // Lights
      ambientLight: { intensity?: number; [key: string]: unknown };
      directionalLight: { intensity?: number; [key: string]: unknown };
      pointLight: { intensity?: number; [key: string]: unknown };
      spotLight: { intensity?: number; [key: string]: unknown };
      hemisphereLight: { intensity?: number; [key: string]: unknown };
      areaLight: { intensity?: number; [key: string]: unknown };

      // Environment - needs proper typing for @react-three/drei
      Environment: {
        files?: string;
        path?: string;
        preset?: string;
        scene?: string;
        background?: boolean;
        ground?: boolean;
        environmentIntensity?: number;
        blur?: number;
        [key: string]: unknown;
      };

      // Points / Lines
      points: { children?: ReactNode; [key: string]: unknown };
      line: { children?: ReactNode; [key: string]: unknown };
      lineLoop: { children?: ReactNode; [key: string]: unknown };
      lineSegments: { children?: ReactNode; [key: string]: unknown };
    }
  }
}

export {};