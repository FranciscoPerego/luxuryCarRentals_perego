export const NavBar = () => {

  return (
      <nav className="navBar navBar-expand-lg navBar-light fixed-top" id="mainNav">
      <div className="container px-4 px-lg-5">
      <a className="navBar-brand" href="#page-top">LUXURY CAR RENTALS</a>
        <button className="navBar-toggler navBar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navBarResponsive" aria-controls="navBarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navBar-collapse" id="navBarResponsive">
          <ul className="navBar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#">Principal</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Servicios</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Marcas de autos</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Tipos de autos</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Sobre nosotros</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}