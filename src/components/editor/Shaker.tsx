import { useToken } from '@chakra-ui/react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Cube, Toolbar, Properties } from '.'
import { useEditorState } from '../../hooks'

export const Scene = () => {
  const [color] = useToken('colors', ['gray.50'])
  const { cubes } = useEditorState()
  return (
    <Canvas
      camera={{ position: [5, 5, 5] }}
      style={{
        backgroundColor: color,
        width: '100vw',
        height: '100vh',
      }}
    >
      <ambientLight intensity={0.25} />
      <pointLight castShadow intensity={1} position={[10, 10, 10]} />
      <Suspense fallback={null}>
        {cubes.map((cubeProps) => (
          <Cube key={cubeProps.ID} {...cubeProps} />
        ))}
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

export const Shaker = () => (
  <>
    <Scene />
    <Toolbar />
    <Properties />
  </>
)
