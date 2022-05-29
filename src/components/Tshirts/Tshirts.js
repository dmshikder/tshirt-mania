import React from 'react';
import './Tshirts.css';
const Tshirts = ({handleAddToCart, tshirt}) => {
    
    const{name, price,picture}=
   tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>${price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default Tshirts;