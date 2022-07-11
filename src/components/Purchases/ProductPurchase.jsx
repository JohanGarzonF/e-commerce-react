import React from 'react'

const ProductPurchase = ({product}) => {

  const totalPrice = product.price * product.productsInCart.quantity

  return (
    <ul className='purchase-info'>
      <li className='purchase-info__item'>{product.title}</li> 
      <li className='purchase-info__item'>{product.productsInCart.quantity}</li> 
      <li className='purchase-info__item'>${totalPrice}</li> 
    </ul>
  )
}

export default ProductPurchase