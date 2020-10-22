import React from 'react';
import PropTypes from 'prop-types';


const Navbar = ({ title }) => {
    return (
        <div className="navbar">
            <h1>
                {title}
            </h1>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: 'ScoreTracker'
}

export default Navbar
