import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Image, Carousel } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from './../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel fade pause='hover' className='bg-dark mx-auto'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link
            to={`/product/${product._id}`}
            style={{ textDecoration: 'None', fontWeight: 'bold' }}
          >
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name} ($ {product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel
