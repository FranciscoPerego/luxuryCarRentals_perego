import {Link} from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {

  return (
      <nav className="navBar navBar-expand-lg navBar-light fixed-top" id="mainNav">
      <div className="container px-4 px-lg-5">
      <Link to='/' className="navBar-brand" href="#page-top"> PEREGO LUXURY CAR RENTALS</Link>
        <button className="navBar-toggler navBar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navBarResponsive" aria-controls="navBarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navBar-collapse" id="navBarResponsive">
          <ul className="navBar-nav ms-auto">
            <li className="nav-item"><Link to='/' className="nav-link">Principal</Link></li>
            <li className="nav-item"><a className="nav-link">Servicios</a></li>
            <li className="nav-item"><a className="nav-link">Marcas de autos</a></li>
            <li className="nav-item"><Link to='/tiposdeautos/Deportivos' className="nav-link">Deportivos</Link></li>
            <li className="nav-item"><Link to='/tiposdeautos/Lujosos' className="nav-link">Lujosos</Link></li>
          </ul>
          <CartWidget className='margenSuperior'/>
        </div>
      </div>
    </nav>
  )
}