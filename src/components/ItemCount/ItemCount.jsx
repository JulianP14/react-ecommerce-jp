import React from 'react'
import { useState } from 'react';

export const ItemCount = ({ defaultValue, stock }) => {
    const [counter, setCounter] = useState(defaultValue);

    const onAdd = () => {
        counter < stock && setCounter(counter + 1)
    };
    const onSubstract = () => {
        counter > defaultValue && setCounter(counter - 1)
    };

    return (
        <div>
            <button className="btn btn-dark" onClick={() => { onAdd() }}>
                +
            </button>

            {counter}

            <button className='btn btn-dark' onClick={() => { onSubstract() }}>
                -
            </button>
            <button className="btn btn-light">Agregar al carrito</button>
        </div>
    )
}
