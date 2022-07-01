import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from 'react-router-dom'
import { Form, Button, Row, Col, Container } from "react-bootstrap"
import { register } from "../actions/userActions.js"
import Loader from '../components/Loader.js'
import Message from '../components/Message'

const RegisterScreen = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")

  const dispatch = useDispatch()
  const history=useNavigate()
  const registerUser = useSelector((state) => state.registerUser)
  const { loading, userInfo, error } = registerUser

  useEffect(() => {
    if(userInfo){
        history('/login')
    }
  }, [history,userInfo])
  
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(register(name, email, password, address))
  }
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col md={6} sm={12}>
          <h1>Sign In</h1>
          {loading && <Loader/>}
          {error && <Message variant='danger'>{error}</Message>}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                type='text'
                placeholder='Enter the name'
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                type='email'
                placeholder='Enter the email'
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                type='password'
                placeholder='Enter the password'
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='address'>
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={address}
                type='text'
                placeholder='Enter the Address'
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterScreen
