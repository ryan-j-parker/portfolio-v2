/* eslint-disable react/no-unknown-property */
import { useLoader, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

import mouse1 from '../../mouse1.jpg';
// import luckiest from '../../Luckiest Guy_Regular.json';
import { Center, PivotControls, Text, Text3D } from '@react-three/drei';
import { DoubleSide } from 'three';

export default function MouseMesh(props) {
  const mesh = useRef();
  //   const font = new THREE.FontLoader().parse(luckiest);

  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    hover
      ? ((mesh.current.rotation.x += 0.001), (mesh.current.rotation.y += Math.sin(0.01)))
      : null;
  });

  const mousey = useLoader(THREE.TextureLoader, mouse1);

  return (
    <>
      <PivotControls>
        <mesh
          {...props}
          ref={mesh}
          scale={active ? [5, 5, 5] : [4, 4, 4]}
          onClick={(e) => setActive(!active)}
          onPointerOver={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
        >
          <texture attach="map" onUpdate={(self) => (self.needsUpdate = true)} />
          <boxGeometry attach="geometry" />
          <meshStandardMaterial attach="material" map={mousey} toneMapped={false} />
          <Center position-y={2.05}>
            <Text3D
              font={'./fFredoka.json'}
              bevelEnabled={true}
              bevelThickness={0.001}
              curveSegments={24}
              size={0.3}
              //   height={0.8}
              bevelSegments={30}
              // bevelSize={0.01}
            >
              a cat
              <meshNormalMaterial />
            </Text3D>
          </Center>
          <Center position-y={1.65}>
            <Text3D
              font={'./fFredoka.json'}
              bevelEnabled={true}
              bevelThickness={0.001}
              curveSegments={24}
              size={0.5}
              //   height={0.8}
              bevelSegments={30}
              // bevelSize={0.01}
            >
              named
              <meshNormalMaterial />
            </Text3D>
          </Center>
          <Center position-y={1}>
            <Text3D
              font={'./fFredoka.json'}
              bevelEnabled={true}
              bevelThickness={0.06}
              curveSegments={24}
              size={0.7}
              //   height={0.8}
              bevelSegments={30}
              // bevelSize={0.01}
            >
              Mouse
              <meshNormalMaterial />
            </Text3D>
          </Center>
        </mesh>
      </PivotControls>
    </>
  );
}
