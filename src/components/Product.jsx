import React, { useContext } from 'react'
import { StoreContext} from "../context-reducer/StoreContext"

const Product = ({item}) => {

    const {addToCart} = useContext(StoreContext)

    const handleAdd = () => {
      addToCart(item)
    }

  return (
    <div className='max-auto px-8 border border-gray-200 rounded-lg'>
        <img src={item.src} alt={item.name} />
    <div className="flex flex-row items-center 
    justify-between py-4">
        <div>
        <p className='text-xl font-semibold'>{item.name}</p>
        <p className='text-lg'>$ {item.price.toFixed(2)}</p>
        </div>
        <button  className='bg-sky-500 text-white text-lg 
        font-medium rounded-lg p-4 hover:bg-gray-500' onClick={handleAdd}>
            add to cart
        </button>
    </div>
    </div>
  )
}

export default Product