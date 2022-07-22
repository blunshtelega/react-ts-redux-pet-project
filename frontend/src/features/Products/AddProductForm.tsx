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
        <div className='admin-panel'>
            <h2>Добавить новый товар</h2>
            <form className='admin-panel__add-product-form'>
                <label htmlFor="postTitle">Название продукта:</label>
                <input
                    className='admin-panel__solo-bolo'
                    type="text"
                    id="productTitle"
                    name="productTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="productCategory">Категория:</label>
                <select className='admin-panel__solo-bolo' id="productCategory" value={categoryId} onChange={onCategoryChanged}>
                <option value=""></option>
                    {categoriesOptions}
                </select>
                <label htmlFor="productContent">Контент:</label>
                <textarea
                    className='admin-panel__solo-bolo'
                    id="productContent"
                    name="productContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <label htmlFor="productPrice">Цена:</label>
                <input 
                    className='admin-panel__solo-bolo'
                    type="number" 
                    id='productPrice'
                    name='productPrice'
                    value={price}
                    onChange={onPriceChanged}
                />
                <button type="button" onClick={onSaveProductClicked} disabled={!canSave}>ADD POST</button>
            </form>
        </div>
    )
}