import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import { Cube } from '.'
import { CubeProps } from '../../types'
import { __mockFigure } from '../../__mock'

export const Shaker = () => {
  const [cubes, setCubes] = useState<CubeProps[]>(__mockFigure)
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
        {cubes.map((cubeProps) => (
          <Cube key={cubeProps.ID} {...cubeProps} />
        ))}
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}
