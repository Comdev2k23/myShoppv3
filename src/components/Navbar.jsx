import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { StoreContext} from '../context-reducer/StoreContext'

const Navbar = () => {

  const {products} = useContext(StoreContext)

  return (
    <div className='flex flex-row justify-evenly
    pt-4 text-lg font-medium'>
        <Link className='bg-green-400 rounded-lg p-5' to='/'>Home</Link>
        <Link className='bg-green-400 rounded-lg p-5' to='/shop'> Shop</Link>
        <Link className='bg-green-400 rounded-lg p-5' to='/cart'>
          Cart
          <span className='text-xs align-top 
          bg-red-500 text-white rounded-full px-2 
          py-1 mx-1'>
            {products.length} 
            </span>
          </Link>
    </div>
  )
} 

export default Navbar