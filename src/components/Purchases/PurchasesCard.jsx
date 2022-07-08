import React from 'react'
import ProductPurchase from './ProductPurchase'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const PurchasesCard = ({purchase}) => {
  const date = Date(purchase.updateAt)
  
  const format = new Date(date)
  let day = format.getDate()
  let month = format.getMonth() + 1
  let year = format.getFullYear()

  const dateOfPurchase = `${months[month-1]} ${day}, ${year}`

  console.log(purchase)

  return(
    <article className='purchase-card'>
      <h4 className='date-purchase'>{dateOfPurchase}</h4>
      {
        purchase.cart.products.map(product => (
          <ProductPurchase
            key={product.id}
            product={product}
          />
        ))
      }
    </article>
  )
}

export default PurchasesCard