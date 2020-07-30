import React from 'react'
import './styles/header.css'

import ButtonBar from './button_bar'

export default () =>
    <div className="Header" >

        <a href="#" className="LinkButton">
            <ButtonBar label="ABOUT" />
        </a>

        <a href="#" className="LinkButton">
            <ButtonBar label="PROJECTS" />
        </a>

        <a href="#" className="LinkButton">
            <ButtonBar label="EDUCATION" />
        </a>
        <a href="#" className="LinkButton">
            <ButtonBar label="CONTACT" />
        </a>



    </div>