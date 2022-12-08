/* eslint-disable react/no-unknown-property */
import { Environment, Lightformer, OrbitControls, TrackballControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React from 'react';
import Collabo from '../Projects/Collabo';
import * as THREE from 'three';
import { useRef } from 'react';
import { useState } from 'react';

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
      <div className="alt-scene">
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
            <Lightformer position-z={-1} scale={4} color="gold" intensity={10} form="ring" />
          </Environment>
          <Collabo 
            onWheel={(e) => setScrolled(true)} 
            // ref={meshRef} 
            position={[0, -2, -4]} 
          />
          <TrackballControls makeDefault minDistance={0} maxDistance={20} />
        </Canvas>
      </div>
    </>
  );
}
