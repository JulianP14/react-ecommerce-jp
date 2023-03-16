import React from 'react'
import { Link } from 'react-router-dom'
export const Categories = React.memo(() => {

    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <button className="btn btn-dark">Categorias</button>
            </a>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={'/category/Mujer'}>Relojes de Mujer</Link></li>
                <li><Link className="dropdown-item" to={'/category/Hombre'}>Relojes de Hombre</Link></li>
                <li><Link className="dropdown-item" to={'/category/Smartwatch'}>Smartwatches</Link></li>

            </ul>
        </li>
    )
}
)