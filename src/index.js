import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import AppRutas from './AppRutas';

ReactDom.render(
    <App nombreCurso={'React'} descripcion={'que tal!!!'}></App>,
    document.getElementById('root')
);