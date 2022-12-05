/* eslint-disable react/no-unknown-property */
import { useEffect, useMemo, useRef } from 'react';
import { DoubleSide } from 'three';

export default function CustomObject() {
  const verticesCount = 10 * 3;
  const geometryRef = useRef();

  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3);

    for (let i = 0; i < verticesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }
    return positions;
  }, []);

  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, []);

  return (
    <mesh position={[-5, 0, 0]}>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshNormalMaterial color="red" side={DoubleSide} />
    </mesh>
  );
}
