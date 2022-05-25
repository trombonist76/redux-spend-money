import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

export default function Products() {
  const products = useSelector(state=>state.products.items)
  return (
    <div className='products'>
      {products.map((product,index)=>(
        <Product key={index} product={product}/>
      ))}
        
    </div>
  )
}
