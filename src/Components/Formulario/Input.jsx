import {Label,GrupoInput,LeyendaError,IconoValidacion, Input} from '../../Elements/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const ComponenteInput = ({label,placeHolder,tipo,name,leyendaError,expresionRegular}) => {
  return (
    <div>
        <Label htmlFor='Email'>{label}</Label>
        <GrupoInput>                
            <Input 
              className="form-control form-control-lg" 
              type={tipo} 
              name={name} 
              id={name} 
              placeholder={placeHolder}
              
              />
            <IconoValidacion icon={faCheckCircle}/>
        </GrupoInput>
        <LeyendaError>{leyendaError}</LeyendaError>
    </div>
  )
}

export default ComponenteInput;
