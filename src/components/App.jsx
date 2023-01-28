// COMPONENTS
import Navbar from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';

// STYLES
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Tienda de Relojes'}/>
    </>
  );
}

export default App;
