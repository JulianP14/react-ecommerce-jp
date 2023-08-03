import React from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
//Context
/* import { useDarkModeContext } from '../../context/DarkModeContext' */
import { useCartContext } from '../../context/CartContext'
export const ItemDetail = ({ prod }) => {
    /* const { darkMode } = useDarkModeContext(); */
    const { addItem } = useCartContext();

    const onAdd = (cantidad) => {
        addItem(prod, cantidad)
    }

    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={prod.img} className=" img-fluid rounded-start" alt={prod.nombre} />
            </div>
            <div className="col-md-8">
                <div className={`card-body`}>
                    <h5 className="card-title">{prod.nombre}</h5>
                    <p className="card-text">Modelo: {prod.modelo}</p>
                    <p className="card-text">Marca: {prod.marca}</p>
                    <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                    <p className="card-text">Stock: {prod.stock}</p>
                    <ItemCount defaultValue={1} stock={prod.stock} onAdd={onAdd} />
                    <Link className='nav-link' to={'/cart'}><button className='btn btn-primary'> Finalizar Compra </button></Link>
                </div>
            </div>
        </div>

    )
}
