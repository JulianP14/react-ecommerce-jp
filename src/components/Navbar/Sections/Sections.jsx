import React from 'react'
import { Link } from 'react-router-dom'
export const Sections = React.memo(
    () => {
        return (
            <>
                <li className="nav-item">
                    <a className="nav-link tiendaReloj">Tienda Relojes</a>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to={'/'}>
                        <button className='btn btn-primary'>Home</button>
                    </Link>
                </li>
            </>
        )
    }

)