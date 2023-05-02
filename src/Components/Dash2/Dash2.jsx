import React from 'react'
import { Button } from 'react-bootstrap'
import './Dash2.css'

const Dash2 = () => {
  return (
    <div className='dash2-container d-flex flex-column'>
        <div className="dash2-title py-1">
          <h1>Celebrating the season of food for the whole year. Enjoy the taste that differs​.</h1>
        </div>

        <div className='d-flex flex-column flex-lg-row'>

          <div className='d-flex flex-column'>
            <p className='py-1 dash2-content'>The restaurant will open at 3pm for happy hour and dinner service starting at 5pm. We will continue to offer brunch on weekends from 10am-3pm with bottomless mimosas. We will also continue with our late night lounge on Friday and Saturdays until 2am.</p>
            <div>
              <Button className='py-1' variant="outline-secondary">VIEW MENU</Button>
            </div>
          </div>

          <div className='py-1'>
            <img className='dash2-img py-1' src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Pic holder" />
          </div>

        </div>

        <div>
            <img className='dash2-img2' src="https://images.unsplash.com/photo-1595257841889-eca2678454e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Pic holder" />
          </div>

    </div>
  )
}

export default Dash2
