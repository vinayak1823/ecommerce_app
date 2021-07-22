import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../components/Message'
import Loader from './../components/Loader'
import FormContainer from '../components/FormContainer'
import { listproductdetails } from '../actions/productActions'

const ProductEditscreen = ({ match, history }) => {
  const productId = match.params.id

  const [name, setname] = useState('')
  const [price, setprice] = useState(0)
  const [image, setimage] = useState('')
  const [brand, setbrand] = useState('')
  const [category, setcategory] = useState('')
  const [countInStock, setcountInStock] = useState(0)
  const [description, setdescription] = useState('')

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    if (!product.name || product._id !== productId) {
      dispatch(listproductdetails(productId))
    } else {
      setname(product.name)
      setprice(product.price)
      setimage(product.image)
      setbrand(product.brand)
      setcategory(product.category)
      setcountInStock(product.countInStock)
      setdescription(product.description)
    }
  }, [product, dispatch, productId])

  function submithandler(e) {
    e.preventDefault()
    //UPDATE PRODUCT
  }

  return (
    <>
      <Link to={'/admin/productlist'} className=' btn btn-light my-3'>
        {' '}
        GO Back
      </Link>

      <FormContainer>
        <h1>Edit Product</h1>
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

            <Form.Group controlId='price' className='mt-3'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => {
                  setprice(e.target.value)
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image' className='mt-3'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => {
                  setimage(e.target.value)
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='brand' className='mt-3'>
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Brand'
                value={brand}
                onChange={(e) => {
                  setbrand(e.target.value)
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category' className='mt-3'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Category'
                value={category}
                onChange={(e) => {
                  setcategory(e.target.value)
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='countInStock' className='mt-3'>
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter Count In Stock'
                value={countInStock}
                onChange={(e) => {
                  setcountInStock(e.target.value)
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description' className='mt-3'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Description'
                value={description}
                onChange={(e) => {
                  setdescription(e.target.value)
                }}
              ></Form.Control>
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

export default ProductEditscreen
