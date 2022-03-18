import {Link} from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.scss';



export const NavBar = () => {

  return (
    <header className="header">
            <Link to='/' style={{color: 'gray'}}>
                <h5>PEREGO LUXURY CAR RENTALS</h5>
            </Link>
            <nav className="header-nav">
               <Link to='/' className="header-nav letrasGrises">Principal</Link>
               <Link to='/tiposdeautos/Deportivos' className="header-nav letrasGrises">Deportivos</Link>
               <Link to='/tiposdeautos/Lujosos' className="header-nav letrasGrises ">Lujosos</Link>
               <Link to='/tiposdeautos/TodoTerreno' className="header-nav letrasGrises">Todo terreno</Link>
                 <CartWidget/>
           </nav>
    </header>
)
}