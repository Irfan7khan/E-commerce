import React, { useState } from 'react'
import navStyle from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = ({ setSearch }) => {
  const [inputData, setInputData] = useState("")
  const changeHandle = (e) => {
    setInputData(e.target.value)
  }
  const handleClick = () => {
    setSearch(inputData)
  }
  const getdata = useSelector((data) => data.cardsreducer.cards || [])


  return (
    <div className={navStyle.container}>
      <nav className={navStyle.navContainer}>

        <div className={navStyle.logo}> <h2>Unique Products</h2></div>
        <div className={navStyle.inputField}>
          <div className={navStyle.inputDiv}>

          <input className={navStyle.navInput} type="text" placeholder='Sarch Products' onChange={changeHandle} />
          <button className={navStyle.NavBtn} onClick={handleClick}><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        <NavLink to={'/cards'} className={navStyle.cartIcons}>
          <button type="button" className="btn btn-primary position-relative">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {getdata.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
