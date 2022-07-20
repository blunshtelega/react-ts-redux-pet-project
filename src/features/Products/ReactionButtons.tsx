import React from 'react'
import { useAppDispatch } from '../../common/hooks/hooks';
import { reactionAdded } from './productsSlice'

const reactionEmoji = {
    thumbsUp: '👍',
    heart: '❤️',
}

export const ReactionButtons = ({ product }: any) => {
    const dispatch = useAppDispatch()
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
        <button
            key={name}
            type="button"
            className="muted-button reaction-button"
            onClick={() =>
                dispatch(reactionAdded({ productId: product.id, reaction: name }))
            }
        >
        {emoji} {product.reactions[name]}
        </button>
    )
    })

    return <div>{reactionButtons}</div>
}