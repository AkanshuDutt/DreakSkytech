import React from 'react'
import Banner from "../components/banner"
import Header from '@/components/Header'
import Footer from "@/components/Footer"
import { Technology } from '@/components/Technology'

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <Banner/>
 <Technology/>
      </div>
      <Footer />
    </div>
  )
}

export default Home
