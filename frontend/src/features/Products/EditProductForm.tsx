import React, { EventHandler, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../common/hooks/hooks';

import { productUpdated } from './productsSlice'

export const EditProductForm = () => {
    const { productId } = useParams()
    const navigate = useNavigate()

    const product = useAppSelector(state =>
        state.products.find(product => product.id === productId)
    )

    const [title, setTitle] = useState(product ? product.title : '')
    const [content, setContent] = useState(product ? product.content : '')

    const dispatch = useDispatch()

    const onTitleChanged = (e: any) => setTitle(e.target.value)
    const onContentChanged = (e: any) => setContent(e.target.value)

    const onSaveProductClicked = () => {
        if (title && content) {
        dispatch(productUpdated({ id: productId, title, content }))
        navigate(`/product/${productId}`)
        }
    }

    return (
        <section>
        <h2>Edit Product</h2>
        <form>
            <label htmlFor="postTitle">Product Title:</label>
            <input
                type="text"
                id="productTitle"
                name="productTitle"
                placeholder="What's on your mind?"
                value={title}
                onChange={onTitleChanged}
            />
            <label htmlFor="productContent">Content:</label>
            <textarea
                id="productContent"
                name="productContent"
                value={content}
                onChange={onContentChanged}
            />
        </form>
        <button type="button" onClick={onSaveProductClicked}>
            Save Product
        </button>
        </section>
    )
}