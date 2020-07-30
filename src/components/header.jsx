import React from 'react'
import './styles/header.css'

import ButtonBar from './button_bar'

export default () =>
    <div className="Header" >
        {/* <nav>
            <ul> */}
        {/* <li> */}
            <a href="#" className="LinkButton">
                <ButtonBar label="ABOUT" />
                </a>
        {/* </li>
        <li> */}
           <a href="#" className="LinkButton">
                <ButtonBar label="PROJECTS" />
                </a>
        {/* </li>
        <li> */}
          <a href="#" className="LinkButton">
            <ButtonBar label="EDUCATION" />
            </a>
        {/* </li>
        <li> */}
          <a href="#" className="LinkButton">
                <ButtonBar label="CONTACT" />
                </a>
        {/* </li> */}

        {/* </ul>
        </nav> */}



    </div>