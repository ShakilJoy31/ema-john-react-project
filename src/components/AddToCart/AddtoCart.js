import React from 'react';

const AddtoCart = id => {
    let shoppingCart = {}; 

    // Get the shopping cart from local storage. 
    const storedCart = localStorage.getItem('shopping-cart'); 
    if(storedCart){
        shoppingCart = JSON.parse(storedCart); 
    }
    // add quantity
    const quantity = shoppingCart[id]; 
    if(quantity){
        const newQuantity = parseInt(quantity) + 1; 
        shoppingCart[id] = newQuantity; 
    }
    else{
        shoppingCart[id] = 1; 
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart)); 


    // Remove quantity
    // const removeFromCart = id =>{
    //     console.log('Removed'+id); 
    // }
    // return (
    //     <div>
            
    //     </div>
    // );
};

const getStoredCart = () =>{
    let shoppingCart = {}; 
    // Get the shopping cart from local storage. 
    const storedCart = localStorage.getItem('shopping-cart'); 
    if(storedCart){
        shoppingCart = JSON.parse(storedCart); 
    }
    return shoppingCart; 
    
}

export {
    AddtoCart,
    getStoredCart
};