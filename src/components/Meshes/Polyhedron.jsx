/* eslint-disable react/no-unknown-property */
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

export default function Polyhedron({ polyhedron, color, ...props }) {
  const ref = useRef();
  const [count, setCount] = useState(2);

  const [hovered, setHovered] = useState(false);

  console.log(polyhedron[count].uuid);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => {
        setCount((count + 1) % 3);
      }}
      onPointerOver={(e) => setHovered(true)}
      onPointerOut={(e) => setHovered(false)}
      geometry={polyhedron[count]}
      scale={hovered ? [14, 14, 14] : [1, 1, 1]}
      position-y={hovered ? 3 : 0}
    >
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
}
