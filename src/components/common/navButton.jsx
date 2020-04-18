import React from 'react';
import { NavLink } from 'react-router-dom';

const NavButton = ({ label, to }) => {
    return (
        <button className="btn btn-primary mb-3">
            <NavLink style={{ textDecoration: "none", color: "white" }} to={to}>{label}</NavLink>
        </button>
    );
}

export default NavButton;