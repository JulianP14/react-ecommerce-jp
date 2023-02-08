import React from 'react'

/* Consulta la DB y la renderiza */
import { consultDB } from '../../utils/functions'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = () => {

    const [prods, setProds] = useState([]);

    useEffect(() => {
        /* 
        const consultarDatos = async () => {
            const prods = await consultDB('./json/products.json')
            console.log(prods)
        }
        consultarDatos(); 
        */

        consultDB('./json/products.json')
            .then(prods => {
                const items = ItemList({prods})
                // console.log(items)
                setProds(items)
            });
    }, []);

    return (
        <div className="row cardProds">
            {prods}
        </div>
    )
}
