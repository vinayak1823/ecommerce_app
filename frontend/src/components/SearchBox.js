import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
const SearchBox = ({ history }) => {
  const [keyword, setkeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form
      onSubmit={submitHandler}
      style={{ display: 'flex' }}
      className='frmctrl'
    >
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => {
          setkeyword(e.target.value)
        }}
        placeholder='Search Products....'
        className='ms-sm-2 me-sm-3 frminpt'
      ></Form.Control>
      <Button
        type='submit'
        variant='outline-success'
        className='py-2 px-3 frmbtn'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          className='bi bi-search'
          viewBox='0 0 16 16'
          width='16'
          height='16'
        >
          <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
        </svg>
      </Button>
    </Form>
  )
}

export default SearchBox
