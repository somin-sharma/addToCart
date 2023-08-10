import React, {createContext,useEffect,useReducer,useState} from 'react'
import './cart.css'
import Items from './Items'
import {products} from "./products"
import ContextCart from './ContextCart'
import {reducer} from './reducer'

export const CartContext = createContext();

const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
}

const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const removeItem = (id) => {
        return dispatch({
            type: "remove",
            payload: id,
        })
    }
    const clearCart = ()=> {
        return dispatch ({
            type: "clear-cart"
        })
    }

    const increment = (id)=> {
        return dispatch ({
            type: "increment",
            payload: id
        })
    }

    const decrement = (id) => {
        return dispatch ({
            type: "decrement",
            payload: id
        })
    }

    useEffect(()=> {
        dispatch({ type: "get-total"});
    },[state.item])


    
  return (
  <CartContext.Provider value = {{...state, removeItem, clearCart, increment, decrement}}>
  <ContextCart/>
  </CartContext.Provider>
  )
}

export default Cart