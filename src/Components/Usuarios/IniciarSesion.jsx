import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import UsuarioService from '../../Services/UsuarioService';
import {Formulario,FormIniciarSesion, Label,GrupoDiv,Input} from '../../Elements/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle } from '@fortawesome/free-solid-svg-icons'


export const IniciarSesion = () => {

    const [initSesion, handleInputChange] = useForm({
        Email:'',
        Texto:''
    })

    const {Email, Texto} = initSesion;

    const handleSubmit = (e) => {
        e.preventDefault();
        UsuarioService.initSesion(initSesion )
        .then(response=>{
            if(response.data.mensajeError.length > 0){
                
                e.han;
                console.log(response.data.mensajeError);                
            }
            else{
                
            }
        })
        .catch(err=>{
            console.log(err)
        })
    };

  return (
    <main>
        <div className="text-center mt-4">
            <h1 className="h2">Inicia sesión para continuar</h1>
        </div>
        <FormIniciarSesion>
            <GrupoDiv>
                <Label>Email</Label>
                <Input className="form-control form-control-lg" type="email" name="Email" placeholder="email"  onChange={handleInputChange}/>
                <FontAwesomeIcon icon={faCheckCircle}/>
            </GrupoDiv>
            <div className="mb-3">
                <Label>Password</Label>
                <input className="form-control form-control-lg" type="password" name="Texto" placeholder="password"  onChange={handleInputChange}/>
            </div>
            <div className="text-center mt-3">
                <button type="submit" className="btn btn-lg btn-primary">Iniciar Sesión</button>                                                
            </div>
        </FormIniciarSesion>
    </main>
  )
}
