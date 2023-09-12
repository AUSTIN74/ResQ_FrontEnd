import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogIn from './components/LogIn/LogIn'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'

function App() {

  return (
    <>
    <Header />
      <LogIn />
      <SignUp />
    </>
  )
}

export default App
