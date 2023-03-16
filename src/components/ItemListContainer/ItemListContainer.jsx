import React from 'react'
import { consultDB } from '../../utils/firebase'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {

    const { categoria } = useParams()
    const [productos, setProductos] = useState([])
    
    console.log(categoria)
    useEffect(() => {
        if (categoria) { // Undefined me da falso
            consultDB().then(products => {
                const prods = products.filter(prod => prod.stock > 0).filter(prod => prod.categoria === (categoria))
                const items = <ItemList prods={prods} plantilla="Item" />
                setProductos(items)
            })
        } else {
            consultDB().then(products => {
                const prods = products.filter(prod => prod.stock > 0)
                const items = <ItemList prods={prods} plantilla="Item" />
                setProductos(items)
            })
        }
    }, [categoria])

    return (
        <div className='prodsGeneral'>
            <div className='row cardProductos container'>
                {productos}
            </div>
        </div>
    )
}
