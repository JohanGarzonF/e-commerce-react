import React, { useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import './Styles/headerScreen.css'
import { getAllProductCart } from '../../store/slices/cart.slice';

const HeaderScreen = () => {

  const navbar = useRef()

  const clickNavbar = () => {
    navbar.current.classList.toggle('navbar__open')
  }
  const closeNavBar = () => {
    if(navbar.current.classList == 'navbar navbar__open'){
      navbar.current.classList.toggle('navbar__open')
    }
  }
  const dispatch = useDispatch()

  const goCart = () => {
    clickNavbar()
  }

  return (
    <header className='header'>
      <h1 className='header__title'>
          <Link 
            onClick={closeNavBar}
            to='/'
          >e-commerce</Link>
      </h1>
      <div onClick={clickNavbar} className="header__menuham">
        <i className="fa-solid fa-bars"></i>
      </div>
      <nav ref={navbar} className="navbar">
        <ul className="navbar__list">
          <li className="navbar__items">
            <NavLink 
                onClick={clickNavbar}
                to="/login" 
                className={({isActive}) => isActive ? "navbar__links navbar__link-active" : 'navbar__links'}
              ><i className="fa-solid fa-user"></i>
              <p className='navbar__label'>Login</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink 
                onClick={clickNavbar}
                to="/purchases" 
                className={({isActive}) => isActive ? "navbar__links navbar__link-active" : 'navbar__links'}
              ><i className="fa-solid fa-store"></i>
              <p className='navbar__label'>Purchases</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink 
                onClick={goCart}
                to="/cart" 
                className={({isActive}) => isActive ? "navbar__links navbar__link-active" : 'navbar__links'}
              ><i className="fa-solid fa-cart-shopping"></i>
              <p className='navbar__label'>Cart</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderScreen