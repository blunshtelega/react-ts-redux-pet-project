import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../common/hooks/hooks';
import { Input } from '../../components/UI/Input/Input';
import { selectCart, addToCart, decreaseCart, removeFromCart, clearCart, getTotals } from './cartSlice';


export const CartList = () => {
    const dispatch = useAppDispatch()
    const cart = useAppSelector(state => state.cart)

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = (product: any) => {
        dispatch(addToCart(product));
    };

      const handleDecreaseCart = (product: any) => {
        dispatch(decreaseCart(product));
    };

    const handleRemoveFromCart = (product: any) => {
        dispatch(removeFromCart(product));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="cart">
            <h2 className='cart__title'>Корзина</h2>
            {cart.cartItems.length === 0
                ?
                <p className='cart__empty-alert'>Корзина пуста</p>
                : 
                <div className='cart__products-wrapper'>
                    {cart.cartItems &&
                        cart.cartItems.map((cartItem: any) => (
                            <div className="cart__product" key={cartItem.id}>

                                <div className='cart__product-info'>
                                    <h3>Название: {cartItem.title}</h3>
                                    <p>Описание: {cartItem.content}</p>
                                    <p>Цена: {cartItem.price} &#8381;</p>
                                </div>

                                <div className="cart__product-quantity">
                                    <button className='cart__product-quantity-button' onClick={() => handleDecreaseCart(cartItem)}>-</button>
                                    <div className="count">{cartItem.quantity}</div>
                                    <button className='cart__product-quantity-button' onClick={() => handleAddToCart(cartItem)}>+</button>
                                </div>

                                <div className="cart__product-total-price">
                                    Общая стоимость: {cartItem.price * cartItem.quantity} &#8381; 
                                </div>

                                <button onClick={() => handleRemoveFromCart(cartItem)}>
                                        Удалить
                                </button>
                            </div>
                        ))
                    }

                    <div className="subtotal">
                        <span>Общая стоимость корзины: </span>
                        <span className="amount">{cart.cartTotalAmount} &#8381;</span>
                    </div>

                    <div className='clear-cart'>
                        <button className="clear-btn" onClick={() => handleClearCart()}>
                            Очистить корзину
                        </button>
                    </div>

                </div>
                
            }

        </div>
    )
    

    // const totalSummForCart = listedProducts.reduce((n: any, {totalPrice}: any) => n + totalPrice, 0)

    // return (    
    //     <div>
    //         {productsForCart}
    //         <p>Общая сумма товаров в корзине: {totalSummForCart}</p>
    //     </div>
    // )
}