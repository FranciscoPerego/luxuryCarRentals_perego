import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/variables.scss'
import {BrowserRouter, Routes, Route , Navigate} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import {CartContext, CartProvider} from './Context/CartContext'
import { Cart } from "./components/Cart/Cart";


function App() {

    return (
            <CartProvider>
            <BrowserRouter>
             <NavBar/>
             <div className="linea margenSuperior2"></div>
             <Routes>
                <Route path="/" element={<div className="letrasNegras margenSuperior"><ItemListContainer/></div>} />
                <Route path="/tiposdeautos/:catId" element={<div className="letrasNegras margenSuperior"><ItemListContainer/></div>} />
                <Route path="/detail/:itemId" element={ <ItemDetailContainer/>} />
                <Route path="*" element={<Navigate to={"/"}/>}/>
                <Route path="/cart" element={ <Cart/> } />
             </Routes>
          </BrowserRouter>
          </CartProvider>
    );
}

export default App;
