import {Label,GrupoInput,LeyendaError,IconoValidacion, Input} from '../../Elements/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const ComponenteInput = () => {
  return (
    <div>
        <Label htmlFor='Email'>Email</Label>
        <GrupoInput>                
            <Input className="form-control form-control-lg" type="email" name="Email" id='Email' placeholder="email"/>
            <IconoValidacion icon={faCheckCircle}/>
        </GrupoInput>
        <LeyendaError>lorem ipsun dolor sit</LeyendaError>
    </div>
  )
}

export default ComponenteInput;
