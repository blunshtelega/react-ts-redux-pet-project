import React from 'react'
import { useAppSelector } from '../../common/hooks/hooks';


// ({ categoryId }: any) - альтернативная запись
export const ProductCategory = ({ categoryId }: { categoryId:any }) => {
    const category = useAppSelector(state =>
        state.categories.find((category) => category.id === categoryId)
    )

    return <span>{category ? category.name : 'Нет категории'}</span>
}