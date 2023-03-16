// STYLES
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

// COMPONENTS
import Navbar from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart'

//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Context
import { DarkModeProvider } from '../context/DarkModeContext';
import { CartProvider } from '../context/CartContext';

//Firebase
import { cargaDB, consultDB } from '../utils/firebase';

//Toastify
import { ToastContainer } from 'react-toastify';


const App = () => {
  /* cargaDB(); */
  /* consultDB(); */
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoria/' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} /> {/*':id' SIGNIFICA UN PARAMETRO QUE ESTAMOS PASANDO. PARA UTILIZARLO, TENEMOS QUE LLAMAR A UN 'hook' ( useParams() ) DENTRO DEL COMPONENTE QUE ESTAMOS RENDERIZANDO EN 'element'. EL 'useParams()' NOS ESTA AYUDANDO A ALMACENAR EN UN {} EL 'id' QUE LE ESTAMOS PASANDO POR PARAMETROS (EL {} NOS GUARDA LA PROPIEDAD (NOMBRE = id) + EL VALOR). Tener en cuenta que se estan pasando valores por URL */}
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/cart' element={<Cart />} />

            </Routes>
            <ToastContainer />
          </CartProvider>
        </DarkModeProvider>
      </BrowserRouter >
    </>
  );
}

export default App;
