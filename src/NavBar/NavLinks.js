import React from 'react';
import { Router, BrowserRouter, Routes, Route, useNavigate, Link, Navigate, NavLink } from "react-router-dom";
import '../App.css';
import "@aws-amplify/ui-react/styles.css";
import classes from './NavBar.module.css';

const NavLinks = (props) => {
    
    return (
        <ul>
            <li>
                Ancala Health
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/">Home</Link>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/about">About</Link>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href="https://www.jsonline.com">Sign In</a>
            </li>
        </ul>
    );
}

export default NavLinks;