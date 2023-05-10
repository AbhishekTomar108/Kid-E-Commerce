import React from 'react'
import headerLogo from '../images/header-logo.png'
import cart from '../images/cart.png'
import search from '../images/search.png'
import user from '../images/user.png'
import cross from '../images/cross.png'
import { Link } from "react-router-dom";

const header = () => {

    const ShowHideCategories = ()=>{
        const Categories = document.getElementsByClassName('categories-container')[0];

        if(Categories.style.display === "block")
        {
            Categories.style.display = "none";
        }
        else{
            Categories.style.display = "block";
        }
       
    }

  return (
    <div className='header'>
        <div className='header-container'>
            <div className='search-hamburger-container'>
                <div className='hamburger-container' onClick={ShowHideCategories}>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
            <div className='search-container'>
                <div className='search-input'>
                <img src={search}/>
                <input type='text' placeholder='Search'></input>
                </div>
            </div>
            </div>

            <div className='header-img'>
               <Link to='/'> <img src={headerLogo}/></Link>
            </div>

            <div className='account-cart-container'>
                <ul>
                <Link to='account'> <li><span>Account</span>
                    <img className='user-img icon' src={user}/>
                    </li></Link>
                    <li id='cart'><span>Cart</span> <img className='icon' src={cart}/></li>
                </ul>
            </div>
        </div>

        <div className='categories-container'>
            <hr></hr>
            <img className='cross' onClick={ShowHideCategories} src={cross}/>
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