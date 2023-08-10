import React from 'react'

export const reducer = (state, action) => {
    if(action.type === "remove") {
        return {
            ...state,
            item: state.item.filter((curElem) => {
                return curElem.id !== action.payload
            })
        } 
    }

    if(action.type === "clear-cart") {
        return {...state, item: [] }
    }

    if(action.type === "increment") {
        let updatedcart = state.item.map((curElem)=> {
            if (curElem.id === action.payload) {
                return {...curElem, quantity: curElem.quantity +1};
            }
            return curElem
        })
        return {...state, item: updatedcart}
    }

    if(action.type === "decrement") {
        let updatedcart = state.item.map((curElem)=> {
            if (curElem.id === action.payload) {
                return {...curElem, quantity: curElem.quantity -1};
            }
            return curElem
        })
        .filter((curElem) => {
            return curElem.quantity !== 0;
        })
        return {...state, item: updatedcart}

    }
    return state


}