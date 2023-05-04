import React, { useEffect, useState } from 'react'
import MenuProducts from '../../Routes/Navigation/MenuProducts/MenuProducts';

const Menu = () => {
    const [res, setRes] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        let obj = await fetch("https://jsonplaceholder.typicode.com/photos"); 
        let temp = await obj.json();
        setRes(temp);
        setRes(temp.slice(0, 20));   
        console.log("1", res);    
      }
      fetchData();
      console.log("2")
    }, [])

    console.log("3",res);
    
  return (
    <div>
      {/* {
        res?.map((item)=> (
          <h1>{item.title}</h1>
        ))
      } */}
      <MenuProducts res={res} />
    </div>
  )
}

export default Menu