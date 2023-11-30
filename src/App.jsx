import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './student'
import Class from './Class'
import Shop from './Shop'

function App() {

  return (
    <>
      {/* <Student name="John Doe" age={15} grade={10} email="n@n.com" /> */}
      {/* <Class grade={10} students={["John Doe", "Jane Doe", "John Smith"]} /> */}

      <Shop title="My Shop" products={[
        { id: 1, title: "Product 1", price: 100, quantity: 10 },
        { id: 2, title: "Product 2", price: 200, quantity: 20 },
        { id: 3, title: "Product 3", price: 300, quantity: 30 },
      ]} />
    </>
  )
}

export default App
