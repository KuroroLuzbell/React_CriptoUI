import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow} from '@material-ui/core'
import  {Edit, Delete} from '@material-ui/icons'


export const ListarUsuarios = () => {


    const url = 'https://criptofriends.azurewebsites.net/api/Usuario/ListarUsuarios';
    const [data, setData] = useState([]);

    const fetchApi = async()  => {
        await axios.get(url)
        .then(items =>{
          console.log(items.data.items);
          setData(items.data.items);
        })
    };

    useEffect(() => {
         fetchApi();
    },[]);

    
  return (
    <div>
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
  )
}
