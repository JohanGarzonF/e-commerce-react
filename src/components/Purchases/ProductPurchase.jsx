import React from 'react'

const ProductPurchase = ({product}) => {

  console.log(product)
  return (
    <ul className='purchase-info'>
      <li className='purchase-info__item'>{product.title}</li> 
      <li className='purchase-info__item'>{product.productsInCart.quantity}</li> 
      <li className='purchase-info__item'>${product.price}</li> 
    </ul>
  )
}

export default ProductPurchase