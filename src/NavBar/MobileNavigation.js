import React from 'react';
import { Router, BrowserRouter, Routes, Route, useNavigate, Link, Navigate, NavLink } from "react-router-dom";
import '../App.css';
import "@aws-amplify/ui-react/styles.css";
import classes from './NavBar.module.css';
import NavLinks from './NavLinks';
import { CgMenu, CgCloseR } from 'react-icons/cg';
import {useState} from 'react';


const MobileNavigation = () => {
    
    const [open, setOpen] = useState(false);

    const hamburgericon = <CgMenu className={classes.Hamburger} 
                            size='40px' color='#ff616d'
                            onClick={() => setOpen(!open)}
                            />
    
    const closeicon = <CgCloseR className={classes.Hamburger} 
                            size='40px' color='#ff616d'
                            onClick={() => setOpen(!open)}
                            />
                          
    const closeMobileMenu = () => setOpen(false);

    return ( 
        <nav className={classes.MobileNavigation}>
            {open ? closeicon : hamburgericon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
    );
}

export default MobileNavigation;