import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/variables.scss'
import {BrowserRouter, Routes, Route , Navigate} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import {CartProvider} from './Context/CartContext'
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";




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
                <Route path="/Checkout" element={ <Checkout/> } />
             </Routes>
          </BrowserRouter>
          </CartProvider>
    );
}

export default App;
