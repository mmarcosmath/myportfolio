import React from 'react'
import './styles/header.css'

import ButtonBar from './button_bar'

export default () =>
    <div className="Header" >
        <ButtonBar label="ABOUT" />
        <ButtonBar label="PROJECTS" />
        <ButtonBar label="EDUCATION" />
        <ButtonBar label="CONTACT" />
    </div>