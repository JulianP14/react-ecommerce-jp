import { Item } from "../Item/Item"


import React from 'react'



export const ItemList = ({prods}) => {
    return (
        <>
            {prods.map(producto => <Item item={producto} key={producto.id}/>)}
        </>
    )
}
