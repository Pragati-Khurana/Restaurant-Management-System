import React from 'react'
import { Button } from 'react-bootstrap';
import './Dash.css';
import { useNavigate } from 'react-router-dom';

const Dash = () => {
  const Navigate = useNavigate();
  return (
    <div className='dash-container d-flex flex-column flex-lg-row'>
      <div className='d-flex flex-column py-3'>
        <div className='sub-title py-1'>You cannot buy a tradition, nor you can accelerate it</div>
        <h1 className='title py-1'>We don’t just cook we thread you to delicacies...</h1>
        <div className='sub-title py-1'>HAPPY HOUR</div>
        <p className='py-1 dash-content'>The restaurant will open at 3pm for happy hour and dinner service starting at 5pm. We will continue to offer brunch on weekends from 10am-3pm with bottomless mimosas. We will also continue with our late night lounge on Friday and Saturdays until 2am.</p>
        <div>
        <Button className='py-1' variant="outline-secondary" onClick={() => Navigate("/reserve-table")}>RESERVATION</Button>
        </div>
      </div>
      <div>
        <img className='dash-img' src="https://img.freepik.com/free-photo/male-chef-putting-salad-plate_23-2148763188.jpg?size=626&ext=jpg&ga=GA1.2.1885982019.1676543664&semt=sph" alt="Pic holder" />
      </div>
    </div>
  )
}

export default Dash
