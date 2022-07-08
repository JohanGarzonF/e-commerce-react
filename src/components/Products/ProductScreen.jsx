import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfoId from './ProductInfoId'
import SimilarProduct from './SimilarProduct'
import './style/productScreen.css'

const classImg = ['', 'second-img', 'third-img']

const ProductScreen = () => {

  const [product, setProduct] = useState()
  const [indexClass, setIndexClass] = useState(0)

  const {id} = useParams()

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
      .then(res => setProduct(res.data.data.product))
      .catch(err => console.log(err))
  },[id])


  const clickPrev = () => {
    const prevClass = indexClass - 1
    if(prevClass < 0 ){
      setIndexClass(classImg.length - 1)
    } else {
      setIndexClass(prevClass)
    }
  }

  const clickNext = () => {
    const nextClass = indexClass + 1
    if(nextClass > classImg.length - 1){
      setIndexClass(0)
    } else {
      setIndexClass(nextClass)
    }
  }

  return (
    <div className='product'>
      <div className="product-info__container">
        <div className="slider">
          <div onClick={clickPrev} className="slider__prev">&#60;</div>
          <div className={`slider__container ${classImg[indexClass]}`}>
            {
              product?.productImgs.map(imgSrc => (
                <img 
                  key={imgSrc}
                  src={imgSrc} 
                  alt="Product Image"
                  className='slider__imgs'
                />
              ))
            }
          </div>
          <div onClick={clickNext} className="slider__next">&#62;</div>
          <div className="selected-container">
            <div 
              onClick={() => setIndexClass(0)} 
              className={indexClass === 0 ? "selected-dots active-dots" : "selected-dots"}
            ></div>
            <div 
              onClick={() => setIndexClass(1)} 
              className={indexClass === 1 ? "selected-dots active-dots" : "selected-dots"}
            ></div>
            <div 
              onClick={() => setIndexClass(2)} 
              className={indexClass === 2 ? "selected-dots active-dots" : "selected-dots"}
            ></div>
          </div>
        </div>
        <ProductInfoId product={product}/>
      </div>
      <SimilarProduct product={product}/>
    </div>
  )
}

export default ProductScreen