import React from 'react'

export const Categories = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Relojes Hombre</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Relojes Mujer</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Smartwatches</a></li>
            </ul>
        </li>
    )
}
