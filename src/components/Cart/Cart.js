import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    // conditional rendering options 
    //  1. Element variable
    // 2. ternary operator 
    // 3. && operator 
    // 4. || operator 
    let command;
    if(cart.length === 0){
        command = <p>Please Add at least one!!</p>
    }
    else if(cart.length === 1){
        command = <p>Please Add more</p>
    }
    else{
        command= <p>Thanks for adding item</p>
    }
    
    return (
        <div>
            <h2>item selected : {cart.length}</h2>
          
             {
                  cart.map(tShirt => <p>
                      {tShirt.name}
                      <button onClick={()=> handleRemoveFromCart(tShirt)}>X</button>
                      </p>)
             
             }
             {cart.length ===0 || <p className='orange'>YeY ! You are buing</p>}
             {cart.length ===3 && <div className='orange'><h3>Try me</h3></div>}
             {command}
             {cart.length !== 4 ? <p>Keep adding</p> : <button>remove all</button>}
        </div>
    );
};


export default Cart;