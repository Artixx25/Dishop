import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext } from '../context/stateContext'
import {Cart} from './'

const Navbar = () => {

  const {isShowCart, setIsShowCart, totalQuantities} = useStateContext()
  return (
    <div className='navbar-container'>

      <p className='logo'>
        <Link href="/">
          <div><span className='logo-span_di'>Di</span>Shop</div>
        </Link>
      </p>

      <button type='button' className='cart-icon' onClick={() => setIsShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
    
      {isShowCart && <Cart />}
    </div>
  )
}

export default Navbar;