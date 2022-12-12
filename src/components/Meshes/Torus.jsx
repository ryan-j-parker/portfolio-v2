/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';

export default function Torus() {
  const torusRef = useRef();

  // useEffect((state, delta) => {
  //   torusRef.current.rotation.y += delta;
  // });

  return (
    <>
      <mesh
        ref={torusRef}
        // position={[30, 3, -5]}
        // scale={[1]}
      >
        <torusGeometry args={[18, 4, 40, 140]} />
        <meshLambertMaterial />
      </mesh>
    </>
  );
}
