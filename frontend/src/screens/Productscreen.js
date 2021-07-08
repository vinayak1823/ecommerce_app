import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Card, ListGroup, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
const Productscreen = ({ match }) => {
  const [product, setproduct] = useState({})
  useEffect(() => {
    axios
      .get(`/api/products/${match.params.id}`)
      .then((res) => {
        setproduct(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [match.params.id])

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price : &#8377; {product.price}</ListGroup.Item>
            <ListGroup.Item>Description : {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price :</Col>
                  <Col style={{ fontWeight: 'bold' }}>
                    &#8377; {product.price}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status :</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className='d-grid gap-2'>
                  <Button
                    className='btn btn-primary'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Productscreen
