import { createContext, useState } from "react";


export const CartContext = createContext({
    isCartDropdown : false,
    setIsCartDropdown : ()=>null,
    cartItems: [],
    setCartItems : ()=>null,
    totalCartItems : 0,
    totalCartPrice : 0,
});


export const CartProvider = ({children}) => {
    const [ isCartDropdown, setIsCartDropdown ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [ totalCartItems, setTotalCartItems ] = useState(0);
    const [ totalCartPrice, setTotalCartPrice ] = useState(0);
    const AddItemIdToCart = (product)=>{
        const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);
        if(!cartItem)//if it is a new item
            cartItems.push({...product, quantity:1})
        else
            cartItem.quantity++;   
        setTotalCartItems(totalCartItems+1);
        setTotalCartPrice(totalCartPrice+product.price);
        setCartItems(cartItems);
    }

    const DecrementItemFromCart = (product)=>{
        const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);
        if(cartItem.quantity === 0) return;
        cartItem.quantity--;
        setTotalCartItems(totalCartItems-1); 
        setTotalCartPrice(totalCartPrice-product.price);
        setCartItems(cartItems);
    }

    const IncrementItemFromCart = (product)=>{
        const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);
        cartItem.quantity++;
        setTotalCartItems(totalCartItems+1);
        setTotalCartPrice(totalCartPrice+product.price);
        setCartItems(cartItems);
    }
    const RemoveItemFromCart = (product)=>{
        const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);
        const index = cartItems.indexOf(cartItem);
        cartItems.splice(index, 1);
        setTotalCartItems(totalCartItems-product.quantity);
        setTotalCartPrice(totalCartPrice-(product.price * product.quantity)); 
        setCartItems(cartItems);
    }

    const value = {isCartDropdown, 
        setIsCartDropdown, 
        cartItems, 
        AddItemIdToCart, 
        totalCartItems, 
        totalCartPrice,
        DecrementItemFromCart, 
        IncrementItemFromCart,
        RemoveItemFromCart
    };
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
