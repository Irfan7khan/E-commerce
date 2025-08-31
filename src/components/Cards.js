import React from 'react'
import { useSelector } from 'react-redux'
import apiData from './Cards.module.css'


const Cards = () => {
  const getdata = useSelector((data) => data.cardsreducer.cards)
  console.log(getdata)

  return (
    <>

      <div className={apiData.CardsContainer}>
        <h2>Product Details</h2>
        {
           getdata.length > 0 ? getdata.map((product, index) => (
            <div key={index} className={apiData.cardscontainer}>
              <div className={apiData.imgDiv}>
                <img className={apiData.cardsImg} src={product.images[0]} alt="" />
              </div>

              <div className={apiData.productDetails}>
                <table>
                  <thead>

                    <tr>
                      <td>

                        <h5> {product.title} </h5>
                        <p> <strong>Price :</strong>₹ {product.price} </p>
                        <p><strong>Rating :</strong> {product.rating} </p>
                        <p> {product.availabilityStatus
                        }</p>
                      </td>
                      <td>
                        <p><strong>Discount</strong> {product.discountPercentage}%</p>
                      </td>
                    </tr>
                  </thead>

                </table>
              </div>

            </div>
          )) : "ADD Cards Empty"
        }
      </div>
    </>
  )
}

export default Cards;
