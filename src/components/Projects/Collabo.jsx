/* eslint-disable react/no-unknown-property */
import { useLoader, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

import collabo from '../../ProjectImages/sq-collabo.png';
// import luckiest from '../../Luckiest Guy_Regular.json';
import { Center, PivotControls, Text, Text3D } from '@react-three/drei';
import { DoubleSide } from 'three';

export default function Collabo(props) {
  const mesh = useRef();
  //   const font = new THREE.FontLoader().parse(luckiest);

  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    hover
      ? ((mesh.current.rotation.x += 0.001), (mesh.current.rotation.y += Math.sin(0.01)))
      : null;
  });

  const sqCOL = useLoader(THREE.TextureLoader, collabo);

  return (
    <>
      <PivotControls>
        <mesh
          {...props}
          ref={mesh}
          scale={active ? [5, 5, 0.5] : [4, 4, 0.5]}
          onClick={(e) => setActive(!active)}
          onPointerOver={(e) => setHover(true)}
          onPointerOut={(e) => setHover(false)}
        >
          <texture attach="map" onUpdate={(self) => (self.needsUpdate = true)} />
          <boxGeometry attach="geometry" />
          <meshStandardMaterial attach="material" map={sqCOL} toneMapped={false} />
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
              collabo
              <meshNormalMaterial />
            </Text3D>
          </Center>
        </mesh>
      </PivotControls>
    </>
  );
}
