import React from 'react'
import Banner from "../components/banner"
import Header from '@/components/Header'
import Footer from "@/components/Footer"
import Projects from "@/app/Project/page"


const Home = () => {
  return (
<div style={{ backgroundColor: '#111828' }}>      <Header />
      <Banner />
      <Projects/>
      <Footer />
    </div>
  )
}

export default Home
