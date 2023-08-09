import React, {useState} from 'react'
import './cart.css'
import Items from './Items'
import {products} from "./products"

const Cart = () => {
    const [item, setItem] = useState(products);
  return (
    <div>
        <header>
            <div className='continue-shopping'>
                <img src='./images/arrow.png' alt='arrow' className='arrow-icon'/>
                <h3>Continue shopping</h3>
            </div>
            <div className='cart-icon'>
                <img src='./images/cart.png' alt='cart'/>
                <p>7</p>

            </div>
        </header>

        <section className='main-cart-section'>
            <h1>Shopping Cart</h1>
            <p className='total-items'>you have <span className='total-items-count'>7</span> items in shopping cart </p>
            <div className='class-items'>
                <div className='cart-items-container'>
                    
                    {
                        item.map((curItem)=> {
                            return <Items key={curItem.id} {...curItem}/>

                        })
                    }

                    <Items/>
                </div>
                <div className='card-total'>
                    <h3> Cart Total : <span>2200rs</span></h3>
                    <button>Checkout</button>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Cart