import React from 'react'
import { create } from 'zustand'

interface ToggleState {
  isToggled: boolean
  handleClick: () => void
}

const useToggleStore = create<ToggleState>(set => ({
  isToggled: false,
  handleClick: () => set(state => ({ isToggled: !state.isToggled })),
}))

export const Parent: React.FC = () => {
  return <Child />
}

export const Child: React.FC = () => {
  return <Grandchild />
}

export const Grandchild: React.FC = () => {
  const { isToggled, handleClick } = useToggleStore()

  return (
    <>
      <p>{isToggled ? 'ON' : 'OFF'}</p>
      <button onClick={handleClick}>Toggle with Zustand</button>
    </>
  )
}
