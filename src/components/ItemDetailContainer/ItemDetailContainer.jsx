import React from 'react'
import { useEffect, useState } from 'react'
import { consultDB } from '../../utils/functions'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        consultDB('../json/products.json')
            .then((prods) => {
                const prod = prods.find(item => item.id === parseInt(id))
                setProducto(prod)
            })
    })

    return (
        <div className='card mb-3 container itemDetail'>
            <ItemDetail prod={producto} />
        </div>
    )
}
