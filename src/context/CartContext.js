import { createContext, useContext, useState } from "react"

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    //Si hay prods en el cart
    const isInCart = (id) => {
        //Si existe retorna el prod, sino, undefined
        return cart.find(prod => prod.id === id);
    }

    //Agregar prods
    const addItem = (prod, cantidad) => {
        //SI existe en carrito, modifico Qs
        if (isInCart(prod.id)) {
            const index = cart.findIndex(producto => producto.id === prod.id);
            const aux = [...cart]
            aux[index].cant = cantidad;
            setCart(aux)
        } else {
            // Si no existe, lo creo
            const prodCart = {
                ...prod,
                cant: cantidad,
            }
            setCart([...cart, prodCart])
        }
    }

    //Eliminar prods del cart
    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id)) 
        //Devuelve el [] excluyendo el id que pasamos... El setCart hace que se modifique el cart con lo que nos devuelve el filter
    }

    //Vaciar cart
    const emptyCart = () => {
        setCart([]);
    }

    //Q total de prods en el cart
    const getItemQ = () => {
        /* return cart.length  => Devuelve la Q de elementos en el []. 1 = variedad de items, no a Q */
        return cart.reduce((acum, prod) => acum += prod.cant, 0)
    }

    //Precio total  
    const totalPrice = () => {
        return cart.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, emptyCart, getItemQ, totalPrice }}>
            {props.children}
        </CartContext.Provider>
    )
}