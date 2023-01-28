import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget';
import { Categories } from './Categories/Categories';
import { Sections } from './Sections/Sections';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Sections />
                        <Categories />
                    </ul>
                    <CartWidget cantCarrito={10} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;