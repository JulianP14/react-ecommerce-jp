import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "react-ch-44995.firebaseapp.com",
    projectId: "react-ch-44995",
    storageBucket: "react-ch-44995.appspot.com",
    messagingSenderId: "422081084377",
    appId: "1:422081084377:web:a493193d0ea4d6f2fa37c8",
    measurementId: "G-8DGH1M1ZSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)
const db = getFirestore(); //Ref a mi DB 

/* 
    CRUD de los prods
        . Create 
        . Read
        . Update
        . Delete
*/

export const cargaDB = async () => { // Al trabajar con DB, es ASYNC
    const leerJSON = await fetch('./json/products.json');
    const prods = await leerJSON.json();
    prods.forEach(async (prod) => {
        await addDoc(collection(db, 'productos'), {
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            categoria: prod.categoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    });
}

export const consultDB = async () => {
    const prods = await getDocs(collection(db, 'productos'))
    // console.log(prods);
    const items = prods.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

export const getProd = async (id) => {
    const prod = await getDoc(doc(db, 'productos', id))
    const item = { ...prod.data(), id: prod.id };
    /* console.log(item) */
    return item
}

export const updateProd = async (id, info) => {
    await updateDoc(doc(db, 'productos', id), info)
};

export const deleteProd = async (id) => {
    await deleteDoc(doc(db, 'productos', id))
}

//Crear y consultar orden de compra 

export const createOrder = async (cliente, prods, precioTotal, fecha) => {
    const orden = await addDoc(collection(db, 'ordenesDeCompra'), {
        datosCliente: cliente,
        Prods: prods,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return orden;
}

export const getOrder = async (id) => {
    const orden = await getDoc(doc(db, 'ordenesDeCompra', id));
    const ordenCompra = { ...orden.data(), id: orden.id };
    return ordenCompra;
}