import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../Shared/Loading';

const Login = () => {
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const handleEvent = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email, password);
        signInWithEmailAndPassword(email,password)
    }
    const navigate = useNavigate()
    const location = useLocation()
    const navigateRegister = event => {
        navigate ("/register")
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      let from = location.state?.from?.pathname || '/'

      if(user){
        navigate(from, { replace: true })
      }
      if(loading){
        return <Loading></Loading>
   }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center'>Please Login!</h2>
            <Form onSubmit={handleEvent}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email"  required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
            
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New To SkillHUB? <span className='text-primary' onClick={navigateRegister}>Please Register.</span> </p>
            <SocialLogin />
        </div>
    );
};

export default Login;