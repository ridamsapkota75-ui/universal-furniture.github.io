import React, { Suspense, useState, useEffect, useRef, useLayoutEffect, useMemo } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, useGLTF, Bounds, useBounds } from '@react-three/drei';
import * as THREE from 'three';
import DetailedFurniture3D from './DetailedFurniture3D';

// Set global tone mapping
THREE.ColorManagement.enabled = true;

interface Props {
  slug?: string;
  category?: string;
  autoRotate?: boolean;
  className?: string;
}

// Model Loading Error Boundary
class ModelErrorBoundary extends React.Component<{ children: React.ReactNode; fallback: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

// GLB Loader
function GLBModel({ src }: { src: string }) {
  const { scene } = useGLTF(src);
  const api = useBounds();

  useEffect(() => {
    api.refresh().fit();
  }, [src, api]);

  return <primitive object={scene} />;
}

function ModelLoader({ slug }: { slug: string }) {
  const modelUrl = `/models/${slug}.glb`;
  const [exists, setExists] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(modelUrl, { method: 'HEAD' }).then((res) => {
      if (!cancelled) setExists(res.ok);
    }).catch(() => {
      if (!cancelled) setExists(false);
    });
    return () => { cancelled = true; };
  }, [modelUrl]);

  if (exists === null) return null;
  if (!exists) {
    return (
      <mesh>
        <textGeometry args={['3D Model Coming Soon', { size: 0.15, height: 0.05 }]} />
        <meshBasicMaterial color="#888888" />
      </mesh>
    );
  }

  return (
    <Suspense fallback={null}>
      <ModelErrorBoundary fallback={
        <mesh>
          <textGeometry args={['3D Model Coming Soon', { size: 0.15, height: 0.05 }]} />
          <meshBasicMaterial color="#888888" />
        </mesh>
      }>
        <GLBModel src={modelUrl} />
      </ModelErrorBoundary>
    </Suspense>
  );
}

// ──────────────────────────────────────────────────────────────
// Professional Studio Lighting
// ──────────────────────────────────────────────────────────────
function StudioLighting({ intensity = 1 }: { intensity?: number }) {
  return (
    <>
      <ambientLight intensity={0.6 * intensity} />
      <directionalLight
        position={[8, 12, 8]}
        intensity={2.0 * intensity}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <Environment files="/hdri/potsdamer_platz_1k.hdr" environmentIntensity={1.5} />
    </>
  );
}

// ──────────────────────────────────────────────────────────────
// Responsive Canvas Wrapper
// ──────────────────────────────────────────────────────────────
function ViewerCanvas({
  children,
  autoRotate,
  className
}: {
  children: React.ReactNode;
  autoRotate: boolean;
  className?: string;
}) {
  return (
    <div className={className} style={{ width: '100%', height: '100%', minHeight: '300px' }}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 3], fov: 45 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <StudioLighting />
        <Bounds fit clip observe margin={1.2}>
          {children}
        </Bounds>
        <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={10} blur={2} />
        <OrbitControls
          makeDefault
          enableZoom={true}
          autoRotate={autoRotate}
        />
      </Canvas>
    </div>
  );
}

export default function Product3DViewer({
  slug,
  category,
  autoRotate = false,
  className = 'w-full h-[400px]',
}: Props) {
  const [mounted, setMounted] = useState(false);
  const [isRotating, setIsRotating] = useState(autoRotate);

  const storeSlugs = ['double-sided-gondola-rack', 'supermarket-trolley', 'storage-cabinet'];
  const useGlb = slug && storeSlugs.includes(slug);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return (
      <div className={`${className} bg-industrial-deep flex items-center justify-center`}>
        <span className="text-metallicSilver/70">Loading...</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className} bg-industrial-deep rounded-card-xl overflow-hidden border border-electricBlue/20`}>
      <ViewerCanvas autoRotate={isRotating}>
        {useGlb ? (
          <ModelLoader slug={slug!} />
        ) : (
          <DetailedFurniture3D slug={slug} category={category} autoRotate={isRotating} />
        )}
      </ViewerCanvas>
      {/* HUD UI stays as is */}
      <div className="absolute top-3 left-4 z-10">
        <span className="text-caption font-mono uppercase bg-industrial-card/90 px-2 py-0.5 rounded text-metallicSilver/80">
          Interactive 3D Viewport
        </span>
      </div>
      <div className="absolute bottom-3 right-4 z-10">
        <button
          type="button"
          onClick={() => setIsRotating(!isRotating)}
          className="text-caption bg-industrial-card/90 text-iceBlue px-3 py-1.5 rounded-lg border border-electricBlue/25"
        >
          {isRotating ? 'Pause Rotation' : 'Auto Rotate'}
        </button>
      </div>
    </div>
  );
}