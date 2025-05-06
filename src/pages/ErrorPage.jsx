import React from 'react'
import "../css/ErrorPage.css"
import Button from '@mui/material/Button';
import { Link, Navigate } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h1>Something went wrong in the application   </h1>

      <Link to="/">
      <Button variant="outlined">GO Home</Button>
      </Link>
    </div>
  )
}

export default ErrorPage

