import React from 'react'
import headerLogo from '../images/header-logo.png'
import cart from '../images/cart.png'
import search from '../images/search.png'
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className='header'>
        <div className='header-container'>
            <div className='search-container'>
                <div className='search-input'>
                <img src={search}/>
                <input type='text' placeholder='Search'></input>
                </div>
            </div>

            <div className='header-img'>
               <Link to='/'> <img src={headerLogo}/></Link>
            </div>

            <div className='account-cart-container'>
                <ul>
                    <li><Link to='account'>Account</Link></li>
                    <li id='cart'>Cart <img src={cart}/></li>
                </ul>
            </div>
        </div>

        <div className='categories-container'>
            <hr></hr>
            <div className='categories'>
            <div className='top-cotegories'><Link to='categories'>Toys By categories</Link>
               
                </div>

                <div className='top-age'><Link to='age'>Toys By Age</Link>
                
                </div>
                <div> <Link to='books'> Books</Link></div>
                 <div><Link to='bestseller'>Bestsellers</Link></div>
                <div><Link to='newArrivals'>New Arrivals</Link></div>
                <div><Link to='offers'>OFFERS</Link></div>
                <div><Link to='giftsForAll'>Gifts for all ages</Link></div>
                <div><Link to='parenting'>Parenting</Link></div>
                <div><Link to='/'>Rewards</Link></div>
            </div>

           

            <hr></hr>

          
        </div>
    </div>
  )
}

export default header