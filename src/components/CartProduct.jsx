import React, {useContext} from 'react'
import { StoreContext } from '../context-reducer/StoreContext'

const CartProduct = ({item}) => {

    const {removeFromCart} = useContext(StoreContext)

    const handleRemove = () => {
            removeFromCart(item)
    }

  return (
    <div className='flex flex-row items-center gap-8 
    px-10'>
        <img src={item.src} alt={item.name}
        className='w-40' />
        <div className='w-1/2 px-10'>
            <p className='text-xl font-medium'>{item.name}</p>
            <p className='text-lg'> ${item.price.toFixed(2)}</p>
        </div>
        <button className='bg-gray-500 text-white text-lg font-medium 
        rounded-lg p-4 hover:bg-red-500' onClick={handleRemove}>
             remove
        </button>
    </div>
  )
}

export default CartProduct