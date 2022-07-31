import create from 'zustand'
import { CubeProps } from '../types'
import { nanoid } from 'nanoid'

const INITIAL_CUBE: CubeProps = {
  ID: nanoid(5),
  position: [0, 0, 0],
  color: '#00cec9',
}

const readStorage = (): CubeProps[] | null => {
  const cubes = window.localStorage.getItem('cube')
  return cubes === null ? cubes : (JSON.parse(cubes) as CubeProps[])
}

const saveStorage = (cubes: CubeProps[]): void =>
  window.localStorage.setItem('cube', JSON.stringify(cubes))

interface EditorState {
  cubes: CubeProps[]
  addCube: (cube: CubeProps) => void
  saveCubes: () => void
}

export const useEditorState = create<EditorState>((set) => ({
  cubes: readStorage() || [INITIAL_CUBE],
  addCube: (cube: CubeProps) =>
    set((old) => ({
      cubes: [...old.cubes, cube],
    })),
  saveCubes: () =>
    set((state) => {
      saveStorage(state.cubes)
      return {}
    }),
}))
