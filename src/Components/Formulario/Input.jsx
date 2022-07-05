import {Label,GrupoInput,LeyendaError,IconoValidacion, Input} from '../../Elements/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

const ComponenteInput = ({estado, cambiarEstado, label,placeHolder,tipo,name,leyendaError,expresionRegular}) => {

  const onChange = (e) => {
    cambiarEstado({...estado, campo: e.target.value});
  };

  const validacion =() => {
    if(expresionRegular){
      if(expresionRegular.test(estado.campo)){
        cambiarEstado({...estado, valido:'true'});
      }
      else{
        cambiarEstado({...estado, valido:'false'});
      }
    }
  }

  return (
    <div>
        <Label htmlFor={name} valido={estado.valido}>{label}</Label>
        <GrupoInput>                
            <Input 
              className="form-control form-control-lg" 
              type={tipo} 
              name={name} 
              id={name} 
              placeholder={placeHolder}
              value={estado.campo}
              onChange={onChange}
              onKeyUp={validacion}
              onBlur={validacion}
              valido={estado.valido}
              />
            <IconoValidacion 
              icon={estado.valido==='true'? faCheckCircle:faTimesCircle} 
              valido={estado.valido}/>
        </GrupoInput>
        <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
  )
}

export default ComponenteInput;
