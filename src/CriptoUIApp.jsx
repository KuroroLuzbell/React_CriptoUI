import { Routes, Route, Link } from "react-router-dom";
import { CrearUsuario } from "./Components/Usuarios/CrearUsuario";
import { ListarUsuarios } from "./Components/Usuarios/ListarUsuarios";



export const CriptoUIApp = () => {
  return (
    <div>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/" className="nav-link px-2 text-secondary">Inicio</a></li>
              <li className="nav-item">
                <Link to={"/usuarios"} className="nav-link">
                  Usuarios
                </Link>
              </li>
              <li><a href="#" className="nav-link px-2 text-white">Diario</a></li>
              <li><a href="#" className="nav-link px-2 text-white">Opciones</a></li>
              <li><a href="#" className="nav-link px-2 text-white">About</a></li>
            </ul>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control form-control-dark text-white bg-dark" placeholder="Search..." aria-label="Search" />
            </form>
    
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Login</button>
              <button type="button" className="btn btn-warning">Sign-up</button>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/usuarios" element={<CrearUsuario/>} />
      </Routes>
    </div>
  )
}
