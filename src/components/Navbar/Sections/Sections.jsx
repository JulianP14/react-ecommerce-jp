import React from 'react'
import { Link } from 'react-router-dom'
export const Sections = () => {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link tiendaReloj" href="#">Tienda Relojes</a>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to={'/'}>
                    <button className='btn btn-primary'>Home</button>
                </Link>
            </li>
        </>
    )
}
