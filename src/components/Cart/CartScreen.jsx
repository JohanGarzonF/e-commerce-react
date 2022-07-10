import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import getConfig from '../../utils/getConfig'
import CartInfo from './CartInfo'
import './Style/cartScreen.css'

const CartScreen = () => {

  const cart = useSelector(state => state.cartSlice)

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
      <h2 className="cart-product__title">My Cart</h2>
      {
        cart?.map(productCart => (
          <CartInfo
            key={productCart.id}
            productCart={productCart}
          />
        ))
      }
      <button onClick={postPurchase}>Confirm Purchase</button>
    </article>
  )
}

export default CartScreen