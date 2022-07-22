import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../common/hooks/hooks';
import { getTotals, selectCart } from '../../features/Cart/cartSlice';
import { selectProducts } from '../../features/Products/productsSlice';

export interface IMiniCartProps {

}

export function MiniCart (props: IMiniCartProps) {
    const [showModal, setShowModal] = useState(false)
    const showMiniCart = (e: any) => {
        if (!showModal){
            setShowModal(true)
            console.log(showModal)
        } else {
            setShowModal(false)
            console.log(showModal)
        }
    }

    const productInMiniCart = useAppSelector(state => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTotals());
    }, [productInMiniCart, dispatch]);



    const allProductsInCart = productInMiniCart.cartItems.map((cartProduct: any) => {
        return (
            <div className='minicart-product' key={cartProduct.id}>
                <h3>Название: {cartProduct.title}</h3>
                <p>Описание: {cartProduct.content}</p>
                <p>Цена: {cartProduct.price} &#8381;</p>
            </div>
        )
    })

    return (
        <div>
        {
            !showModal
            ? 
                <button onClick={showMiniCart}>SHOW</button>
            : 
                <div>
                    <button className='modal-button' onClick={showMiniCart}>HIDE</button>
                    <div className='modal'>
                        {allProductsInCart}
                        <div className="subtotal">
                            <span>Общая стоимость корзины: </span>
                            <span className="amount">{productInMiniCart.cartTotalAmount} &#8381;</span>
                        </div>
                    </div>
                </div> 
        }

        </div>
    );
}
