/* eslint-disable react/no-unknown-property */
import { Html, PivotControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Sphere() {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.z += delta * 0.75;
  });

  return (
    <>
      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        axisColors={['#986fad', '#ffda78', '#adf932']}
        fixed={true}
        scale={100}
      >
        <mesh castShadow ref={ref} scale={[1, 1, 1]} position={[0, -1, 2]}>
          <sphereGeometry />
          <meshLambertMaterial color="0xfda23c" />
          <Html
            position={[1, 1, 0]}
            wrapperClass="label"
            center
            distanceFactor={6}
            occlude={ref}
          >
            I&apos;m a string in orbit around a sphere
          </Html>
        </mesh>
      </PivotControls>
    </>
  );
}
