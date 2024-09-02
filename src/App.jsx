import React from 'react'
import Background from './components/Background'
import ForeGround from './components/ForeGround'

const App = () => {
  return (
    <div className='w-scree relative min-h-screen  bg-zinc-800' >
      <Background/>
      <ForeGround/>
    </div>
  )
}

export default App
