import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div>
      <NavBar/> 
      <ItemListContainer greeting='Bienvenido al mejor alquiler de autos exóticos y de lujo'/> 
    </div>
  );
}

export default App;

