import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import CardProduct from './CardProduct'
import InputSearch from './InputSearch'
import './style/homeScreen.css'

const HomeScreen = () => {

  const dispatch = useDispatch()

  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getAllProducts())
  },[])

  console.log(products);

  return (
    <div className='home'>
      <InputSearch/>
      <div className="products-container">
        {
          products.map(product => (
            <CardProduct
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default HomeScreen