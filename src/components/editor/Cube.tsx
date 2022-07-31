import { useRef, useState } from 'react'
import { useEditorState } from '../../hooks'
import { CubeProps } from '../../types'
import { changeBrightness } from '../../utils'

const BASIC_SIZE: number[] = [1, 1, 1]
const BASIC_OPACITY: number = 1

export const Cube = (props: CubeProps) => {
  const { position, color, size = BASIC_SIZE, opacity = BASIC_OPACITY } = props
  const ref = useRef()
  const [side, setSide] = useState<number | null>(null)
  const { addCube } = useEditorState()

  const onClick = (side: number) => {
    const { x, y, z } = (ref as any).current.position
    const newPos = [x, y, z]
    const newCube = { ID: 'cube1', position: newPos, color: 'red' }
    if (side === 0) newCube.position[0]++
    if (side === 2) newCube.position[1]++
    if (side === 4) newCube.position[2]++

    if (side === 1) newCube.position[0]--
    if (side === 3) newCube.position[1]--
    if (side === 5) newCube.position[2]--

    addCube(newCube)
  }

  return (
    <mesh
      castShadow
      onPointerMove={(event: any) => {
        event.stopPropagation()
        const side: number = Math.floor(event.faceIndex / 2)
        setSide(side)
      }}
      onPointerLeave={() => setSide(null)}
      onClick={(event: any) => {
        event.stopPropagation()
        const side: number = Math.floor(event.faceIndex / 2)
        onClick(side)
      }}
      ref={ref}
      position={position}
    >
      <boxGeometry args={size} />
      {[...Array(6)].map((_, index) => (
        <meshStandardMaterial
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
