import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import PurchasesCard from './PurchasesCard'
import './Style/purchaseScreen.css'

const PurchasesScreen = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
      .then(res => setPurchases(res.data.data.purchases))
      .catch(err => console.log(err))
  },[])

  return (
    <article className='purchases-container'>
      <h2 className='purchases__title'>My Purchases</h2>
      {
        purchases?.map(purchase => (
          <PurchasesCard
            key={purchase.cartId}
            purchase={purchase}
          />
        ))
      }
    </article>
  )
}

export default PurchasesScreen