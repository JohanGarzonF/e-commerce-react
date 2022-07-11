import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { getAllProductCart, setCartGlobal } from '../../store/slices/cart.slice';
import getConfig from '../../utils/getConfig'
import CartInfo from './CartInfo'
import './Style/cartScreen.css'

const CartScreen = () => {
  
  const cart = useSelector(state => state.cartSlice)
  const dispatch = useDispatch()
  
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
        .then(res => {
          console.log(res.data)
        })
        .catch(err => console.log(err))
  }
  console.log(cart);


  let totalPrice = 0
  if(cart) {

    const cb = (acc, cv) => {
      console.log(cv)
      return acc + (cv.price * cv.productsInCart.quantity)
    }

    totalPrice = cart.reduce(cb, 0)
  }
  

  return (
    <article className='cart-product'>
      <h2 className="cart-product__title">My Cart</h2>
      <div className='cart-info__container'>
        {
          cart?.map(productCart => (
            <CartInfo
              key={productCart.id}
              productCart={productCart}
            />
          ))
        }
      </div>
      {
        cart ?
          <h2 className='cart-total'>
            <span className='cart-product__label'>Total: </span>
            <span className='cart-product__total'>${totalPrice}</span>
          </h2>
        :
          <h2 className='is-empty'>Cart is empty</h2>
      }
      <button 
        className='cart-product__btn-purchase'
        onClick={postPurchase}
      >Confirm Purchase</button>
    </article>
  )
}

export default CartScreen