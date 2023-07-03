import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <>
            <div className='container-fluid bg-body-tertiary'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <Navbar className="">
                            <Container>
                                <NavLink className="nav-link" to="/">
                                    Ajay-Rathore
                                </NavLink>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse className='' id="basic-navbar-nav">
                                    <ul className='navbar-nav ms-auto'>
                                        <li>
                                            <NavLink className="nav-link" to="/">
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link" to="/about">
                                                About
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link" to="/service">
                                                Service
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="nav-link" to="/contact">
                                                Contact
                                            </NavLink>
                                        </li>
                                    </ul>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NavBar;