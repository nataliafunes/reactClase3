import React from 'react';
import Botonito from './modulos/Botonito';
import BotonConEstado from './BotonConEstado';
import ComponenteInput from './ComponenteInput';
import Experimento from './Experimento';
import { inflate } from 'zlib';
import Practica from './Practica';
import MuchasProperties from './MuchasProperties';
import ComponenteAsync from './ComponenteAsync';


let datosPersonas = [
    { "apellido": 'Perez', "nombres": "Juan" },
    { "apellido": 'Cafferata', "nombres": "Jose" },
    { "apellido": 'Funes', "nombres": "Natalia" }
];

let objParam = {
    uno: "uno",
    dos: "dos",
    tres: "tres",
    cuatro: "cuatro"
};

// stateless component
function App(props) {
    function mostrarConAlert(param) {
        alert('esta es la forma de ES5');
        alert(param);
    }

    function CrearComponenteBotonConEstado(props) {
        let arrJsx = [];
        console.log(props);
        for (let idx = 0; idx < props.cantidad; idx++) {
            arrJsx.push(<div style={{background:"#"+(idx*2)+(idx*2)+(idx)}}><fieldset><legend>{idx}</legend><BotonConEstado estadoInicial={1000}></BotonConEstado></fieldset></div>);
        }
        return arrJsx;
    }

    return (
        <div>
            <h1>Bienvenidos al curso de {props.nombreCurso} :: Clase 3</h1>
            <hr />
            <CrearComponenteBotonConEstado cantidad={10}></CrearComponenteBotonConEstado>
            <hr />
            <Practica datosPersonas={datosPersonas}></Practica>
            <hr />
            <MuchasProperties {...objParam}></MuchasProperties>
            <hr />
            <ComponenteAsync ></ComponenteAsync>
        </div>
    );
}

export default App;