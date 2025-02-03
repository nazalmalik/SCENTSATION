import React from 'react'
import Swiper from '../components/Swiper'
import Categories from '../components/Categories';
import Bestsellers from '../components/Bestseller';
import InformationSection from '../components/Information';
import BarndsFeature from '../components/BrandsFeature';
const Home = () => {
  return (
    <div>
        <Swiper />
        <Categories />
        <Bestsellers />
        <BarndsFeature />
        <InformationSection />

    </div>
  )
}

export default Home