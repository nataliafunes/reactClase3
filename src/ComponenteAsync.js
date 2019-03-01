import React from 'react';

class ComponenteAsync extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hora: new Date().getTime()
        }

    }

    componentWillMount() {
        console.log('will');
    }

    componentDidMount() {
        console.log('did');
        let self = this;
        setTimeout(function recurrir() {
            self.setState({ hora: new Date().getTime() });
            setTimeout(recurrir, 1000);
        }, 1000);
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1>{this.state.hora}</h1>
            </div>

        );

    }
}

export default ComponenteAsync;