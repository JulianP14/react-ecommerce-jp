// COMPONENTS
import Navbar from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
/* 
import { ItemCount } from './ItemCount/ItemCount';
import { Dolar } from './Dolar/Dolar'; 
*/
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';

// STYLES
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      {/* <ItemCount defaultValue={1} stock={10} /> */}
      {/* <Dolar /> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;
