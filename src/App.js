import React from 'react';
import Header from "./Header.js"
import './index.css';
import { useState } from 'react';
import Promote from './Promote.js';
import Slider from "./Slider.js"


export default function App(){
    let key = 1
    const [amount, setAmount] = useState(0)
    const [itemsCart, setItemsCart] = useState([])
    const [id, setId] = useState(0)
    function addAmount(){
        setAmount(prevAmount => prevAmount +1)
    }
    function subAmount(){
        if(amount > 0){
            setAmount(prevAmount => prevAmount -1)
        }
    }
    function newAmount(num){
        setAmount(num)
    }
    function hanldeAddCart(){
        if(amount > 0){
            setItemsCart([...itemsCart, { amount: amount, key: key++, id: id}])
            setId(prevId => prevId + 1)
        }
    }
    return(
    <div>
        <Header 
            amount={amount}
            itemsCart={itemsCart}
            setItemsCart={setItemsCart}
            setId={setId}
            handleAddCart={hanldeAddCart}
        />
        <hr className='divider'></hr>
        <div className='all-together-promotion'>
            <Slider/>
            <Promote 
            handleAddAmount={addAmount}
            handleSubAmount={subAmount}
            handleNewAmount={newAmount}
            handleAddCart={hanldeAddCart}
            number={amount}
            />

        </div>
    </div>)
}