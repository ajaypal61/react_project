import React from 'react'
import web from "../src/image/about-removebg-preview.png"
import "../src/index.css"
import Common from './Common';

const About = () => {
    return (
        <>
            <Common
                name="WelCome My About Page"
                imgsrc={web}
                visit="/contact"
                btName="Contact Now"
            />
        </>
    )
}

export default About;
