import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
export const CrearUsuario = () => {

    const url = 'https://criptofriends.azurewebsites.net/api/Usuario/CrearUsuario';
   



    const [formValues, handleInputChange] = useForm({
        Rut:'',
        DigitoVerificador:'',
        Email:'',
        Texto:'',
        ConfirmarTexto:'',
        Nombre:'',
        Paterno:'',
        Materno:'',
        FechaNacimiento:'2022-06-23'
    })

    const {Rut, DigitoVerificador, Email, Texto,ConfirmarTexto,Nombre,Paterno,Materno,FechaNacimiento} = formValues;

    
    const handleSubmit = async (e) => {
        console.log(formValues);
        e.preventDefault();



        await axios.post(url,formValues )
        .then(response=>{
            console.log(response);
        })
        .catch(err=>{
            console.log(err)
        })
        
    };
    

    return (
        <div className="container">
            <main>
                <div className="row g-3">
                    <div className="my-3 p-3 bg-body rounded shadow-sm">
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <h1>Form With Custom Hook</h1>
                                <hr />
                                <label htmlFor='Rut' className='form-label col-md-2'>Rut</label>
                                <div className='col-md-3'>                                
                                    <input
                                        type="text"
                                        name='Rut'
                                        className='form-control'
                                        placeholder='Rut'
                                        autoComplete='off'
                                        value={Rut}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='col-md-1'>
                                <input
                                    type="text"
                                    name='DigitoVerificador'
                                    className='form-control'
                                    placeholder='DV'
                                    autoComplete='off'
                                    value={DigitoVerificador}
                                    onChange={handleInputChange}
                                />
                                </div>
                                <div className='col-md-6'></div>
                                <label className="form-label col-md-2">Email</label>
                                <div className="col-9">                                    
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input type="email" 
                                                className="form-control" 
                                                name="Email"
                                                placeholder="email" 
                                                autoComplete='off' 
                                                value={Email}
                                                onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <div className='col-1'></div>
                                <label htmlFor="Nombre" className="form-label col-md-2">Nombres</label>
                                <div className="col-9">                                    
                                    <div className="input-group has-validation">
                                        <input type="text" 
                                                className="form-control" 
                                                name="Nombre"
                                                placeholder="Nombres" 
                                                required="" 
                                                autoComplete='off' 
                                                value={Nombre}
                                                onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <div className='col-1'></div>
                                <label htmlFor="Paterno" className="form-label col-md-2">Paterno</label>
                                <div className="col-4">                                    
                                    <div className="input-group has-validation">
                                        <input type="text" 
                                                className="form-control" 
                                                name="Paterno"
                                                placeholder="Apellido Paterno" 
                                                required="" 
                                                autoComplete='off' 
                                                value={Paterno}
                                                onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <label htmlFor="Materno" className="form-label col-md-1">Materno</label>
                                <div className="col-4">                                    
                                    <div className="input-group has-validation">
                                        <input type="text" 
                                                className="form-control" 
                                                name="Materno"
                                                placeholder="Apellido Paterno" 
                                                required="" 
                                                autoComplete='off' 
                                                value={Materno}
                                                onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <label htmlFor="password" className="form-label col-md-2">Contraseña</label>
                                <div className="col-4">
                                <div className='form-group'>
                                    <input
                                        type="password"
                                        name='Texto'
                                        className='form-control'
                                        placeholder='*****'                    
                                        value={Texto}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                </div>
                                <label className="form-label col-md-1">Repetir</label>
                                <div className="col-4">
                                    <div className='form-group'>
                                        <input
                                            type="password"
                                            name='ConfirmarTexto'
                                            className='form-control'
                                            placeholder='*****'                    
                                            value={ConfirmarTexto}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className='col-md-12'></div>
                                <label className="form-label col-md-2">F Nacimiento</label>
                                <div className='col-2'>
                                    <TextField className='form-control'
                                        id="FechaNacimiento"
                                        label="Seleccione"
                                        type="date"
                                        defaultValue={FechaNacimiento}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <hr className="wide" />
                                <div className="col-xs-8 col-xs-offset-5">
                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                    &nbsp;&nbsp;&nbsp;
                                    <button type="button" className="btn btn-danger">Limpiar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}
