import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../Shared/Loading';


const Register = () => {
    const navigate = useNavigate()
    const navigateLogin = event => {
        navigate("/login")
    }

    const emailRef = useRef("")
    const passwordRef = useRef("")
    const handleEvent = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email, password);
        createUserWithEmailAndPassword(email, password)
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate("/")

        if (loading) {
            return <Loading></Loading>
        }
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center'>Please Register Now</h2>
            <Form onSubmit={handleEvent}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Alreary Registered? <span className='text-primary cursor-pointer' onClick={navigateLogin}>Please Login.</span> </p>
            <SocialLogin />
        </div>
    );
};

export default Register;