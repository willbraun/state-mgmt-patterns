import { createContext, useState, useContext } from 'react'

interface ToggleContextProps {
  isToggled: boolean
  handleClick: () => void
}

const ToggleContext = createContext<ToggleContextProps>({
  isToggled: false,
  handleClick: () => ({}),
})

export const Parent: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false)

  const handleClick = () => {
    setIsToggled(!isToggled)
  }

  return (
    <ToggleContext.Provider value={{ isToggled, handleClick }}>
      <Child />
    </ToggleContext.Provider>
  )
}

export const Child: React.FC = () => {
  return <Grandchild />
}

export const Grandchild: React.FC = () => {
  const { isToggled, handleClick } = useContext(ToggleContext)

  return (
    <>
      <p>{isToggled ? 'ON' : 'OFF'}</p>
      <button onClick={handleClick}>Toggle with Context</button>
    </>
  )
}
