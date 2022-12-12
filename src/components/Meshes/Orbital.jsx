/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from 'react';

export default function Orbital() {
  const sphereRef = useRef();

  useEffect(() => {
    // const clock = new THREE.Clock();
    // const time = clock.getElapsedTime();
    // sphereRef.position.x = Math.cos(time * 10) * 5;
    // sphereRef.position.y = Math.cos(time * 7) * 3;
    // sphereRef.position.z = Math.cos(time * 8) * 4;
  });

  return (
    <>
      <mesh ref={sphereRef} scale={[2, 2, 2]}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshLambertMaterial />
      </mesh>
    </>
  );
}
