import create from 'zustand'
import { CubeProps } from '../types'

const INITIAL_CUBE: CubeProps = {
  ID: 'cube',
  position: [0, 0, 0],
  color: '#00cec9',
}

interface EditorState {
  cubes: CubeProps[]
  addCube: (cube: CubeProps) => void
}

export const useEditorState = create<EditorState>((set) => ({
  cubes: [INITIAL_CUBE],
  addCube: (cube: CubeProps) => {
    set((old) => ({
      cubes: [...old.cubes, cube],
    }))
  },
}))
