import React from "react";
import './index.css';

export default function Promote(props){
    return(
    <main>
        <div className="company-container">
            <h6>SNEAKER COMPANY</h6>
            <h2>Fall Limited Edition Sneakers</h2>
            <p className="low-profile-detail">These low-profile sneakers are you perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything weather can offer.</p>
            <div className="grid-price">
                <h4>$125.00</h4>
                <p className="fifty-discount">50%</p>
                <h5><del>$250.00</del></h5>
            </div>
            <div className="button-container">
                <div className="item-buttons">
                    <button onClick={props.handleSubAmount} className="sign" id="sub-sign" >-</button>
                    <p id="counter">{props.number}</p>
                    <button onClick={props.handleAddAmount} className="sign" id="add-sign">+</button>
                </div>
                <button className="cart-button" onClick={props.handleAddCart}> <img src="./images/cart-button.png" alt="cart button" className="cart-img-button"/>Add to Cart</button>
            </div>

        </div>
    </main>)
}