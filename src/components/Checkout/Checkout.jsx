import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { createOrder, updateProd, getProd } from '../../utils/firebase'
import { useState } from 'react'

export const Checkout = () => {
    const { cart, emptyCart, totalPrice } = useCartContext();
    const datosForm = useRef();
    let navigate = useNavigate();

    // const [validForm, setvalidForm] = useState(false) 
        // Mi idea inicial consistia en setear el estado del form en 'false', y con un 'if' validar. Pero no pude resolverlo del todo por mi cuenta.

    const [email, setEmail] = useState("");
    const [email2, setEmail2] = useState("");

    /* Funciones que toman datos */
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleEmail2 = (e) => {
        setEmail2(e.target.value)
    };

    const formValidation = () => {
        return email === email2 && email!=="";  
    }

    const consultarForm = (e) => {
        e.preventDefault();
        const formData = new FormData(datosForm.current);
        const cliente = Object.fromEntries(formData);
        const aux = [...cart];

        aux.forEach(prodCart => {
            getProd(prodCart.id)
                .then(prodDB => {
                    prodDB.stock -= prodCart.cant
                    updateProd(prodDB.id, prodDB)
                })
        });

        createOrder(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
            toast(`
                    Gracias por elegirnos y comprar nuestros productos. Su orden de compra NRO: ${ordenCompra.id} por un monto total de $${new Intl.NumberFormat('de-DE').format(totalPrice())} se realizo exitosamente
                `, {
                position: 'top-right',
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: 'dark'
            });
            e.target.reset();
            emptyCart();
            navigate('/');
        })

    }

    return (
        <div className='formDiv'>
            {cart.length === 0
                ?
                <div className='fD-error'>
                    <h2>No se puede finalizar la compra por falta de productos en el carrito.</h2>
                    <Link className='nav-link' to={'/'}><button className='btn btn-primary'>Ir a comprar</button></Link>
                </div>
                :
                <div className='container contForm'>
                    <form onSubmit={consultarForm} ref={datosForm}>
                        <div className='mb-3 cF-Div'>
                            <label htmlFor="nombre" className='form-label'>Nombre y Apellido</label>
                            <input type="text" className='form-control' name='nombre' required/>
                        </div>
                        <div className='mb-3 cF-Div'>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input type="email" className='form-control' name='email' value={email} onChange={handleEmail} required
                                onBlur={(e) => {
                                    const valorEmail = e.target.value;
                                    if(!valorEmail.includes('@')){
                                        e.target.style = 'border: solid red 1px'; 
                                        e.target.value = ''; 
                                        e.target.placeholder = 'Ingrese un email valido. Debe incluir un "@"'
                                    } else {
                                        e.target.style = '';
                                        return
                                    }
                                }} 
                            />
                        </div>
                        <div className='mb-3 cF-Div'>
                            <label htmlFor="email" className='form-label'>Reingrese su Email</label>
                            <input type="email" className='form-control' name='email' value={email2} onChange={handleEmail2} required onBlur={(e) => {
                                const valorEmail = e.target.value;
                                if(!valorEmail.includes('@')){
                                    e.target.style = 'border: solid red 1px'; 
                                    e.target.value = ''; 
                                    e.target.placeholder = 'Ingrese un email valido. Debe incluir un "@"'
                                } else {
                                    e.target.style = '';
                                    return
                                }
                            }} />
                        </div>
                        <div className='mb-3 cF-Div'>
                            <label htmlFor="dni" className='form-label'>DNI</label>
                            <input type="number" className='form-control' name='dni' required/>
                        </div>
                        <div className='mb-3 cF-Div'>
                            <label htmlFor="phone number" className='form-label'>Celular</label>
                            <input type="number" className='form-control' name='celular'required />
                        </div>
                        <div className='mb-3 cF-Div'>
                            <label htmlFor="direccion" className='form-label'>Direccion</label>
                            <input type="text" className='form-control' name='direccion'required />
                        </div>
                        <button type='submit' className='btn btn-success' disabled={!formValidation()} >Finalizar Compra</button>
                    </form>
                </div>
            }
        </div>
    )
}
