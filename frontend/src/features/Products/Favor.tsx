import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../common/hooks/hooks';
import { favorAdded, reactionAdded } from './productsSlice'

const reactionEmoji = {
    not: '🤍',
    done: '❤️',
}

export const FavorButton = ({ product }: any) => {
    const dispatch = useAppDispatch()
    const change = () => {
        if(product.favourite === reactionEmoji.not){
            return reactionEmoji.done
        } else {
            return reactionEmoji.not
        }
    }
    return (
        <button
            key={product.id}
            type='button'
            onClick={() => dispatch(favorAdded({ productId: product.id, favor: change() }))}
        > {product.favourite} </button>
    )
}