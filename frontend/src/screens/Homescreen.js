import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
const Homescreen = () => {
  const [products, setproducts] = useState([])

  useEffect(() => {
    axios
      .get('/api/products')
      .then((res) => {
        setproducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <h1>Lastest Products</h1>
      <Row>
        {products.map((p) => (
          <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={p} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Homescreen
