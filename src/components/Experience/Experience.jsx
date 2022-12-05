/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// extend({ OrbitControls });
import { Canvas } from '@react-three/fiber';
import React, { useRef } from 'react';
import './Experience.css';
import LavaField from '../Meshes/LavaField';
import Sphere from '../Meshes/Sphere';
import Box from '../Meshes/Box';
import CustomObject from '../Meshes/CustomObject';
import Polyhedron from '../Meshes/Polyhedron';
import { useMemo } from 'react';
import { OrbitControls, Sky, Stats } from '@react-three/drei';
import { useControls } from 'leva';

function Sun() {
  const sunRef = useRef();

  return (
    <>
      <mesh ref={sunRef} scale={[4, 4, 4]} position={[-45, 123, -42]}>
        <spotLight intensity={8} castShadow color="#fff0da" />
        <meshStandardMaterial />
        <sphereGeometry />
      </mesh>
    </>
  );
}

export default function Experience() {
  const polyhedron = useMemo(
    () => [
      new THREE.BoxGeometry(),
      new THREE.SphereGeometry(0.785398),
      new THREE.DodecahedronGeometry(0.785398),
    ],
    []
  );

  const options = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
      color: { value: 'lime' },
    };
  }, []);

  const pA = useControls('Polyhedron A', options);
  const pB = useControls('Polyhedron B', options);

  // const created = ({ scene }) => {
  //   scene.background = new THREE.Color('red');
  // };

  const directionalLight = useRef();
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  const { sunPosition } = useControls('sky', {
    sunPosition: { value: [1, 2, 3] },
  });

  return (
    <>
      <Canvas
        // onCreated={created}
        shadows
        dpr={[1, 2]}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }}
        style={{ height: '100vh', width: '100vw' }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 800,
          position: [0, 2, 16],
        }}
      >
        <Sun />
        {/* <color args={['ivory']} attach="background" /> */}
        <Polyhedron
          position={[-1, 1, 0]}
          rotation={[pA.x, pA.y, pA.z]}
          visible={pA.visible}
          color={pA.color}
          polyhedron={polyhedron}
        />
        <Polyhedron
          position={[1, 1, 0]}
          rotation={[pB.x, pB.y, pB.z]}
          visible={pB.visible}
          color={pB.color}
          polyhedron={polyhedron}
        />
        {/* <OrbitControls args={[camera, gl.domElement]} /> */}
        <OrbitControls makeDefault />
        <Stats />
        {/* <CameraController /> */}
        <Sphere />
        <Box />
        <LavaField />
        <CustomObject />
        <ambientLight intensity={0.7} />
        <Sky sunPosition={sunPosition} />
        <directionalLight
          ref={directionalLight}
          position={sunPosition}
          castShadow
          intensity={1.5}
          shadow-mapSize={[1024, 1024]}
          shadow-camera-near={1}
          shadow-camera-far={10}
        />
        <directionalLight ref={directionalLight} position={[-3, 2, 5]} castShadow />
      </Canvas>
    </>
  );
}
