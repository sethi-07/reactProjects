import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div>
      <h1>Sethi</h1>
      <div className='parent'>
      <Card user = 'Sethi' age = {18}/>
      <Card user = 'Lallu' />
      </div>
      
    </div>
  )
}

export default App
