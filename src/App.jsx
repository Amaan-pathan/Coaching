import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Achievements from './components/Achievements'
import Faculty from './components/Faculty'
import Courses from './components/Courses'
import ImageSlider from './components/ImageSlider'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Achievements />
      <ImageSlider />
      <Faculty />
      <Courses />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
