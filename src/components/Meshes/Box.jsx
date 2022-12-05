/* eslint-disable react/no-unknown-property */
import { Text, TransformControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { DoubleSide } from 'three';


export default function Box() {
  //   const material = new THREE.MeshLambertMaterial({ color: '#affecd' });
  //   const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y += delta;
  });

  return (
    <>
      <mesh ref={ref} scale={[1, 1, 1]}>
        <boxGeometry />
        <meshNormalMaterial color="0xff34da" />
      </mesh>
      <TransformControls object={ref} />
      <Text scale={[2, 2, 2]}>
        Here is some text attached to the box!
        <meshNormalMaterial side={DoubleSide} />
      </Text>
    </>
  );
}
