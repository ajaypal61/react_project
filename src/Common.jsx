import React from 'react'
import web from "../src/image/home1-removebg-preview.png"
import "../src/index.css"
import { NavLink } from 'react-router-dom';


const Common = (props) => {
    return (
        <>
            <section id='header' className='d-flex align-items-center pt-5'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className='col-md-6 pt-5 d-flex flex-column justify-content-center align-items-center'>
                                    <h1>
                                        {props.name}
                                        <strong className='text-info fw-lighter fw-medium'> Ajay Rathore</strong>
                                    </h1>
                                    <p className='text-start me-auto pt-2 text-secondary'>
                                        We Are The Team Of Talented Developer Marking Websites
                                    </p>
                                    <div className='me-auto text-white'>
                                        <NavLink className="nav-link button rounded-4 p-2 px-4" to={props.visit}>{props.btName}</NavLink>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <img src={props.imgsrc} className='animated' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;
