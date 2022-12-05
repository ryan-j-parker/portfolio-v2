/* eslint-disable react/no-unknown-property */
import { useTexture } from '@react-three/drei';
import { useRef } from 'react';
import { DoubleSide } from 'three';

export default function LavaField() {
  const planeRef = useRef();

  const props = useTexture({
    map: '/lava/color.jpg',
    displacementMap: 'lava/disp.png',
    aoMap: 'lava/ao.jpg',
    roughnessMap: 'lava/rough.jpg',
    normalMap: 'lava/norm.jpg',
    alphaMap: 'lava/mask.jpg',
  });

  return (
    <>
      <mesh
        receiveShadow
        rotation-x={Math.PI * -0.5}
        ref={planeRef}
        scale={[5, 5, 5]}
        position={[-49.95, -20, -49.95]}
      >
        <planeGeometry args={[20, 20, 10, 20]} />
        <meshStandardMaterial
          {...props}
          attach="material"
          displacementScale={1.6}
          side={DoubleSide}
        />
      </mesh>
      <mesh
        receiveShadow
        rotation-x={Math.PI * -0.5}
        ref={planeRef}
        scale={[5, 5, 5]}
        position={[49.95, -20, -49.95]}
      >
        <planeGeometry args={[20, 20, 10, 20]} />
        <meshStandardMaterial
          {...props}
          attach="material"
          displacementScale={1.6}
          side={DoubleSide}
        />
      </mesh>
      <mesh
        receiveShadow
        rotation-x={Math.PI * -0.5}
        ref={planeRef}
        scale={[5, 5, 5]}
        position={[-49.95, -20, 49.95]}
      >
        <planeGeometry args={[20, 20, 10, 20]} />
        <meshStandardMaterial
          {...props}
          attach="material"
          displacementScale={1.6}
          side={DoubleSide}
        />
      </mesh>
      <mesh
        receiveShadow
        rotation-x={Math.PI * -0.5}
        ref={planeRef}
        scale={[5, 5, 5]}
        position={[49.95, -20, 49.95]}
      >
        <planeGeometry args={[20, 20, 10, 20]} />
        <meshStandardMaterial
          {...props}
          attach="material"
          displacementScale={1.6}
          side={DoubleSide}
        />
      </mesh>
    </>
  );
}
