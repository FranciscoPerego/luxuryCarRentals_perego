import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/variables.scss'
import {BrowserRouter, Routes, Route , Navigate} from 'react-router-dom'

function App() {

    return (
          <BrowserRouter>
             <NavBar/>
         
             <Routes>
                <Route path="/" element={<div className="letrasNegras margenSuperior"><ItemListContainer/></div>} />
                <Route path="*" element={<Navigate to={"/"}/>}/>
             </Routes>
          
          </BrowserRouter>
    );
}

export default App;
