import React, { useEffect, useState } from 'react'
import style from './Login.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Login = () => {

    const [a1, seta1] = useState("")
    const [b1, setb1] = useState("")
    const [c1, setc1] = useState("")
   
   
const [sign, setsign] = useState("signup")
    
   const add=async()=>{
    try {
    await axios.post("http://localhost:5000/tasks", {
      name: a1,
      mobile: b1,
      password: c1
    });

    console.log("Registration Success");
    setsign("login"); // now it will run
    
  } catch (error) {
    console.log("Error while registration:", error.response?.data || error.message);
    alert(error.response?.data?.message || "Registration failed!");
  }
}


useEffect(() => {
  console.log("Sign state changed to:", sign);
}, [sign]);

const login=async()=>{    
    try {
      const islogin=await axios.post("http://localhost:5000/login", {
      name: a1,
      password: c1
    });

    if(islogin)
    {
           localStorage.setItem("user",JSON.stringify({name:a1}));
           console.log(localStorage.getItem("user"))
    }
    else{
           setsign("signup");
    }
} catch (err) {
  console.log("Registration Error:", err); // 👉 ADD THIS
}
   }

   
    return (
        <>

            <div className={style.login}>

                <div className={style.login1}>

                    <div className={style.login2}>
                        <p onClick={() => { setsign("signup") }}>Sign up</p>  <p onClick={() => { setsign("login") }}> Login</p>
                    </div>
                       {sign === "signup" && <div className={style.signupdiv}>
                        <p>Signup</p>

                        <p>Signup in to Bitrix24</p>

                        <span>
                            <input className={style.login3} type='text' value={a1} onChange={(e) => { seta1(e.target.value) }} placeholder='Full Name'></input>
                        </span>
                        <span>
                            <input className={style.login3} type='text' value={b1} onChange={(e) => { setb1(e.target.value) }} placeholder=' Mobile number'></input>
                        </span>
                        <span>
                            <input className={style.login3} type='text' value={c1} onChange={(e) => { setc1(e.target.value) }} placeholder=' Password'></input>
                        </span>

                        <button className={style.button} onClick={()=>{add()}}><Link to="/">Submit</Link></button>

                    </div>
                    }

                    {sign === "login" && <div className={style.logindiv}>

                        <p>Login</p>

                        <p>Log in to Bitrix24</p>

                        <span>
                            <input className={style.login3} type='text'   value={a1} onChange={(e) => { seta1(e.target.value) }} placeholder='Full Name'></input>
                        </span>
                      
                        <span>
                            <input className={style.login3} type='text' value={c1}  onChange={(e) => { setc1(e.target.value) }} placeholder=' Password'></input>
                        </span>

                        <button className={style.button} onClick={()=>{login()}}>Submit</button>


                    </div>
                    }


                </div>


            </div>










        </>
    )
}

export default Login