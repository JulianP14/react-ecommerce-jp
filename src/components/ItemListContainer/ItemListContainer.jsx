import React from 'react'

/* Consulta la DB y la renderiza */
import { consultDB } from '../../utils/functions'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {

    const { idCategoria, stock } = useParams();
    const [prods, setProds] = useState([]);

    console.log(idCategoria, stock)

    useEffect(() => {

        if (idCategoria) { //Undefined retorna falso
            consultDB('../json/products.json')
                .then(products => {
                    const prods = products.filter(prod => prod.categoria ===(idCategoria));
                    const items = ItemList({ prods })
                    // console.log(items)
                    setProds(items)
                });
        } else {
            consultDB('./json/products.json')
                .then(prods => {
                    const items = ItemList({ prods })
                    // console.log(items)
                    setProds(items)
                });
        }

    }, [idCategoria]);

    return (
        <div className="row cardProds">
            {prods}
        </div>
    )
}
