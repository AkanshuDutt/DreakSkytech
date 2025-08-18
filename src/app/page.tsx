import React from 'react'
import Banner from "../components/banner"
import Header from '@/components/Header'
import Footer from "@/components/Footer"
 import TechSolutionsPage from './TechSolutionsPage/page';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      {/* <About/> */}
      <TechSolutionsPage/>
      <Footer />
    </div>
  )
}

export default Home

