
import { useForm } from '../../hooks/useForm';
import UsuarioService from '../../Services/UsuarioService';
import {Formulario,FormIniciarSesion, Label,GrupoDiv,Input} from '../../Elements/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import ComponenteInput from '../Formulario/Input'


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
        <div className='col-3'></div>
        <div className='col-6 offset-lg-3 '>
        <Formulario className=''>
            <ComponenteInput/>
            <div className="text-center mt-3">
                <button type="submit" className="btn btn-lg btn-primary">Iniciar Sesión</button>                                                
            </div>
        </Formulario>
        </div>
        <div className='col-3'></div>
    </main>
  )
}
