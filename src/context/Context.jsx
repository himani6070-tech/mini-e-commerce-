import React, { createContext, useState } from 'react'

const store = createContext();
export default function Context({children}) {
const [cart, setCart]=useState([]);

function addToCart(product){
     const alreadyExist=cart.some((item)=>{
        return item.id ===product.id;
    })
    if(alreadyExist){
    const updatedCart = cart.map((item,index)=>{
        return item.id===product.id?{...item, qty:item.qty+1}:item
    })
    setCart(updatedCart);
    localStorage.setItem("data",JSON.stringify(updatedCart))
    }else{
    localStorage.setItem("data",JSON.stringify([...cart,product]))
    setCart([...cart,product]);
    }
}
function increaseQty(id){
   const itemExist = cart.some((item)=>{
    return item.id===id
   })
   if(itemExist){
   const updatedCart=cart.map((item,index)=>{
    return item.id===id?{...item,qty:item.qty+1}:item
   })
   setCart(updatedCart);
   localStorage.setItem("data",JSON.stringify(updatedCart))}
}
function decreaseQty(id){
   const itemExist = cart.some((item)=>{
    return item.id===id
   })
   if(itemExist){
    const updatedCart = cart.map((item,index)=>{
      return  item.id===id?{...item,qty:item.qty-1}:item
    })
    setCart(updatedCart)  
    localStorage.setItem("data",JSON.stringify(updatedCart)) 
    }
}
function removeHandler(id){
    const updatedCart=cart.filter((item)=>{
        return item.id!=id;
    })
    setCart(updatedCart)
    localStorage.setItem("data",JSON.stringify(updatedCart))
}


// ===============================
// TOTAL CALCULATION


// 1. SUBTOTAL

const subtotal =cart.reduce((total,item)=>{
    return total+item.price*item.qty;
},0);


// 2. SHIPPING

const shipping =subtotal>0?99:0;


const total = subtotal+shipping;
return (
    <store.Provider value={{cart,addToCart,increaseQty,decreaseQty,removeHandler,shipping,subtotal,total}}>
        {children}
    </store.Provider>
    )
}
export {store};