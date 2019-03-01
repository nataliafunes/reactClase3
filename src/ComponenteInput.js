import React from 'react';

class ComponenteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valorInput: 'valor incial'
        }
        this.cambioValor = this.cambioValor.bind(this);
    }

    cambioValor(e) {
        this.setState({
            valorInput: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.cambioValor} value={this.state.valorInput} />
                <br />
                <br />
                <input type="button"
                    onClick={() => this.props.onReport(this.state.valorInput)}
                    value="REPORTAR" />
            </div>
        )
    }
}

export default ComponenteInput;