import React from 'react';
import './MenuProduct.css';

const MenuProduct = ({item}) => {
  console.log("MP", item);
  return (
    <>
      <div className='menu-product d-flex flex-column p-3'>
      <img className='mp-image' src={item?.url} alt='pic box'  />
      <div className='mp-name-price d-flex flex-row justify-content-between'>
        <span>Combo Pancakes</span>
        <span>12$</span>
      </div>
      <span className='mp-description'>{item?.title}</span>
    </div>
    </>
  )
}

export default MenuProduct
