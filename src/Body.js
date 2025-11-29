import React from 'react'
import  style from "./Body.module.css"
import { BodyLeftside } from './BodyLeftside'
import BodyRightside from './BodyRightside'
import { Outlet } from 'react-router-dom'

const Body = () => {
  const auth=JSON.parse(localStorage.getItem("user"));
  return (
   <>
   {auth&&<div className={style.box}>

    <div className={style.box1}>
      <BodyLeftside/>
    </div>
     <div className={style.box2}>
       <BodyRightside/>
    </div>
   
   </div>
}
<Outlet/>
   </>
  )
}

export default Body