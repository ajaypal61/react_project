import React from 'react'
import web from "../src/image/home1-removebg-preview.png"
import "../src/index.css"
import Common from './Common';


const Home = () => {
    return (
        <>
            <Common
                name="Grow Your Business With"
                imgsrc={web}
                visit="/Service"
                btName="Get Started"
            />
        </>
    )
}

export default Home;
