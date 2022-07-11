import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux';
import { getAllProductCart } from '../../store/slices/cart.slice';
import getConfig from '../../utils/getConfig';

const CartInfo = ({productCart}) => {

  const dispatch = useDispatch()

  const deleteProduct = () => {
    let product = productCart.productsInCart.productId
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product}`
    axios.delete(URL, getConfig())
      .then(res => {
        console.log(res)
        dispatch(getAllProductCart())
      })
      .catch()
  }

  return (
    <article className='cart-info'>
      <div className="cart-info__container-title">
        <h4 className='cart-info__title'>{productCart.brand}</h4>
        <p>{productCart.title}</p>
        <p className='cart-info__quantity'>{productCart.productsInCart.quantity}</p>
      </div>
      <div className='cart-info__delete-price'>
        <button onClick={deleteProduct} className='cart-info__btn'>
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <p className='cart-info__price'>
          <span className='cart-info__total'>Total: </span>
          ${productCart.price}
        </p>
      </div>
    </article>
  )
}

export default CartInfo