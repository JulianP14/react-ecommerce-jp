import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ item }) => {
    return (
        <div className="card mb-3 cardProd border-dark">
            <img 
                src={`/img/${item.img}`} 
                className="card-img-top" 
                alt={`Imagen de ${item.name}`}
            />
            <div className="card-body cardBody">
                <h5 className="card-title"> {item.name} {item.modelo} </h5> 
                <p className="card-text">{item.marca}</p>
                <p className="card-text">US${item.precio}</p>
                <Link className='nav-link' to={`/item/${item.id}`}><button className='btn btn-primary'>Ver Producto</button></Link>
            </div>
        </div>

    )
}
