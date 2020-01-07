import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import  '../Header.css';

function NavigationButton(props) {
    return (
        <Link to={props.to}>
            <button className={props.className} >{props.name}</button>
        </Link>
    )
}

NavigationButton.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    to: PropTypes.string,
}

export default NavigationButton

