// COMPONENTS
import Navbar from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
/* 
import { ItemCount } from './ItemCount/ItemCount';
import { Dolar } from './Dolar/Dolar'; 
*/
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// STYLES
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategoria/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />

        </Routes>
          {/* <ItemListContainer /> */}
          {/* <ItemCount defaultValue={1} stock={10} /> */}
          {/* <Dolar /> */}
          {/* <ItemDetailContainer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
