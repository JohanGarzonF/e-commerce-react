import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoadingGLobal } from './isLoadind.slice';

export const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
      setProductsGlobal: (state, action) => action.payload
    }
})

export const { setProductsGlobal } = productSlice.actions;

export const getAllProducts = () => (dispatch) => {
  dispatch(setIsLoadingGLobal(true))
  const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
  return axios.get(URL)
    .then(res => {
      dispatch(setProductsGlobal(res.data.data.products))
    })
    .catch(err => console.log(err))
    .finally(() => dispatch(setIsLoadingGLobal(false)))
}

export default productSlice.reducer;
