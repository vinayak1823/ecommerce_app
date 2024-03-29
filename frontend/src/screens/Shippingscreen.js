import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from '../components/CheckoutSteps'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from './../actions/cartActions'

const Shippingscreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const dispatch = useDispatch()
  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)
  function submitHandler(e) {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    history.push('/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address' className='my-3'>
          <Form.Label style={{ fontWeight: 'bold' }}>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => {
              setAddress(e.target.value)
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='city' className='my-3'>
          <Form.Label style={{ fontWeight: 'bold' }}>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => {
              setCity(e.target.value)
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='postalCode' className='my-3'>
          <Form.Label style={{ fontWeight: 'bold' }}>Postal Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Postal Code'
            value={postalCode}
            required
            onChange={(e) => {
              setPostalCode(e.target.value)
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='country' className='my-3'>
          <Form.Label style={{ fontWeight: 'bold' }}>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Country'
            value={country}
            required
            onChange={(e) => {
              setCountry(e.target.value)
            }}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' className='my-3'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default Shippingscreen
