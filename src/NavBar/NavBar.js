import React from 'react';
import { Router, BrowserRouter, Routes, Route, useNavigate, Link, Navigate, NavLink } from "react-router-dom";
import '../App.css';
import "@aws-amplify/ui-react/styles.css";
import classes from './NavBar.module.css'
import NavLinks from './NavLinks';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

const NavBar = () => {

    return (
        <div className={classes.NavBar}>
            <Navigation />
            <MobileNavigation />
        </div>
    );
}

export default NavBar;