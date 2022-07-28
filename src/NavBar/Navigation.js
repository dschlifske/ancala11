import React from 'react';
import { Router, BrowserRouter, Routes, Route, useNavigate, Link, Navigate, NavLink } from "react-router-dom";
import '../App.css';
import "@aws-amplify/ui-react/styles.css";
import classes from './NavBar.module.css';
import NavLinks from './NavLinks';

const Navigation = () => {
    return ( 
        <nav className={classes.Navigation}>
            <NavLinks />
        </nav>
    );
}

export default Navigation;