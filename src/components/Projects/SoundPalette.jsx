/* eslint-disable react/no-unknown-property */
import { Center, Text3D } from '@react-three/drei';
import { useLoader, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

import soundPalette from '../../ProjectImages/sq-sound-palette.png';

export default function SoundPalette(props) {
  const mesh = useRef();

  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    hover
      ? ((mesh.current.rotation.x += 0.001), (mesh.current.rotation.y += Math.sin(0.01)))
      : null;
  });

  const sqSP = useLoader(THREE.TextureLoader, soundPalette);

  return (
    <>
      <mesh
        {...props}
        ref={mesh}
        scale={active ? [5, 5, 0.5] : [4, 4, 0.5]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        title="Sound Palette: a synesthetic sound visualization 3D experience"
      >
        <texture attach="map" onUpdate={(self) => (self.needsUpdate = true)} />
        <boxGeometry attach="geometry" />
        <meshStandardMaterial attach="material" map={sqSP} toneMapped={false} />
        <Center position={[0, 1.5, 0]}>
          <Text3D
            font={'./fFredoka.json'}
            bevelEnabled={true}
            bevelThickness={0.06}
            curveSegments={24}
            size={0.5}
            height={0.8}
            bevelSegments={30}
            // bevelSize={0.01}
          >
            sound
            <meshNormalMaterial />
          </Text3D>
        </Center>
        <Center position-y={1}>
          <Text3D
            font={'./fFredoka.json'}
            bevelEnabled={true}
            bevelThickness={0.06}
            curveSegments={24}
            size={0.5}
            height={0.8}
            bevelSegments={30}
            // bevelSize={0.01}
          >
            palette
            <meshNormalMaterial />
          </Text3D>
        </Center>
        ;
      </mesh>
    </>
  );
}
