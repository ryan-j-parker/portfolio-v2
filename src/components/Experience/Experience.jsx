/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// extend({ OrbitControls });
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
import './Experience.css';
import LavaField from '../Meshes/LavaField';
import Sphere from '../Meshes/Sphere';
import Box from '../Meshes/Box';
import CustomObject from '../Meshes/CustomObject';
import Polyhedron from '../Meshes/Polyhedron';
import { useMemo } from 'react';
import { Environment, Lightformer, Loader, OrbitControls, Sky, Stats } from '@react-three/drei';
import { useControls } from 'leva';
import Collabo from '../Projects/Collabo';
import SoundPalette from '../Projects/SoundPalette';
import { useEffect } from 'react';
import Sun from '../Meshes/Sun';
import Torus from '../Meshes/Torus';
import Orbital from '../Meshes/Orbital';

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

  const { color, opacity, blur } = useControls('contact shadows', {
    color: '#1d8f75',
    opacity: { value: 0.4, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, max: 10 },
  });

  const directionalLight = useRef();
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  const { sunPosition } = useControls('sky', {
    sunPosition: { value: [1, 2, 3] },
  });

  const { envMapIntensity } = useControls('environment map', {
    envMapIntensity: { value: 1, min: 0, max: 12 },
  });

  // const presetsObj = {
  //   sunset: 'venice/venice_sunset_1k.hdr',
  //   dawn: 'kiara/kiara_1_dawn_1k.hdr',
  //   night: 'dikhololo/dikhololo_night_1k.hdr',
  //   warehouse: 'empty-wharehouse/empty_warehouse_01_1k.hdr',
  //   forest: 'forrest-slope/forest_slope_1k.hdr',
  //   apartment: 'lebombo/lebombo_1k.hdr',
  //   studio: 'studio-small-3/studio_small_03_1k.hdr',
  //   city: 'potsdamer-platz/potsdamer_platz_1k.hdr',
  //   park: 'rooitou/rooitou_park_1k.hdr',
  //   lobby: 'st-fagans/st_fagans_interior_1k.hdr',
  // };

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Canvas
          // onCreated={created}
          // shadows={false}
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
            position: [-5, 2, 28],
          }}
        >
          <Environment
            background
            // files={'./environmentMaps/puresky.hdr'}
            files={'./environmentMaps/firesky.hdr'}
            // preset="warehouse"
            // files={'./environmentMaps/the_sky_is_on_fire_2k.hdr'}
            // files={[
            //   './environmentMaps/2/px.jpg',
            //   './environmentMaps/2/nx.jpg',
            //   './environmentMaps/2/py.jpg',
            //   './environmentMaps/2/ny.jpg',
            //   './environmentMaps/2/pz.jpg',
            //   './environmentMaps/2/nz.jpg',
            // ]}
          >
            <color args={['#000000']} attach="background" />
            <Lightformer position-z={-1} scale={5} color="white" intensity={10} form="ring" />
            {/* <mesh position-z={-5} scale={10}>
            <planeGeometry />
            <meshBasicMaterial color={[10, 0, 0]} />
          </mesh> */}
          </Environment>
          <Collabo position={[-2, 1, -4]} />
          <SoundPalette position={[-12, 4, -2]} />
          {/* <Sun /> */}
          {/* <Torus position={[6, 7, 14]}>
          <Orbital />
        </Torus> */}
          <Polyhedron
            position={[-12, 1, 0]}
            rotation={[pA.x, pA.y, pA.z]}
            visible={pA.visible}
            color={pA.color}
            polyhedron={polyhedron}
            envMapIntensity={envMapIntensity}
          ></Polyhedron>
          <Polyhedron
            position={[-10, 1, 0]}
            rotation={[pB.x, pB.y, pB.z]}
            visible={pB.visible}
            color={pB.color}
            polyhedron={polyhedron}
            envMapIntensity={envMapIntensity}
          ></Polyhedron>
          {/* <OrbitControls args={[camera, gl.domElement]} /> */}
          <OrbitControls makeDefault />
          <Stats />
          {/* <CameraController /> */}
          <Sphere position={[2, 2, -2]} envMapIntensity={envMapIntensity} />
          <Box position={[10, 4, 6]} envMapIntensity={envMapIntensity} />
          <LavaField envMapIntensity={envMapIntensity} />
          {/* <CustomObject envMapIntensity={envMapIntensity} /> */}
          {/* <ambientLight intensity={0.7} /> */}
          {/* <Sky sunPosition={sunPosition} /> */}

          {/* <directionalLight
          ref={directionalLight}
          position={sunPosition}
          intensity={2.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-near={1}
          shadow-camera-far={10}
          shadow-camera-top={5}
          shadow-camera-right={5}
          shadow-camera-bottom={-5}
          shadow-camera-left={-5}
        /> */}

          {/* <directionalLight ref={directionalLight} position={sunPosition} castShadow /> */}
        </Canvas>
      </Suspense>
    </>
  );
}
