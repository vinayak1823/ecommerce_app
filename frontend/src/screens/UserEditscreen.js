import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../components/Message'
import Loader from './../components/Loader'
import { getUserDetails } from './../actions/userActions'
import FormContainer from '../components/FormContainer'
const UserEditscreen = ({ match, history }) => {
  const userId = match.params.id

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  useEffect(() => {
    if (!user.name || user._id !== userId) {
      dispatch(getUserDetails(userId))
    } else {
      setname(user.name)
      setemail(user.email)
      setIsAdmin(user.isAdmin)
    }
  }, [user, dispatch, userId])

  function submithandler(e) {
    e.preventDefault()
  }

  return (
    <>
      <Link to={'/admin/userlist'} className=' btn btn-light my-3'>
        {' '}
        GO Back
      </Link>

      <FormContainer>
        <h1>Edit User</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
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
            <Form.Group controlId='isadmin' className='mt-3'>
              <Form.Check
                type='checkbox'
                label='Is Admin'
                checked={isAdmin}
                onChange={(e) => {
                  setIsAdmin(e.target.checked)
                }}
              ></Form.Check>
            </Form.Group>

            <Button type='submit' variant='primary' className='my-3'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default UserEditscreen
