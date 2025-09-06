import React from 'react'
import footerStyle from './Footer.module.css'
const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className={footerStyle.fooertDiv} >
      <div className={footerStyle.footerContainer}>
        <div className={footerStyle.contactDiv}>
          <div className={footerStyle.location}>
<i class="fa-solid fa-location-dot"></i>
          <p>
            New Hiader Ganj Lucknow Campwell Road <br/>Roshan Nagar
          </p>
          </div>
          <div className={footerStyle.phone}>
<i class="fa-solid fa-phone"></i>
           <a href="tel:9696255752">9696255752</a>
<a href="email:ik854997@gmail.com">ik854997@gmail.com</a>
            
          </div>

        </div>
        <div className={footerStyle.contactDiv}>
          <strong>
            Foood_Recipe ©. All Right Reserved
            Build with React.Jsnpm start
          </strong>
          <a href="tel">9696255752</a>

        </div>
        <div className={footerStyle.contactDiv}>
          <strong onClick={scrollTop}>
            <h6>TOP</h6>
          </strong>


        </div>
      </div>
    </div>
  )
}

export default Footer
