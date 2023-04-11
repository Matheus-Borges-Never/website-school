import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/style.scss";

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbarContent justify-content-center">
            <div className="container-fluid">                    
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav navAlign align-middle align-items-center me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div className="logo">
                                <img src="https://monteirolobatofranca.com.br/assets/img/MONTEIRO_LOBATO_2021_350X200_SITE%20logo.png" width="208" alt="Monteiro Lobato logo" />
                            </div>
                        </li>
                        <li className="nav-item navText">
                            <h1 className="nav-link active text-light">Home</h1>
                        </li>
                        <li className="nav-item">
                            <h1 className="nav-link active text-light">Colégio</h1>
                        </li>
                        <li className="nav-item">
                            <h1 className="nav-link active text-light">Galeria de Fotos</h1>
                        </li>
                        <li className="nav-item">
                            <h1 className="nav-link active text-light">Contato</h1>
                        </li>
                        <li className="nav-item dropdown">                            
                            <a className="nav-link dropdown-toggle active text-light" href="/" role="button" data-bs-toggle="dropdown">
                                Área Restrita
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Effectus</a></li>
                                <li><a className="dropdown-item" href="/">Conexia Lex</a></li>
                                <li><a className="dropdown-item" href="/">Educacross</a></li>
                                <li><a className="dropdown-item" href="/">International School</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;
