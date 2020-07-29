import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Description from './components/description'
import Header from './components/header'

ReactDOM.render(
    < div >
        <Header />
        <Description />
    </div>,
    document.getElementById('root')
);