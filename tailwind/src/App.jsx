import React from 'react'
import Section1 from './components/Section1/Section1'
const App = () => {

  const users = [
    {
      img: "https://images.unsplash.com/photo-1762422411610-e61cb79832ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=685",
      intro: "",
      tag: "Submit"
    },
    {
      img: "https://images.unsplash.com/photo-1755611532271-4ac09b51f2bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=872",
      intro: "",
      tag: "Visit"
    },
    {
      img: "https://images.unsplash.com/photo-1755425739740-d91f37582b42?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      intro: "",
      tag: "View Link"
    },
    {
      img: "https://images.unsplash.com/photo-1755425739740-d91f37582b42?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      intro: "",
      tag: "View Link"
    }
  ]
  return (
    <div>
      <Section1 users = {users}/>
    </div>
  )
}

export default App
