import React from 'react';

function MostrarAlumnosForma1(props){
    let res=[];
    props.datosPersonas.forEach(element => {
        res.push(<h4>{element.apellido}, {element.nombres}</h4>);
    });    
    return res;
}

function MostrarAlumnosForma2(props){
    return props.datosPersonas.map(function(item, key){ 
        return (
            <div key={key}>
                <h4>{item.apellido}, {item.nombres}</h4>
            </div>
        )
    });
}


function Practica(props){ 
    return <MostrarAlumnosForma2 datosPersonas={props.datosPersonas}></MostrarAlumnosForma2>;
}

export default Practica;