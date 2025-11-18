import React, { useState } from 'react'
import Style from './CRMActivities.module.css'
const CRMActivities = () => {
  const[aa,setaa]=useState(null)
  const[bb,setbb]=useState(null)
  return (
   <>
     <div  className={Style.div1}>

          <div  onMouseOver={()=>setaa("box1")} className={Style.box1}>
      
                          <div className={Style.box1div1}>
                              <p><span>Overdue</span>(0) </p>
                          </div>
          
                          <div className={Style.box1div2}>
                              <ul>
                                  <li onMouseOver={()=>{setbb("box1")}}  onMouseLeave={()=>{setbb("")}}   style={{backgroundColor:aa==="box1"?"rgba(248, 246, 247, 0.2)":"",background:bb==="box1"?"rgba(176,177,198)":""}}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                  </svg><span>Quick Deal</span></li>
                              </ul>
      
                          </div>
                          <div className={Style.box1div3}>

                          </div>
      
                      </div>




                    <div onMouseOver={()=>setaa("box2")}  className={Style.box2}>
      
                          <div className={Style.box2div1}>
                              <p><span>Due today</span>(0) </p>
                          </div>
          
                          <div className={Style.box2div2}>
                              <ul>
                                  <li onMouseOver={()=>{setbb("box2")}}  onMouseLeave={()=>{setbb("")}}   style={{backgroundColor:aa==="box2"?"rgba(248, 246, 247, 0.2)":"",background:bb==="box2"?"rgba(176,177,198)":""}} ><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                  </svg></li>
                              </ul>
      
                          </div>
                          <div className={Style.box2div3}>

                          </div>
      
                      </div>






                      <div onMouseOver={()=>setaa("box3")}  className={Style.box3}>
      
                          <div className={Style.box3div1}>
                              <p><span>Due this Week</span>(0) </p>
                          </div>
          
                          <div className={Style.box3div2}>
                              <ul>
                                  <li  onMouseOver={()=>{setbb("box3")}}  onMouseLeave={()=>{setbb("")}}   style={{backgroundColor:aa==="box3"?"rgba(248, 246, 247, 0.2)":"",background:bb==="box3"?"rgba(176,177,198)":""}}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                  </svg></li>
                              </ul>
      
                          </div>
                          <div className={Style.box3div3}>

                          </div>
      
                      </div>

                       <div onMouseOver={()=>setaa("box4")}  className={Style.box4}>
      
                          <div className={Style.box4div1}>
                              <p><span>Due next Week</span>(0) </p>
                          </div>
          
                          <div className={Style.box4div2}>
                              <ul>
                                  <li  onMouseOver={()=>{setbb("box4")}}  onMouseLeave={()=>{setbb("")}}   style={{backgroundColor:aa==="box4"?"rgba(248, 246, 247, 0.2)":"",background:bb==="box4"?"rgba(176,177,198)":""}} ><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                  </svg></li>
                              </ul>
      
                          </div>
                          <div className={Style.box4div3}>

                          </div>
      
                      </div>

{/* ---------------------------------box5--------------------------- */}
                       {/* <div onMouseOver={()=>setaa("box5")}  className={Style.box5}>
      
                          <div className={Style.box5div1}>
                              <p><span>Idle</span>(0) </p>
                          </div>
          
                          <div className={Style.box5div2}>
                              <ul>
                                  <li   onMouseOver={()=>{setbb("box5")}}  onMouseLeave={()=>{setbb("")}}   style={{backgroundColor:aa==="box5"?"rgba(248, 246, 247, 0.2)":"",background:bb==="box5"?"rgba(176,177,198)":""}} ><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                  </svg></li>
                              </ul>
      
                          </div>
                          <div className={Style.box5div3}>

                          </div>
      
                      </div> */}

{/*--------------------------------box6------------------------------- */}
                      {/* <div  onMouseOver={()=>setaa("box6")}  className={Style.box6}>
      
                          <div className={Style.box6div1}>
                              <p><span>Due Later</span>(0) </p>
                          </div>
          
                          <div className={Style.box6div2}>
                              <ul>
                                  <li   onMouseOver={()=>{setbb("box6")}}  onMouseLeave={()=>{setbb("")}}   style={{backgroundColor:aa==="box6"?"rgba(248, 246, 247, 0.2)":"",background:bb==="box6"?"rgba(176,177,198)":""}} ><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                  </svg></li>
                              </ul>
      
                          </div>
                          <div className={Style.box6div3}>

                          </div>
      
                      </div> */}
     
     </div>
   </>
  )
}

export default CRMActivities