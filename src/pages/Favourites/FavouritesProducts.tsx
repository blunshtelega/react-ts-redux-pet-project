import * as React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../common/hooks/hooks';
import { FavorButton } from '../../features/Products/Favor';
import { ProductCategory } from '../../features/Products/ProductCategory';
import { selectProducts } from '../../features/Products/productsSlice';
import { ReactionButtons } from '../../features/Products/ReactionButtons';

export interface IFavouritesProductsProps {
}

export function FavouritesProducts (props: IFavouritesProductsProps) {
    const favouritesProducts = useAppSelector(selectProducts)
    const renderedProducts = favouritesProducts.map(product => {
        const addToFavor = product.favourite;
        if(addToFavor === '❤️'){
            return (
                <article className="prodcut-card" key={product.id}>
                    <h3>{product.title}</h3>
                    <div>
                        <ProductCategory categoryId={product.category} />
                    </div>
                    <p className="post-content">{product.content.substring(0, 100)}</p>
                    <ReactionButtons product={product} />
                    <FavorButton product={product} />
                    <Link to={`/product/${product.id}`} className="button muted-button">
                        Подробнее
                    </Link>
                </article>
            )
        }
    })

    return (
        <div>
            {renderedProducts}
        </div>
    );
}
