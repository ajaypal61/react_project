import React from 'react'
import web from "../src/image/sdata-removebg-preview.png"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = (props) => {
    return (
        <>
            <div className='col-md-4 col-10 mx-auto'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={web} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>

        </>
    )
}

export default Cards;