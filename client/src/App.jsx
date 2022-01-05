import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Navbar , Welcome , Footer, Transactions, Services} from './components'

function App() {


  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />

    </div>
  )
}

export default App