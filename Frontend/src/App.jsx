import { useState } from 'react'
import './App.css'
import About from './Components/About'
import Main from './Components/Main'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'


import Navbar from './Components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
     <Main></Main>
     <About></About>
     <Skills></Skills>
     <Projects></Projects>
     <Contact></Contact>
    </>
  )
}

export default App
