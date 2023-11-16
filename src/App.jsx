// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sanciones from './components/Sanciones'
import Tarifas from './components/Tarifas'
import reglamento from "/reglamento.jpg"
import tarifas from "/tarifas.jpg"
import "./App.css"

function App() {

  return (
    <>
      <Sanciones></Sanciones>
      <hr></hr>
      <Tarifas></Tarifas>
      <hr></hr>
      <img src={reglamento} className='foto'/>
      <hr></hr>
      <img src={tarifas} className='foto'/>
    </>
  )
}

export default App
