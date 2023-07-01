import './App.css'
import { Parent as PropDrillingParent } from './PropDrilling'
import { Parent as ContextParent } from './Context'
import { Parent as ZustandParent } from './Zustand'
import { Parent as ReduxParent } from './Redux/Redux'

function App() {

  return (
    <>
      <PropDrillingParent />
      <ContextParent />
      <ZustandParent />
      <ReduxParent />
    </>
  )
}

export default App
