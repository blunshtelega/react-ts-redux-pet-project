import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../common/hooks/hooks';
import { Link } from 'react-router-dom'
import { ProductCategory } from './ProductCategory';
import { ReactionButtons } from './ReactionButtons';
import { FavorButton } from './Favor';
import { selectProducts } from './productsSlice';
import { addToCart } from '../Cart/cartSlice';

export const SingleProduct = () => {
    const { productId } = useParams()
    const dispatch = useAppDispatch()
    const product = useAppSelector(state =>
        state.products.find(product => product.id === productId)
    )

    if (!product) {
        return (
            <h2>Product not found!</h2>
        )
    }

    return (
            <div className='prodcut-card'>
                <h2>{product.title}</h2>
                <ProductCategory categoryId={product.category} />
                <p>{product.content}</p>
                <p>Цена: {product.price}</p>
                <ReactionButtons product={product} />
                <FavorButton product={product}/>
                <Link to={`/editProduct/${product.id}`} className="button">
                    Edit Post
                </Link>
                <button onClick={() => dispatch(addToCart(product))}>ADD TO CART</button>
            </div>
    )
}