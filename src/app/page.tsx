"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import LatestProducts from "./components/LatestProducts";
import Offer from "./components/Offers";
import Unique from "./components/Unique";
import TrendingProducts from "./components/TrendingProducts";
import Discount from "./components/Discount";
import TopCategories from "./components/TopCategories";
import Newsletter from "./components/NewsLetter";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Features/>
      <LatestProducts/>
      <Offer/>
      <Unique/>
      <TrendingProducts/>
      <Discount/>
      <TopCategories/>
      <Newsletter/>
      <BlogSection/>
      <Footer/>
    </div>
  )
}

export default Homepage