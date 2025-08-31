
import React from 'react'
import heroStyle from './Hero.module.css'
import HeroImg from '../Images/online-shopping-shopping-cart-placed-alongside-notebook-blue.jpg'

const Hero = () => {
  return (
    <div className={heroStyle.container}>
      <div className={heroStyle.heroImg}>
        <img src={HeroImg} alt="" />

      </div>
      <div className={heroStyle.herodiscription}>

        <h2 >"Style your life with products that define you."</h2>
        <p className={heroStyle.heroPara}>"Discover a collection of unique products crafted to match every lifestyle.
          From daily essentials to exclusive items, find everything in one place.
          Enjoy seamless shopping with unbeatable deals and trusted quality.
          Your satisfaction is our priority, with products handpicked just for you.
          Start exploring today — because your perfect product is waiting here!"</p>
      </div>
    </div>
  )
}

export default Hero





