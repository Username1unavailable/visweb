import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';

const Particles = () => {
  const points = useRef();

  // Increased particle count and spread
  const particlesCount = 8000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;     // Increased spread on x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // Increased spread on y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // Increased spread on z
    }

    return positions;
  }, [particlesCount]);

  useFrame((state, delta) => {
    points.current.rotation.y += delta * 0.05; // Slowed down rotation
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}                // Increased particle size
        color="#ffffff"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}              // Adjusted opacity
      />
    </points>
  );
};

export default Particles;
