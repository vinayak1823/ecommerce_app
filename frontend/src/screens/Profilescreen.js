import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../components/Message'
import Loader from './../components/Loader'
import { getUserDetails, updateUserProfile } from './../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

const Profilescreen = ({ location, history }) => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')
  const [message, setmessage] = useState(null)

  const dispatch = useDispatch()
  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails('profile'))
      } else {
        setname(user.name)
        setemail(user.email)
      }
    }
  }, [dispatch, history, userInfo, user, success])

  function submithandler(e) {
    e.preventDefault()
    if (password !== confirmpassword) {
      setmessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && (
          <Message variant='success'>Profile Updated Successfully</Message>
        )}
        {loading && <Loader />}
        <Form onSubmit={submithandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Name'
              value={name}
              onChange={(e) => {
                setname(e.target.value)
              }}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='email' className='mt-3'>
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
          <Form.Group controlId='confirmPassword' className='mt-3'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm Password'
              value={confirmpassword}
              onChange={(e) => {
                setconfirmpassword(e.target.value)
              }}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary' className='my-3'>
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My orders</h2>
      </Col>
    </Row>
  )
}

export default Profilescreen
