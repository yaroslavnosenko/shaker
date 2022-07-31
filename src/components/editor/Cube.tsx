import { useRef } from 'react'

export const Cube = () => {
  const ref = useRef()
  return (
    <mesh castShadow ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      {[...Array(6)].map((_, index) => (
        <meshBasicMaterial
          attach={'material-' + index}
          color={index === 1 ? 'blue' : 'red'}
          opacity={1}
          transparent
        />
      ))}
    </mesh>
  )
}
