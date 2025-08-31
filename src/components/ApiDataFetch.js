import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import apiData from './ApiDataFetch.module.css'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hero from './Hero'
import { ADD } from '../redux/actions/action'
import { NavLink } from 'react-router-dom';
const ApiDataFetch = ({ search }) => {
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            let url = "https://dummyjson.com/products";
            if (search && search.trim() !== "") {
                url = `https://dummyjson.com/products/search?q=${search}`;
            }

            try {
                let req = await fetch(url)
                let res = await req.json()
                console.log(res.products)
                setData(res.products)
            } catch (err) {
                console.log("somthing error", err)
            }
            //     let url = "https://dummyjson.com/products";
            // if (search && search.trim() !== "") {
            //   url = `https://dummyjson.com/products/search?q=${search}`;
            // }
        }

        fetchData()

    }, [search])
    // const getdata = useSelector((data) => data.cardsreducer.cards || [])

    const getData = useSelector((data) => data.cardsreducer)
    console.log(getData)
    const send = (e) => {
        dispatch(ADD(e))
        toast(`Add Product`, {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <Hero />
            <div className={apiData.container}>
                {
                    data.length > 0 ? data.map((items, index) => (
                        <div key={index} className={apiData.fetchArraycontainer}>
                            <img className={apiData.fetchImg} src={items.images[0]} alt="" />
                            <div className={apiData.productDetails}>

                                <h5> {items.title}</h5>
                                <p><strong>Peice:</strong> {items.price }</p>
                                {/* <p className={apiData.paraDiv}>{items.description}</p> */}
                            </div>
                            <div className={apiData.btnContainer}>

                                <button onClick={() => send(items)} className={apiData.addBtn}>Add Carts</button>
                                <NavLink to={`/cardsDel/${items.id}`}>
                                    <button className={apiData.addBtn}>View Details</button>
                                </NavLink>
                            </div>
                        </div>
                    )) : "Data Not Found..."
                }
            </div>
        </>
    )
}

export default ApiDataFetch
