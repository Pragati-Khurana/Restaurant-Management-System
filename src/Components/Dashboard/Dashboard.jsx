import React from 'react'
import DashCarousel from '../DashCarousel.jsx/DashCarousel'
import Dash from '../Dash/Dash';
import Dash2 from '../Dash2/Dash2';

const Dashboard = () => {
  return (
    <div>
      <Dash />
      <DashCarousel />
      <Dash2 />
    </div>
  )
}

export default Dashboard
