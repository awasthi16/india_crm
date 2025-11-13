import React, { useState } from 'react'
import style from './Login.module.css'

const Login = () => {

    const[a1,seta1]=useState("")
    const[b1,setb1]=useState("")
    const[c1,setc1]=useState("")
    const[d1,setd1]=useState("")

    // const[aa1,setaa1]=useState("")

    function ass(){
        if(a1==""&&b1==""&&c1==""){
            alert("please enter all details")
        }
        else {
            console.log(a1)
            console.log(b1)
            console.log(a1)
            seta1("")
            setb1("")
            setc1("")
        }
    }


  return (
   <>
   
   <div className={style.login}>

    <div className={style.login1}>

       <div className={style.login2}>
         <p>Sign up</p>  <p> Login</p>
          </div> 

          <p>Signup</p>

        <p>Log in to Bitrix24</p>

        <span>
            <input className={style.login3} type='text' value={a1} onChange={(e)=>{seta1(e.target.value)}} placeholder='Full Name'></input>
        </span>
        <span>
            <input className={style.login3} type='text' value={b1} onChange={(e)=>{setb1(e.target.value)}} placeholder=' Mobile number'></input>
        </span>
        <span>
            <input className={style.login3} type='text' value={c1} onChange={(e)=>{setc1(e.target.value)}} placeholder=' Password'></input>
        </span>
        
        <button className={style.button} onClick={ass}>Submit</button>

    </div>


   </div>

   <div className={style.sign}>

    <div className={style.sign1}>


        <p>Login</p>

        <p>Log in to Bitrix24</p>

        <span>
            <input className={style.login3} type='text' value={a1} onChange={(e)=>{seta1(e.target.value)}} placeholder='Full Name'></input>
        </span>
        <span>
            <input className={style.login3} type='text' value={b1} onChange={(e)=>{setb1(e.target.value)}} placeholder=' Mobile number'></input>
        </span>
        <span>
            <input className={style.login3} type='text' value={d1} onChange={(e)=>{setd1(e.target.value)}} placeholder=' E-mail'></input>
        </span>
        <span>
            <input className={style.login3} type='text' value={c1} onChange={(e)=>{setc1(e.target.value)}} placeholder=' Password'></input>
        </span>
        
        <button className={style.button} onClick={ass}>Submit</button>


    </div>


   </div>
   
   
   
   </>
  )
}

export default Login