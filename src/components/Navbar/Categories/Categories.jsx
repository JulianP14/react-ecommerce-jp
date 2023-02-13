import React from 'react'
import { Link } from 'react-router-dom'
export const Categories = () => {

    const categorias = [
        {
            nombre: "mujer",
            idCategoria: 1
        },
        {
            nombre: "hombre",
            idCategoria: 2
        }
    ]


    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <button className='btn btn-primary'>Categorias</button>
            </a>
            <ul className="dropdown-menu">
                {
                    categorias.map((cat, bla) => {
                        console.log(cat, bla)
                        return (
                            <>
                                <li key={cat.id}>
                                    <Link className='dropdown-item' to={`/category/${cat.nombre}`}>Relojes de {cat.nombre}</Link>
                                </li>
                                <hr className="dropdown-divider" />
                            </>
                        )
                    })
                }
            </ul>
        </li>
    )
}
