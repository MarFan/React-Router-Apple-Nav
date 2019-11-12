import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons'

const mainNav = props => {
    return (
        <div className="navContainer">
            <ul>
                <li><Link to="/"><FontAwesomeIcon icon={faApple} size="lg" /></Link></li>
            {
                props.menuItems.map(item => {
                    return (<li key={item.id}><Link to={item.link}>{item.label}</Link></li>)
                })
            }
                <li><Link to="/"><FontAwesomeIcon icon={faSearch} size="lg" /></Link></li>
                <li><Link to="/"><FontAwesomeIcon icon={faShoppingBag} size="lg" /></Link></li>
            </ul>
        </div>
    )
}

export default mainNav;