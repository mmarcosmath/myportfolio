import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Description from './components/description'
import Header from './components/header'
import Image from './image/background.svg'

ReactDOM.render(
    < div >
        <Header />
        <Description />
        <img className="Image" src= {Image} alt="background" />
    </div>,
    document.getElementById('root')
);