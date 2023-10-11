import React, { useContext } from 'react'
import { StoreContext } from '../context-reducer/StoreContext'
import CartProduct from '../components/CartProduct'

const CartPage = () => {

  const {products, total} = useContext(StoreContext)

  return (
    <div className='w-full max-w-3xl mx-auto'>
          <div className="flex flex-row items-center 
          justify-between mt-2 py-6 px-10 text-xl font-medium">
            <h3> My Cart</h3>
            <p> Total: ${total.toFixed(2)}</p>
          </div>
          {products.map((product, i) => (
            <CartProduct
              key={i}
              item={product}
            />
          ))}
    </div>
  )
}

export default CartPage