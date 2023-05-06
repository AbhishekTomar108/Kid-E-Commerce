import React from 'react'
import Filter from './Filter'
import ProductList from './ProductList'

const Product = () => {
  return (
    <div className='product'>
        <Filter/>
        <ProductList/>
    </div>
  )
}

export default Product