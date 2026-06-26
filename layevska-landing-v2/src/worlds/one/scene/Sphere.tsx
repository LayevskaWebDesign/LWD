import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

/* ============================================================
   MUNDO I · ESFERA CENTRAL
   ============================================================
   Material físico premium con iridiscencia, clearcoat y
   reflexión del environment map (el cosmos vive ADENTRO de
   la esfera). Respiración + rotación lenta orgánica.
   ============================================================ */

interface SphereProps {
  position?: [number, number, number];
}

export function Sphere({ position = [0, 0, 0] }: SphereProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const t = clock.getElapsedTime();
    // Rotación lenta — la esfera está "viva"
    mesh.rotation.y = t * 0.15;
    mesh.rotation.x = Math.sin(t * 0.22) * 0.08;
    // Respiración suave: scale 0.97 ↔ 1.03 cada ~5s
    const breath = 1 + Math.sin(t * (Math.PI * 2 / 5)) * 0.03;
    mesh.scale.setScalar(breath);
  });

  return (
    <mesh ref={meshRef} position={position}>
      {/* SphereGeometry 96x64 → completamente suave, sin facetas visibles */}
      <sphereGeometry args={[1.4, 96, 64]} />
      <meshPhysicalMaterial
        color="#C9A961"
        metalness={0.85}
        roughness={0.18}
        clearcoat={1}
        clearcoatRoughness={0.05}
        iridescence={0.6}
        iridescenceIOR={1.7}
        iridescenceThicknessRange={[100, 800]}
        envMapIntensity={1.6}
        emissive="#C9A961"
        emissiveIntensity={0.08}
      />
    </mesh>
  );
}
