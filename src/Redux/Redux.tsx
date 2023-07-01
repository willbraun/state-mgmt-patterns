import React from 'react'
import { useSelector, useDispatch, Provider } from 'react-redux'
import store, { RootState } from './store'
import { toggle } from './toggleSlice'

export const Parent: React.FC = () => {
  return (
    <Provider store={store}>
      <Child />
    </Provider>
  )
}

export const Child: React.FC = () => {
  return <Grandchild />
}

export const Grandchild: React.FC = () => {
  const isToggled = useSelector((state: RootState) => state.toggleSlice.isToggled)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(toggle())
  }

  return (
    <>
      <p>{isToggled ? 'ON' : 'OFF'}</p>
      <button onClick={handleClick}>Toggle with Redux</button>
    </>
  )
}

export default Parent
