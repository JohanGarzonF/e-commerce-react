import './App.css'
import axios from 'axios'
import HomeScreen from './components/home/HomeScreen'
import { Route, Routes } from 'react-router-dom'
import LoginScreen from './components/Login/LoginScreen'
import ProtectedRoutes from './components/Login/ProtectedRoutes'
import CartScreen from './components/Cart/CartScreen'
import PurchasesScreen from './components/Purchases/PurchasesScreen'
import HeaderScreen from './components/Shared/HeaderScreen'
import ProductScreen from './components/Products/ProductScreen'
import { useEffect } from 'react'
import { getAllProducts } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'
import FooterScreen from './components/Shared/Footer'


function App() {

  // useEffect(() => {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'

  //   const newUser = {
  //     firstName: "Johan",
  //     lastName: "Dan",
  //     email: "JohanDan@gmail.com",
  //     password: "johan1234",
  //     phone: "1234567891",
  //     role: "admin"
  //   }
  //   axios.post(URL, newUser)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // },[])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  },[])
  
  return (
    <div className="App">
      <HeaderScreen/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/login' element={<LoginScreen/>} />

        <Route element={<ProtectedRoutes/>}>
          <Route path='/cart' element={<CartScreen/>}/>
          <Route path='/purchases' element={<PurchasesScreen/>}/>
        </Route>
        <Route path='/product/:id' element={<ProductScreen/>}/>
      </Routes>
      <FooterScreen/>
    </div>
  )
}

export default App
