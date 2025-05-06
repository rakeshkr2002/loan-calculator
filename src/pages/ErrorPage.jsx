import React from 'react'
import "../css/ErrorPage.css"
import Button from '@mui/material/Button';

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h1>Something went wrong in the application   </h1>
      <Button variant="outlined">GO Home</Button>
    </div>
  )
}

export default ErrorPage

