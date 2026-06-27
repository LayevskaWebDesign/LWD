import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useRef } from 'react'
import type { Mesh } from 'three'

function Blob() {
  const ref = useRef<Mesh>(null)
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.18
  })
  return (
    <Float speed={1.3} rotationIntensity={0.5} floatIntensity={1.1}>
      <mesh ref={ref} scale={1.35}>
        <icosahedronGeometry args={[1, 5]} />
        <MeshDistortMaterial color="#E84C3D" roughness={0.2} metalness={0.55} distort={0.35} speed={1.5} />
      </mesh>
    </Float>
  )
}

// Escena 3D del hero (se carga de forma diferida y solo en pantallas capaces).
export default function Scene3D() {
  return (
    <Canvas dpr={[1, 1.8]} camera={{ position: [0, 0, 4.2], fov: 42 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 5]} intensity={1.5} />
      <directionalLight position={[-4, -2, -3]} intensity={0.8} color="#C9A9DD" />
      <Blob />
      <EffectComposer>
        <Bloom intensity={0.65} luminanceThreshold={0.25} luminanceSmoothing={0.9} mipmapBlur />
      </EffectComposer>
    </Canvas>
  )
}
