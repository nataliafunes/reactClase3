import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

function Raiz() {
    return (<h1>Raiz</h1>);
}

function InfoApp() {
    return (<h1>Info App</h1>);
}

function Comentarios() {
    return (<h1>Comentarios</h1>);
}

function Default() {
    return (<h1>Default</h1>);
}

function AppRutas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/comentarios' component={Comentarios}></Route>
                <Route exact path='/infoApp' component={InfoApp}></Route>
                <Route component={Default}></Route>
                <Route path='/' component={Raiz}></Route>
            </Switch>
        </BrowserRouter>
    );
}


export default AppRutas;