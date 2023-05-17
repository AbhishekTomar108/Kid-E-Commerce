import React, {useContext, useEffect, useState} from 'react'
import headerLogo from '../images/header-logo.png'
import cart from '../images/cart.png'
import search from '../images/search.png'
import user from '../images/user.png'
import cross from '../images/cross.png'
import { Link } from "react-router-dom";
import LoginContext from '../Context/LoginContext'

const Header = () => {
    const ContextValue = useContext(LoginContext);
    const [previousIndex, setpreviousIndex] = useState(0);

    useEffect(()=>{

 console.log('running from header')

    },[ContextValue.productname])


    const showProduct = (index)=>{
        const currentProductList = document.getElementsByClassName('dropdown-product-list')[index];
        const previousProductList = document.getElementsByClassName('dropdown-product-list')[previousIndex];

        previousProductList.style.visibility= 'hidden';
        currentProductList.style.visibility= 'visible';
        
        setpreviousIndex(index);
    }
    const hideProduct = ()=>{
        const currentProductList = document.getElementsByClassName('dropdown-product-list')[previousIndex];

        currentProductList.style.visibility= 'hidden';

        
    }

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
              
                <Link to={ localStorage.getItem('username')?"user":'account'}> <li><span>{ localStorage.getItem('username')? localStorage.getItem('username'):"Account"}</span>
                    <img className='user-img icon' src={user}/>
    
                    </li></Link>
                    <Link to='usercart'><li id='cart'><span>Cart</span> <img className='icon' src={cart}/></li></Link>
                </ul>
            </div>
        </div>

        <div className='categories-container' onMouseLeave={hideProduct}>
            <hr></hr>
            <img className='cross' onClick={ShowHideCategories} src={cross}/>
            <div className='categories'>
            <div className='top-cotegories hover-product-list y-gap' onMouseOver={()=>showProduct(0)} >Accessories
            <div className='accesory-list-container dropdown-product-list' onMouseOver={()=>showProduct(0)}>
               <ul>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("used breast pump")}>Used Breast Pump</li></Link>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("baby bed with net")}>Baby Bed with net</li></Link>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("baby cradle automatic swing")}>baby cradle automatic swing</li></Link>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("mothertouch walker")}>mothertouch walker</li></Link>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("babyhug car seat")}>babyhug car seat</li></Link>
                <li>cradle swing</li>
                <li>electric cradle</li>
                <li>electric baby swing</li>
                <Link to='categories'><li onClick={()=>ContextValue.updateproductname("baby bassinet")}>baby bassinet</li></Link>
                <li>baby palna</li>
                <Link to='categories'><li onClick={()=>ContextValue.updateproductname("baby bouncer and rocker")}>baby bouncer and rocker</li></Link>
                <Link to='categories'><li onClick={()=>ContextValue.updateproductname("baby booster chair")}>baby booster chair</li></Link>
                </ul> 
            </div>
               
                </div>

                <div className='top-age y-gap' onMouseOver={()=>showProduct(1)}>Toys
                <div className='toys-list-container dropdown-product-list' onMouseOver={()=>showProduct(1)}>
               <ul>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("prongo Educational Toys")}>prongo	Educational</li></Link>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("car bed for kids")}>car bed for kids</li></Link>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("baby house toy")}>baby house toy</li></Link>
                </ul> 
            </div>
                
                </div>
                <div className='top-age y-gap' onMouseOver={()=>showProduct(2)}>  Diapers
                <div className='diapers-list-container dropdown-product-list' onMouseOver={()=>showProduct(2)}>
               <ul>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("xxxl diapers")}>xxxl diapers</li></Link>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("mamy poko pants xxxl")}>mamy poko pants xxxl</li></Link>
                </ul> 
            </div>
                </div>

                 <div className='y-gap' onMouseOver={()=>showProduct(3)}>Cot
                 <div className='diapers-list-container dropdown-product-list' onMouseOver={()=>showProduct(3)}>
               <ul>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("wooden baby cot")}>wooden baby cot</li></Link>
                
                </ul> 
            </div>
                 </div>
                <div className='y-gap' onMouseOver={()=>showProduct(4)}>Jacket
                <div className='diapers-list-container dropdown-product-list' onMouseOver={()=>showProduct(4)}>
               <ul>
               <Link to='categories'><li onClick={()=>ContextValue.updateproductname("baby girl jacket")}>baby girl jacket</li></Link>
                
                </ul>
                </div>
                </div>
                <div className='y-gap' onMouseOver={()=>showProduct(5)}>Stroller
                <div className='diapers-list-container dropdown-product-list' onMouseOver={()=>showProduct(5)}>
               <ul>
                <li>baby stroller under 1000</li>
                <Link to='categories'><li onClick={()=>ContextValue.updateproductname("babyhug stroller")}>babyhug stroller</li></Link>
                
                </ul>
                </div>
                </div>
                <div className='y-gap'><Link to='giftsForAll'>Gifts for all ages</Link></div>
                <div className='y-gap'><Link to='parenting'>Parenting</Link></div>
                <div className='y-gap'><Link to='/'>Rewards</Link></div>
            </div>

           

            <hr></hr>

            

          
        </div>
    </div>
  )
}

export default Header