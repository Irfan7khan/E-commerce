import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import idStyle from './Product.module.css'
const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    useEffect(() => {
        const productId = async () => {
            try {

                let pro = await fetch(`https://dummyjson.com/products/${id}`)
                let rec = await pro.json()
                console.log(rec)
                setProduct(rec)
            } catch (err) {
                console.log("error", err)
            }
        }
        productId()
    }, [id])
    console.log(id)
    return (
        <div className={idStyle.IdContainer}>
            {
                product ? (
                   
                         <div  className={idStyle.fetchIdcontainer}>
                            <img className={idStyle.fetchImg} src={product.images[0]} alt="" />
                            <div className={idStyle.productDetails}>

                                <h4> {product.title}</h4>
                                <p>{product.description}</p>
                            </div>
                            </div>
                
                ) : "id not found"
            }
        </div>
    )
}

export default ProductDetail;
