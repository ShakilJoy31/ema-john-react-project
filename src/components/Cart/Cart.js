import React from 'react';
import './Cart.css';

const Cart = (props) => {

    let total = 0; 
    let shippingPrice = 0;  
    let quantity = 0; 
    for(const product of props.cart){
        quantity = quantity + product.quantity; 
        total = total + product.price * product.quantity; 
        shippingPrice = shippingPrice + product.shipping; 
    }
    let tax = total*(10/100); 
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Price: ${shippingPrice}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${total + tax + shippingPrice}</h4>
        </div>
    );
};

export default Cart;