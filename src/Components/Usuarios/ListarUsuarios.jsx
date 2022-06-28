import React, { useEffect, useState } from 'react'
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow} from '@material-ui/core'
import  {Edit, Delete} from '@material-ui/icons'
import UsuarioService from '../../Services/UsuarioService';


export const ListarUsuarios = () => {


    const [data, setData] = useState([]);

    const fetchApi = async()  => {
        UsuarioService.getAll()
        .then(items =>{
          setData(items.data.items);
        })
    };

    useEffect(() => {
         fetchApi();
    },[]);

    
  return (
    <div className="col-12 col-xl-6">
      <div className="card">
      <div className="card-header">
									<h5 className="card-title">Basic form</h5>
									<h6 className="card-subtitle text-muted">Default Bootstrap form layout.</h6>
								</div>
      <div className='card-body'>
        <TableContainer>
          <table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Rut</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(usuarios=>(
                <TableRow key={usuarios.idUsuario}>
                  <TableCell>{usuarios.nombre} {usuarios.apellidoPaterno} {usuarios.apellidoMaterno}</TableCell>
                  <TableCell>{usuarios.rut}-{usuarios.dv}</TableCell>
                  <TableCell>{usuarios.email}</TableCell>
                  <TableCell><Edit/>&nbsp;&nbsp;&nbsp;&nbsp;<Delete /></TableCell>
              </TableRow>
              ))}
              
            </TableBody>
          </table>
        </TableContainer>
      </div>
      </div>
    </div>
  )
}
