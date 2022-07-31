import { useRef, useState } from 'react'
import { CubeProps } from '../../types'
import { changeBrightness } from '../../utils'

const BASIC_SIZE: number[] = [1, 1, 1]
const BASIC_OPACITY: number = 1

export const Cube = (props: CubeProps) => {
  const ref = useRef()
  const [side, setSide] = useState<number | null>(null)
  const { position, color, size = BASIC_SIZE, opacity = BASIC_OPACITY } = props
  return (
    <mesh
      castShadow
      onPointerMove={(event: any) => {
        event.stopPropagation()
        const side: number = Math.floor(event.faceIndex / 2)
        setSide(side)
      }}
      onPointerLeave={() => setSide(null)}
      ref={ref}
      position={position}
    >
      <boxGeometry args={size} />
      {[...Array(6)].map((_, index) => (
        <meshBasicMaterial
          key={index}
          attach={'material-' + index}
          color={index === side ? changeBrightness(color, 20) : color}
          opacity={opacity}
          transparent
        />
      ))}
    </mesh>
  )
}
