import React from 'react'
import { useCartContext } from '../../context/CartContext'
export const ItemCart = ({ item }) => {
    const { removeItem } = useCartContext()
    return (
        <div className='card mb-3 cardCart'>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.img} alt={`Imagen de ${item.nombre}`} className='img-fluid rounded-start card-img'/>
                </div>
                <div className="col-md-8">
                    <div className="cardBody">
                        <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                        <p className="card-text">Cantidad: {item.cant}</p>
                        <p className="card-text"> Precio Unitario: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                        <p className="card-text"> Subtotal: ${new Intl.NumberFormat('de-DE').format(item.precio * item.cant)}</p>
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar del Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
