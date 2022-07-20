import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../common/hooks/hooks';
import { productAdded } from './productsSlice'


export const AddProductForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [price, setPrice] = useState('')

    const dispatch = useDispatch()

    const categories = useAppSelector(state => state.categories)

    const onTitleChanged = (e: any) => setTitle(e.target.value)
    const onContentChanged = (e: any) => setContent(e.target.value)
    const onCategoryChanged = (e: any) => setCategoryId(e.target.value)
    const onPriceChanged = (e: any) => setPrice(e.target.value)

    const onSaveProductClicked = () => {
        if (title && content) {
        dispatch(productAdded(title, content, categoryId, price))

        setTitle('')
        setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(categoryId)

    const categoriesOptions = categories.map(category => (
        <option key={category.id} value={category.id}>
            {category.name}
        </option>
    ))
    

    return (
        <section>
        <h2>Add new product</h2>
        <form>
            <label htmlFor="postTitle">Product Title:</label>
            <input
                type="text"
                id="productTitle"
                name="productTitle"
                value={title}
                onChange={onTitleChanged}
            />
            <label htmlFor="productCategory">Category:</label>
            <select id="productCategory" value={categoryId} onChange={onCategoryChanged}>
            <option value=""></option>
                {categoriesOptions}
            </select>
            <label htmlFor="productContent">Content:</label>
            <textarea
                id="productContent"
                name="productContent"
                value={content}
                onChange={onContentChanged}
            />
            <input 
                type="number" 
                id='productPrice'
                name='productPrice'
                value={price}
                onChange={onPriceChanged}
            />
            <button type="button" onClick={onSaveProductClicked} disabled={!canSave}>ADD POST</button>
        </form>
        </section>
    )
}