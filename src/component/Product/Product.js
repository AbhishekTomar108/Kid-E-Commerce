import React from 'react'
import Filter from './Filter'
import ProductList from './ProductList'

const Product = (props) => {
  return (
    <div className='product'>
        <Filter/>
        <ProductList prouctTitle={props.prouctTitle} prouctTitleDesc={props.prouctTitleDesc}/>
    </div>
  )
}

export default Product