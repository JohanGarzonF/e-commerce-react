import React, { useState } from 'react'
import axios from 'axios'

const ProductInfoId = ({ product }) => {

  const [counter, setCounter] = useState(1)

  const minusOne = () => {
    const minus = counter - 1
    minus >= 1 && setCounter(minus)
  }
  const plusOne = () => setCounter(counter + 1)

  
  
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
      <button className='product-info__btn'>Add to cart <i className="fa-solid fa-cart-plus"></i></button>
    </article>
  )
}

export default ProductInfoId