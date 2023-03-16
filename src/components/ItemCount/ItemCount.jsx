import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'
export const ItemCount = ({ defaultValue, stock, onAdd }) => {
    const [counter, setCounter] = useState(defaultValue);

    const sumar = () => {
        counter < stock && setCounter(counter + 1)
    };
    const restar = () => {
        counter > defaultValue && setCounter(counter - 1)
    };

    // let navigate = useNavigate();
    return (
        <div>
            <button className="btn btn-dark btnCount" onClick={() => restar()}>
                -
            </button>

            {counter}

            <button className='btn btn-dark btnCount' onClick={() => sumar()}>
                +
            </button>
            <button className="btn btn-success btnCount" onClick={() => {
                onAdd(counter);
                toast(`Su producto ha sido agregado al carrito exitosamente.`, {
                    position: 'top-center',
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: 'dark'
                });
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#000" className="bi bi-cart cartWidget" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
            </button>
        </div>
    )
}
