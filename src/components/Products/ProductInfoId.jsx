import React, { useState } from 'react'
import axios from 'axios'
import getConfig from '../../utils/getConfig'
import { useDispatch } from 'react-redux'
import { getAllProductCart } from '../../store/slices/cart.slice'

const ProductInfoId = ({ product }) => {

  const [counter, setCounter] = useState(1)

  const dispatch = useDispatch()

  const minusOne = () => {
    const minus = counter - 1
    minus >= 1 && setCounter(minus)
  }
  const plusOne = () => setCounter(counter + 1)

  const addProductCart = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const objPurchase = {
      id: product.id,
      quantity: counter
    }
    axios.post(URL, objPurchase, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(getAllProductCart())
      })
      .catch(err => console.log(err))
  }

  return (
    <article className='product-info'>
      <h2 className='porduct-info__title'>{product?.title}</h2>
      <p className="product-info__description">{product?.description}</p>
      <div className='product-info__description-container'>
        <div className="product-info__price-container">
          <h3 className="product-info__price-label">Price</h3>
          <p className="product-info__number">{product?.price}</p>
        </div>
        <div className="product-info__quantity-container">
          <div onClick={minusOne} className="product-info__minus-plus btn">-</div>
          <div className="product-info__minus-plus">{counter}</div>
          <div onClick={plusOne} className="product-info__minus-plus btn">+</div>
        </div>
      </div>
      <button
        onClick={addProductCart}
        className='product-info__btn'
      >Add to cart <i className="fa-solid fa-cart-plus"></i></button>
    </article>
  )
}

export default ProductInfoId