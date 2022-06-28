import  styled  from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee } from '@fortawesome/free-solid-svg-icons'


const colores={
    borde: "#0075FF",
    error: "#bb2929",
    exito: "#1ed12d"
}


const Formulario = styled.form`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width:800px){
        grid-template-columns: 1fr;
    }
`;

const FormIniciarSesion = styled.form`
    display:grid;
    grid-template-columns: 1fr;
    gap: 20px;
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label= styled.label`
    display:block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;
`


const GrupoDiv = styled.div`
    position: relative;
    z-index:90;
`;


const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius:3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: 1s ease all;
    border: 3px solid transparent;

    &:focus{
        border 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }
`;

const LeyendaError = styled.p`
    font-size: 12px;
    margin-botton:0;
    color:${colores.error};
    ${'' /* display:none; */}
`;



export {Formulario, Label,GrupoDiv,Input,FormIniciarSesion};