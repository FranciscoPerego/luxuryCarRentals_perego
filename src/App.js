import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/variables.scss'
import {BrowserRouter, Routes, Route , Navigate} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {

    return (
          <BrowserRouter>
             <NavBar/>
             <div className="linea margenSuperior2"></div>
             <Routes>
                <Route path="/" element={<div className="letrasNegras margenSuperior"><ItemListContainer/></div>} />
                <Route path="/tiposdeautos/:catId" element={<div className="letrasNegras margenSuperior"><ItemListContainer/></div>} />
                <Route path="/detail/:itemId" element={ <ItemDetailContainer/>} />
                <Route path="*" element={<Navigate to={"/"}/>}/>
             </Routes>
          
          </BrowserRouter>
    );
}

export default App;
