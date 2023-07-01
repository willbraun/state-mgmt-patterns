import { useState } from 'react'

interface Props {
  isToggled: boolean
  handleClick: () => void
}

export const Parent: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false)

  const handleClick = () => {
    setIsToggled(!isToggled)
  }

  return <Child isToggled={isToggled} handleClick={handleClick} />
}

export const Child: React.FC<Props> = ({ isToggled, handleClick }) => {
  return <Grandchild isToggled={isToggled} handleClick={handleClick} />
}

export const Grandchild: React.FC<Props> = ({ isToggled, handleClick }) => {
  return (
    <>
      <p>{isToggled ? 'ON' : 'OFF'}</p>
      <button onClick={handleClick}>Toggle with Prop Drilling</button>
    </>
  )
}
