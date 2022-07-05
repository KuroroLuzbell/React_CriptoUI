
import { Routes, Route, Link } from "react-router-dom";
import { CrearUsuario } from "./Components/Usuarios/CrearUsuario";
import { IniciarSesion } from "./Components/Usuarios/IniciarSesion";
import { ListarUsuarios } from "./Components/Usuarios/ListarUsuarios";
import './core.css'


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
              <li>
              <Link to={"/listarusuarios"} className="nav-link">
                  Usuarios
                </Link>
              </li>
              <li><a href="#" className="nav-link px-2 text-white">Opciones</a></li>
              <li><a href="#" className="nav-link px-2 text-white">About</a></li>
            </ul>
    
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                <Link to={"/iniciarsesion"} className="nav-link">
                  Login
                </Link>
              </button>
              <button type="button" className="btn btn-warning">Sign-up</button>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/usuarios" element={<CrearUsuario/>} />
        <Route path="/listarusuarios" element={<ListarUsuarios/>} />
        <Route path="/iniciarsesion" element={<IniciarSesion/>} />
      </Routes>

    </div>
  )
}
