import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { login } from "../actions/userActions.js"
import Loader from "../components/Loader"
import Message from "../components/Message"

const LoginScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginUser = useSelector((state) => state.loginUser)
  const { loading, error, userInfo } = loginUser
  useEffect(() => {
    if (userInfo) {
      console.log("user",userInfo)
      navigate("/")
    }
  }, [navigate, userInfo])


const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };


  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col md={6} sm={12}>
          <h1>Sign Up</h1>
          {loading && <Loader />}
          {error && <Message variant='danger'>{error}</Message>}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                value={email}
                placeholder='Enter your email'
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                value={password}
                placeholder='Enter your password'
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginScreen
