import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../common/hooks/hooks';
import { Link } from 'react-router-dom'
import { ProductCategory } from './ProductCategory';
import { ReactionButtons } from './ReactionButtons';
import { selectProducts } from './productsSlice';
import { FavorButton } from './Favor';
import { addToCart } from '../Cart/cartSlice';

export function ProductsList () {
    const products = useAppSelector(selectProducts)
    const dispatch = useAppDispatch()
    const orderedProducts = products.slice().sort((a, b) => a.title.localeCompare(b.title))
    const auth = useAppSelector(state => state.user.isAuth)

    const handleAddToCart = (product: any) => {
        dispatch(addToCart(product));
      };

    const renderedProducts = orderedProducts.map(product => {
        return (
            <div className="prodcut-card" key={product.id}>
                <h3>{product.title}</h3>
                <div>
                    <ProductCategory categoryId={product.category} />
                </div>
                <p className="post-content">{product.content.substring(0, 100)}</p>
                <p>Цена: {product.price}</p>
                {
                    auth
                    ? 
                    <div className='test'>
                        <ReactionButtons product={product} />
                        <FavorButton product={product}/>
                        <Link to={`/product/${product.id}`}>
                            Подробнее
                        </Link>
                        <button onClick={() => handleAddToCart(product)}>ADD TO CART</button>
                    </div>
                    : <div>Войдите для покупки товара</div>
                }

            </div>
        )
    })

    return (
        <div className='product-list'>
            {renderedProducts}
        </div>
    );
}
