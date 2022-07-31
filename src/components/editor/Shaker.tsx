import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Cube } from '.'

export const Shaker = () => {
  return (
    <Canvas
      camera={{ position: [5, 5, 5] }}
      style={{
        backgroundColor: '#111a21',
        width: '100vw',
        height: '100vh',
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Cube />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}
