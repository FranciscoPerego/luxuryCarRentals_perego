import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

    return (
        <>
          <NavBar/>
          <div className="letrasNegras">
          <ItemListContainer/>
          </div>
        </>
    );
}

export default App;
