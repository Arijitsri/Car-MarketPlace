import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchedCar from './components/MostSearchedCar'

function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <Category />
        <MostSearchedCar/>
    </div>
  )
}

export default Home