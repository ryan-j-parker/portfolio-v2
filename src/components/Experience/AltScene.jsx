/* eslint-disable react/no-unknown-property */
import {
  Environment,
  Lightformer,
  Loader,
  OrbitControls,
  TrackballControls,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Collabo from '../Projects/Collabo';
import * as THREE from 'three';
import { useRef } from 'react';
import { useState } from 'react';
import SoundPalette from '../Projects/SoundPalette';
import MouseMesh from '../Meshes/MouseMesh';

export default function AltScene() {
  const camera = new THREE.PerspectiveCamera({
    fov: 70,
    aspect: window.innerWidth / window.innerHeight,
    near: 0.01,
    far: 10,
  });

  //   const meshRef = useRef();

  const [scrolled, setScrolled] = useState(false);

  //   useFrame(() => {
  //     scrolled ? (meshRef.current.position.y += 1) : (meshRef.current.position.y -= 1);
  //   });

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Canvas
          shadows
          dpr={[1, 3]}
          gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            outputEncoding: THREE.sRGBEncoding,
          }}
          style={{ height: '100vh', width: '100vw' }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 400,
            position: [0, 0, 10],
          }}
        >
          <Environment background files={'./environmentMaps/firesky.hdr'}>
            <color args={['#000000']} attach="background" />
            <Lightformer position-z={-1} scale={4} color="gold" intensity={5} form="ring" />
          </Environment>
          <Collabo
            onWheel={(e) => setScrolled(true)}
            // ref={meshRef}
            position={[-1, -2, -18]}
          />
          <SoundPalette position={[6, 1.5, -16]} />
          <MouseMesh position={[-8.5, -9.5, -24]} rotation-x={-0.4} rotation-y={0.6} />
          <TrackballControls makeDefault minDistance={0} maxDistance={20} />
        </Canvas>
      </Suspense>
    </>
  );
}
