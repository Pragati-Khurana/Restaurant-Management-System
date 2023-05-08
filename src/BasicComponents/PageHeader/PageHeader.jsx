import React from 'react'
import './PageHeader.css'

const PageHeader = ({bgImg, title, description}) => {
  return (
    <div>
      <div className='heading d-flex flex-column' style={{backgroundImage: `url(${bgImg})`}}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default PageHeader
