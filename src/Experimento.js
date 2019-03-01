import React from 'react';
import Botonito from './modulos/Botonito';

class Experimento extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            valorBotones : [10,10,10,10]
        }
        this.incrementar = this.incrementar.bind(this);
        this.decrementar = this.decrementar.bind(this);
        this.miRender = this.miRender.bind(this);
    }

    incrementar(idx) {        
        this.setState(function(estadoAnterior) {
            estadoAnterior.valorBotones[idx] = 
                estadoAnterior.valorBotones[idx] + 1
            return estadoAnterior;
        });
        console.log(this.state);
    }

    decrementar(idx) {
        this.setState(function(estadoAnterior) {
            estadoAnterior.valorBotones[idx] = 
                estadoAnterior.valorBotones[idx] - 1
            return estadoAnterior;
        });
    }

    miRender() {
        return this.state.valorBotones.join('---------');
    }

    render() {
        return (
            <div>
                <div>{this.miRender()}</div>
                <Botonito valor={this.state.valorBotones[0]} fnCallBack={() => this.incrementar(0)}></Botonito>
                <Botonito valor={this.state.valorBotones[1]} fnCallBack={() => this.incrementar(1)}></Botonito>
                <Botonito valor={this.state.valorBotones[2]} fnCallBack={() => this.decrementar(2)}></Botonito>
                <Botonito valor={this.state.valorBotones[3]} fnCallBack={() => this.incrementar(3)}></Botonito>
            </div>
        )
    }
}

export default Experimento;