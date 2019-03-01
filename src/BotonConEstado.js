import React from 'react';

// Statefull component

class BotonConEstado extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contador : props.estadoInicial
        }
        this.incrementar = this.incrementar.bind(this);
    }

    incrementar() {
        /*this.setState({
            contador : this.state.contador + 1
        }, function(){
            alert(this.state.contador);
        });*/
        this.setState(function(estadoPrevio){
            return{
                contador : estadoPrevio.contador + 1
            }
        }, function(){
            //callback
            alert(this.state.contador);
        });

    }

    render() {
        return (
            <input type="button" id="boton" onClick={this.incrementar} value={this.state.contador}></input>
        )
    }
}

export default BotonConEstado;