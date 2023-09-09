import React from 'react';
import { useState, useEffect } from 'react';
import "./index.css"

export default function Header(props){
    const [width, setWidth] = useState(window.innerWidth)
    const [menuOpen, setMenuOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)

    useEffect(() => {
       const handleWindowResize = () => {setWidth(window.innerWidth)}
    
    window.addEventListener("resize", handleWindowResize)
    return () => {
        window.removeEventListener("resize", handleWindowResize)
        }
    }, [])
  
    function handleMenu(){
        setMenuOpen(prevMenuOpen => !prevMenuOpen)
    }
    function handleCartMenu(){
        setCartOpen(prevCartOpen => !prevCartOpen)
    }
    function removeCart(id){
        console.log(id)
        console.log(props.itemsCart.id)
        let newItemsCartId = props.itemsCart.filter(items => items.id !== id)
        for(let i = 0; i < newItemsCartId.length; i++){
            if(newItemsCartId[i].id > 0){
                newItemsCartId[i].id -= 1
            }
        }
        props.setId(prevId => prevId -1)
        props.setItemsCart(newItemsCartId)
    }
    const updateMap = props.itemsCart.length === 0 ? <p className='empty-itmesCart'>Your cart is empty</p> : props.itemsCart.map((item, idx) => 
        <div className="customer-order" key={idx}>
            <div className='detail-cart' >
                <img src='./images/fall-limited-one.jpg' alt="sneakers" className='cart-sneakers-img'/>
                <p>Fall Limited Edition Sneakers $125.00 x {item.amount} <b style={{color: "black"}}>${item.amount * 125}.00 </b></p>
                <button className='delete-item'  onClick={() => removeCart(idx)}></button>
            </div>
            <button className='checkout-button'>CheckOut</button>
        </div>)

    return(
        <header>
            {
                width < 910 
                ? 
                    <div className='category-holder'>
                          <button onClick={handleMenu} className='category-button'>☰</button>
                          <h3>Sneakers</h3>
                          {menuOpen && (
                            <div className='overlay'>
                                <button onClick={handleMenu} className='category-button-exit'>X</button>
                                <ul className='category-menu'>
                                    <li>Collections</li>
                                    <li>Men</li>
                                    <li>Women</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul> 
                            </div>
                          )}
                    </div>

                    : 
                    <div className='category-holder'>
                        <h3>Sneakers</h3>
                        <ul className='category'>
                            <li>Collections</li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>            
            }
            <div className='images-collection'>
                {props.itemsCart.length === 0 ? 
                
                    <div>
                        <img onClick={handleCartMenu} className="cart" src="./images/cart.png" alt='cart'/>
                    </div>
                :
                    <div className='notification'>
                        <img  onClick={handleCartMenu} className="cart-more-items" src="./images/cart.png" alt='cart'/>
                        <span className='cart-length'>{props.itemsCart.length}</span>
                    </div>
                }
                <img className="profile-picture" src="./images/profile-picture.png" alt='profile pic'/>
            </div>
            {cartOpen && (
                    <div className='cart-dropdown'>
                        <p className='cart-dropdown-title'>Cart</p>
                        <hr></hr>
                        {updateMap}
                    </div>)}
        </header>
    )
}