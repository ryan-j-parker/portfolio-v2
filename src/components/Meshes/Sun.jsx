/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';


export default function Sun() {
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
