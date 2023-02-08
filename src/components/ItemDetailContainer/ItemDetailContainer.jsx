import React from 'react'
import { useEffect, useState } from 'react'
import { consultDB } from '../../utils/functions'
import { ItemDetail } from '../ItemDetail/ItemDetail'
export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);

    useEffect(() => {
        consultDB('../json/products.json')
            .then((prods) => {
                const prod = prods.find(item => item.id === 7)
                setProducto(prod)
            })
    })

    return (
        <div className='card mb-3 container itemDetail'>
            <ItemDetail prod={producto}/>
        </div>
    )
}
