import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../src/index.css"


const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        email: "",
        msg: "",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Name= ${data.fullname}. Email= ${data.email} And Msg= ${data.msg}`)
    };

    return (
        <>
            <h1 className='text-center mt-5 text-info'>Contact Us</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto my-4'>
                        <Form onSubmit={formSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" name='fullname' value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' value={data.email} onChange={InputEvent} placeholder="Enter Your email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group> */}
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control name='msg' value={data.msg} onChange={InputEvent} as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button className='button px-4' variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;