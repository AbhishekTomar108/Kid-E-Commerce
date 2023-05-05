import React from 'react'
import headerLogo from '../images/header-logo.png'
import cart from '../images/cart.png'
import search from '../images/search.png'

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
                <img src={headerLogo}/>
            </div>

            <div className='account-cart-container'>
                <ul>
                    <li>Account</li>
                    <li id='cart'>Cart <img src={cart}/></li>
                </ul>
            </div>
        </div>

        <div className='categories-container'>
            <hr></hr>
            <div className='categories'>
                <div className='top-cotegories'>Toys By categories
               
                </div>

                <div className='top-age'>Toys By Age
                
                </div>
                <div>Books</div>
                <div>Bestsellers</div>
                <div>New Arrivals</div>
                <div>OFFERS</div>
                <div>Gifts for all ages</div>
                <div>Parenting</div>
                <div>Rewards</div>
            </div>

            <hr></hr>

          
        </div>
    </div>
  )
}

export default header