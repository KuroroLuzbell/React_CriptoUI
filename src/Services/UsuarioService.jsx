import http from "../http-common";


    const create = data => {
        return http.post("/Usuario/CrearUsuario", data);
    };

    const getAll = () => {
        return http.get("/Usuario/ListarUsuarios");
    };

    const get = id => {
        return http.get(`/Usuario/TraerUsuario/${id}`);
    };

    const initSesion = data => {
        return http.post("/Usuario/IniciarSesion",data);
    };

    const update = (id, data) => {
        return http.put(`/Usuario/ActualizarUsuario/${id}`, data);
    };

    const updateEmail = (id, data) => {
        return http.put(`/Usuario/ActualizarEmail/${id}`, data);
    };

    const updatePassword = (id, data) => {
        return http.put(`/Usuario/ActualizarContrasena/${id}`, data);
    };

    const remove = (id, data) => {
        return http.put(`/Usuario/EliminarUsuario/${id}`, data);
    };

    const UsuarioService = {
        getAll,
        get,
        create,
        update,
        remove,
        updateEmail,
        updatePassword,
        initSesion
      };
      export default UsuarioService;