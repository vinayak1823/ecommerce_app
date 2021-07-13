import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../components/Message'
import Loader from './../components/Loader'
import { login } from './../actions/userActions'
import FormContainer from '../components/FormContainer'
const Loginscreen = ({ location, history }) => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const redirect = location.search ? location.search.split('=')[1] : '/'
  const disptach = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  function submithandler(e) {
    e.preventDefault()
    disptach(login(email, password))
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submithandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => {
              setemail(e.target.value)
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password' className='mt-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => {
              setpassword(e.target.value)
            }}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' className='my-3'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default Loginscreen
