import React from 'react'
import { Link } from 'react-router-dom'
import { ItemList } from '../ItemList/ItemList';
import { useCartContext } from '../../context/CartContext';
export const Cart = () => {

    const {cart, emptyCart, totalPrice} = useCartContext();
    return (
        <>
            {
                cart.length === 0
                    ? // Si no existen prods en el cart
                    <div className='emptyCart'>
                        <h2>El carrito esta vacio</h2>
                        <Link className='nav-link' to={'/'}><button className='btn btn-primary'>Volver a la tienda</button></Link>
                    </div>
                    : // Si existen prods en el cart
                    <div className='container cartContainer'>
                        <ItemList prods={cart} plantilla='ItemCart' />
                            <p className='cartResumenCompra'>Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                        <div className="divButtons">
                            <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar Carrito</button>
                            <Link className='nav-link' to={'/'}> <button className="btn btn-dark">Continuar comprando</button></Link>
                            <Link className='nav-link' to={'/checkout'}> <button className="btn btn-dark">Finalizar Compra</button></Link>
                        </div>
                    </div>

            }
        </>
    )
}
