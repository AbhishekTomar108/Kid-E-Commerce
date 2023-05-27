import React, {useContext} from 'react'
import LoginContext from '../Context/LoginContext'
import { Link } from "react-router-dom";
import toysSmall from '../images/toys-small.webp'


export default function ShopByCategory() {
  const ContextValue = useContext(LoginContext);
  return (
    <>
   
    <div style={{width:"100vw", textAlign:"center"}} className="container">
    <h2>Shop By Category</h2>
    <span className='bestseller-span container'>Explore the Collection based on the Category</span>

    <div className='separator-image'></div>
    <div className="shop-by-Category-container">
     <div className='shop-by-category'><Link to='categories'><div className='accessories categories-image'  ></div></Link><span>Accessories</span></div>
     <div className='shop-by-category'><Link to='categories'><div className='toys categories-image' ></div></Link><span>Toys</span></div>
     <div className='shop-by-category'><Link to='categories'><div className='diapers categories-image' ></div></Link><span>Diaper</span></div>
     <div className='shop-by-category'><Link to='categories'><div className='cot categories-image' ></div></Link><span>Cots</span></div>
     <div className='shop-by-category'><Link to='categories'><div className='jacket categories-image' ></div></Link><span>Jackets</span></div>
     <div className='shop-by-category'><Link to='categories'><div className='stroller categories-image' ></div></Link><span>Strollers</span></div>
</div>


    </div>
    
    
    
    </>
  )
}