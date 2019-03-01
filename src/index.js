import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import AppRutas from './AppRutas';

ReactDom.render(
    <AppRutas nombreCurso={'React'} descripcion={'que tal!!!'}></AppRutas>,
    document.getElementById('root')
);