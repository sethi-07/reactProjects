import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <div className = "parent">
        <div className='cards'>
        <Card name = "Amazon" day = {6} role = 'Software' 
        att = 'Full time' salary = '$120' 
        loc = 'Delhi, India'/>
        <Card name = "Amazon" day = {6} role = 'Software' 
        att = 'Full time' salary = '$120' 
        loc = 'Delhi, India'/>
        <Card name = "Amazon" day = {6} role = 'Software' 
        att = 'Full time' salary = '$120' 
        loc = 'Delhi, India'/>
        <Card name = "Amazon" day = {6} role = 'Software' 
        att = 'Full time' salary = '$120' 
        loc = 'Delhi, India'/>
        <Card name = "Amazon" day = {6} role = 'Software' 
        att = 'Full time' salary = '$120' 
        loc = 'Delhi, India'/>
        
        </div>


      </div>
      
    </div>
  )
}

export default App
