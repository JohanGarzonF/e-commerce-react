import React from 'react'

const CartInfo = ({productCart}) => {

  console.log(productCart)
  return (
    <section>
      <h3>{productCart.brand}</h3>
      <p>{productCart.title}</p>
      <p><span>Total:</span> ${productCart.price}</p>
    </section>
  )
}

export default CartInfo