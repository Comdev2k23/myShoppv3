import React from 'react'
import {storeData} from '../components/Data'
import Product from '../components/Product'

const Shop = () => {
  return (
    <div>
      <h2 className='text-3xl text-center font-semibold
      pt-7 py-20'>
        Shop Items
      </h2>
      <div className="flex flex-col items-center gap-4 lg:grid 
      lg:grid-cols-3 px-8">
      {storeData.map((item, i) => (
          <Product
              key={i}
              item={item}
          />
       ))}
      </div>
    </div>
  )
}

export default Shop