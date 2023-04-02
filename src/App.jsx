import React from "react"
import { useState } from "react"
import Info from "../components/Info.jsx"
import About from "../components/About.jsx"
import Buttons from "../components/Buttons"
import Footer from "../components/Footer.jsx"

export default function App() {
  return (
    <div className="container">
        <Info />
        <div className="main">
          <About/>
          <Buttons />
        </div>
        <Footer />
    </div>
  )
}
