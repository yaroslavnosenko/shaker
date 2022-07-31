import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import { Cube } from '.'
import { useEditorState } from '../../hooks'
import { __mockFigure } from '../../__mock'

export const Shaker = () => {
  const { cubes } = useEditorState()
  return (
    <Canvas
      camera={{ position: [5, 5, 5] }}
      style={{
        backgroundColor: '#2d3436',
        width: '100vw',
        height: '100vh',
      }}
    >
      <ambientLight intensity={0.25} />
      <pointLight castShadow intensity={0.7} position={[100, 100, 100]} />
      <Suspense fallback={null}>
        {cubes.map((cubeProps) => (
          <Cube key={cubeProps.ID} {...cubeProps} />
        ))}
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}
