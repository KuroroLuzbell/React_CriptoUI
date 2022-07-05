
import { useForm } from '../../hooks/useForm';
import UsuarioService from '../../Services/UsuarioService';
import {Formulario, Label,GrupoInput,Input} from '../../Elements/Formulario';
import ComponenteInput from '../Formulario/Input'
import { useState } from 'react';


export const IniciarSesion = () => {

  const [email, cambiarEmail] = useState({campo:'', valido:null})

    const [initSesion, handleInputChange] = useForm({
        Email:'',
        Texto:''
    })

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/
    }

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
        <div className='col-3'></div>
        <div className='col-6 offset-lg-3 '>
        <Formulario className=''>
            <ComponenteInput
                estado={email}
                cambiarEstado={cambiarEmail}
                label="usuario"
                placeHolder="john123"
                tipo="text"
                name="Email"
                leyendaError="texto"
                expresionRegular={expresiones.usuario}
            />
            <div className="text-center mt-3">
                <button type="submit" className="btn btn-lg btn-primary">Iniciar Sesión</button>                                                
            </div>
        </Formulario>
        </div>
        <div className='col-3'></div>
    </main>
  )
}
