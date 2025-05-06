import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../css/Dashboard.css"

const Dashboard = () => {


  return (
    <div className='dashboard'>
      <div>
      <p>Loan Calculator Dashboard</p>
      </div>
      <div className='fileds'>
      <TextField
          required
          id="outlined-required"
          label="Loan Amount"
          defaultValue="100000"
        />
        <TextField
          required
          id="outlined-required"
          label="Intrest Rate (%)"
          defaultValue="8.5"
        />
        <TextField
          required
          id="outlined-required"
          label="Term (years)"
          defaultValue="5"
        />
      </div>
      <div>
      <Button variant="contained">Calculate</Button>
      </div>
     
    </div>
  )
}

export default Dashboard
