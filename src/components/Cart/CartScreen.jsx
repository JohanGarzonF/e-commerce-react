import axios from 'axios'
import React, { useEffect } from 'react'
import getConfig from '../../utils/getConfig'
import './Style/cartScreen.css'

const CartScreen = () => {

  const postPurchase = () => {

    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

    const objPurchase = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }
    axios.post(URL, objPurchase, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <article className='cart-product'>
      <h2 className="cart-product__title">Carrito de Compras</h2>
      <button onClick={postPurchase}>Post Purchase</button>
    </article>
  )
}

export default CartScreen