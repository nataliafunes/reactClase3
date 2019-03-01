import React from 'react';
import Botonito from './modulos/Botonito';
import BotonConEstado from './BotonConEstado';
import ComponenteInput from './ComponenteInput';
import Experimento from './Experimento';
import { inflate } from 'zlib';
import Practica from './Practica';

// stateless component
function App(props) {
    function mostrarConAlert(param) {
        alert('esta es la forma de ES5');
        alert(param);
    }

    function CrearComponenteBotonConEstado(props){
        let arrJsx = [];
        console.log(props);     
        for(let idx=0; idx<props.cantidad; idx++){
            arrJsx.push(<BotonConEstado estadoInicial={1000}></BotonConEstado>);    
        }
        return arrJsx;
    }

    return (
        <div>
            <h1>Bienvenidos al curso de {props.nombreCurso} :: Clase 3</h1>
            <hr />
            <CrearComponenteBotonConEstado cantidad={10}></CrearComponenteBotonConEstado> 
            <Practica datosPersonas={[
                {"apellido":'Perez', "nombres":"Juan"},
                {"apellido":'Cafferata', "nombres":"Jose"},
                {"apellido":'Funes', "nombres":"Natalia"}
            ]}></Practica>
        </div>
    );
}

export default App;