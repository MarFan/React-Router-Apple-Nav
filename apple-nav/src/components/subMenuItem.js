import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faDesktop, faTabletAlt, faTv, faMouse, faClock, faWindowMinimize, faHeadphones, faCompactDisc, faClone } from '@fortawesome/free-solid-svg-icons'

const subMenuItem = ({label, icon, size}) => {

    function getMyIcon(ic, size){
        switch(ic){
            case 'faLaptop' : return <FontAwesomeIcon icon={faLaptop} size="2x" />
            case 'faDesktop' : return <FontAwesomeIcon icon={faDesktop} size="2x" />
            case 'faTabletAlt' : return <FontAwesomeIcon icon={faTabletAlt} size="2x" />
            case 'faTv' : return <FontAwesomeIcon icon={faTv} size="2x" />
            case 'faMouse' : return <FontAwesomeIcon icon={faMouse} size="2x" />
            case 'faClock' : return <FontAwesomeIcon icon={faClock} size="2x" />
            case 'faWindowMinimize' : return <FontAwesomeIcon icon={faWindowMinimize} size="2x" />
            case 'faHeadphones' : return <FontAwesomeIcon icon={faHeadphones} size="2x" />
            case 'faCompactDisc' : return <FontAwesomeIcon icon={faCompactDisc} size="2x" />
            case 'faClone' : return <FontAwesomeIcon icon={faClone} size="2x" />
            default : return null
        }
    }
    return (
        <li>
            <div className="theIcon">{getMyIcon(icon, size)}</div>
            <span>{label}</span>
        </li>
    )
}

export default subMenuItem;