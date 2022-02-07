import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/variables.scss'


function App() {

    return (
        <>
          <NavBar/>
          <div className="letrasNegras margenSuperior">
          <ItemListContainer/>
          </div>
        </>
    );
}

export default App;
