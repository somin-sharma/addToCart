import React from 'react'
import './cart.css'

const Cart = () => {
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
                    <div className='items-info'>
                        <div className='product-img'>
                            <img src='https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='image'/>
                        </div>
                        <div className='title'>
                            <h2>Samsung S21</h2>
                            <p>color black</p>
                        </div>
                        <div className='add-minus-quantity'>
                        <i class="fas fa-minus minus"></i>
                        <input type='text' placeholder='2'/>
                        <i class="fas fa-plus add"></i>
                        </div>
                        <div className='price'>
                            <h3>2000rs</h3>
                        </div>

                        <div className='remove-item'>
                        <i class="fas fa-trash-alt remove"></i>
                        </div>
                    </div>

                    <hr/>

                    <div className='items-info'>
                        <div className='product-img'>
                            <img src='https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='image'/>
                        </div>
                        <div className='title'>
                            <h2>Samsung S21</h2>
                            <p>color black</p>
                        </div>
                        <div className='add-minus-quantity'>
                        <i class="fas fa-minus minus"></i>
                        <input type='text' placeholder='2'/>
                        <i class="fas fa-plus add"></i>
                        </div>
                        <div className='price'>
                            <h3>2000rs</h3>
                        </div>

                        <div className='remove-item'>
                        <i class="fas fa-trash-alt remove"></i>
                        </div>
                    </div>

                    <hr/>

                    <div className='items-info'>
                        <div className='product-img'>
                            <img src='https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='image'/>
                        </div>
                        <div className='title'>
                            <h2>Samsung S21</h2>
                            <p>color black</p>
                        </div>
                        <div className='add-minus-quantity'>
                        <i class="fas fa-minus minus"></i>
                        <input type='text' placeholder='2'/>
                        <i class="fas fa-plus add"></i>
                        </div>
                        <div className='price'>
                            <h3>2000rs</h3>
                        </div>

                        <div className='remove-item'>
                        <i class="fas fa-trash-alt remove"></i>
                        </div>
                    </div>

                    <hr/>

                    <div className='items-info'>
                        <div className='product-img'>
                            <img src='https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='image'/>
                        </div>
                        <div className='title'>
                            <h2>Samsung S21</h2>
                            <p>color black</p>
                        </div>
                        <div className='add-minus-quantity'>
                        <i class="fas fa-minus minus"></i>
                        <input type='text' placeholder='2'/>
                        <i class="fas fa-plus add"></i>
                        </div>
                        <div className='price'>
                            <h3>2000rs</h3>
                        </div>

                        <div className='remove-item'>
                        <i class="fas fa-trash-alt remove"></i>
                        </div>
                    </div>

                    




                </div>
                <div className='card-total'>
                    <h3> Cart Total : <span>2200rs</span></h3>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Cart