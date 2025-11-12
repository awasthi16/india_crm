import React from 'react'
import  style from "./Body.module.css"
import { BodyLeftside } from './BodyLeftside'
import BodyRightside from './BodyRightside'

const Body = () => {
  return (
   <>
   <div className={style.box}>
    <div className={style.box1}>
      <BodyLeftside/>
    </div>
     <div className={style.box2}>
       <BodyRightside/>
    </div>
   
   </div>
   </>
  )
}

export default Body