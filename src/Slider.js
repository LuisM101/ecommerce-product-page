import React from 'react';
import './index.css';
import data from "./data"
import { useState } from 'react';


export default function Slider(){
    const [currectId, setCurrectID] = useState(0)

    function newFocus(idx){
        setCurrectID(idx)
    } 
    const userImg = data.map(info => {
        return info.id === currectId ? <img key={info.key} src={info.focusImg} className='focusImg' alt='focusImg'/> : ""
    })

    const sectionImg = data.map((info, idx) => 
        <img key={info.key} src={info.thumbnail} className='thumbnail' alt="thumb img" onClick={() => newFocus(idx)}/>
    )

    return(
        <section>
            {userImg}
            <div className='container-thumbnail'>
                {sectionImg}
            </div>
        </section>
    )
}