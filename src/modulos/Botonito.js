import React from 'react';

// stateless component
function Botonito(props) {
    console.log(props);
    console.log(props.fnCallBack.name);
    return (
        <input type="button" value={props.fnCallBack.name=='mostrarConAlert'?'^':'*'} onClick={props.fnCallBack}></input>
    );
}

export default Botonito;