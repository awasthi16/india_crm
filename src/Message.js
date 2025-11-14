import React, { useState } from 'react'
import style from "./Message.module.css"

const Message = () => {
  const [a, seta] = useState("p1")
  return (
    <>
      <div className={style.messagemainbox}>
        <div className={style.message1}>
          <div className={style.Nav}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-distribute-vertical" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5m0 13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5" />
              <path d="M2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg>
            <div className={style.Navinput}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
              <input text="text" placeholder='Find Employee or Chat'></input>
            </div>

            <div className={style.Navicon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="blue" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
              </svg>
            </div></div> <br />
          <hr /><br />


          {/* ...............................................click function................................................................................. */}
          <div className={style.click4div}>

            <span     onClick={() => { seta("p1") }}>
              <div style={{background:a==="p1"?"rgb(0,172,227":"none"}} className={style.picmain}>
                <div className={style.pic1}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-1-circle" viewBox="0 0 16 16">
                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
                  </svg> </div>
                <div className={style.pic2}>
                  <li className={style.time}>  Bitrix24 Support <span className={style.time11}> 8:58 am</span></li>
                  <li>  Hi there! I'm an AI support agent, your</li>
                  <li> virtual assistant. I'm happy to answer any........</li>
                </div> </div>      </span> <br />

            <span onClick={() => { seta("p2") }}>
              <div style={{background:a==="p2"?"rgb(0,172,227":"none"}} className={style.picmain}>
                <div className={style.pic1}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                    <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
                  </svg> </div>
                <div className={style.pic2}>
                  <li className={style.time}>  Company News <span className={style.time1}> 8:49 am</span></li>
                  <li> Share important information and news.</li>
                  <li> Follow to remain informed about the latest.........</li>
                </div> </div>  </span><br />

            <span onClick={() => { seta("p3") }}>
              <div style={{background:a==="p3"?"rgb(0,172,227":"none"}} className={style.picmain}>
                <div className={style.pic1}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-chat-square-text" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                  </svg> </div>
                <div className={style.pic2}>
                  <li className={style.time}>  General chat <span className={style.time2}> 8:43 am</span></li>
                  <li> Use the general chat to communicate,</li>
                  <li> bounce ideas around and share your........</li>
                </div> </div>    </span> <br />

            <span onClick={() => { seta("p4") }}> 
                <div style={{background:a==="p4"?"rgb(0,172,227":"none"}} className={style.picmain}>
              <div  className={style.pic1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-file-earmark-ppt-fill" viewBox="0 0 16 16">
                  <path d="M8.188 10H7V6.5h1.188a1.75 1.75 0 1 1 0 3.5" />
                  <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2zM7 5.5a1 1 0 0 0-1 1V13a.5.5 0 0 0 1 0v-2h1.188a2.75 2.75 0 0 0 0-5.5z" />
                </svg> </div>
              <div className={style.pic2}>
                <li className={style.time}> Notes <span className={style.time3}> 8:43 am</span></li>
                <li> Visible to you only</li>
                {/* <li> virtual assistant. I'm happy to answer any........</li> */}
              </div> </div> </span> <br />
          </div>  </div>

        {/* .......................................................................................................................... */}
        <div className={style.message2}>
          {a === "p1" &&  <div  onClickr={() => { seta(!a) }} className={style.aa1}>
            <div className={style.clickNav}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-1-circle" viewBox="0 0 16 16">
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
              </svg>
              <div className={style.clicknav}>
                <li className={style.bit}>  Bitrix24 Support <span className={style.bit1}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-r-square" viewBox="0 0 16 16">
                    <path d="M5.5 4.002h3.11c1.71 0 2.741.973 2.741 2.46 0 1.138-.667 1.94-1.495 2.24L11.5 12H9.98L8.52 8.924H6.836V12H5.5zm1.335 1.09v2.777h1.549c.995 0 1.573-.463 1.573-1.36 0-.913-.596-1.417-1.537-1.417z" />
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                  </svg> </span></li> </div> </div>

            {/* <div> </div> */}
            <span className={style.today}>Today</span>

            <div className={style.bitrix24}>
              <div className={style.para}>
                <li className={style.time}>  Bitrix24 Support</li>
                <li>Hi there! I'm an AI support agent, your virtual assistant. I'm happy to answer any questions about</li>
                <li>Bitrix24 and provide on its functionality. You are welcome to contact me at any moment - I'm</li>
                <li>always here to assist you and make your experience with our service as comfortable as possible!</li>
                <li>You can read more about my functions and capabilities in the documentation -</li>
                <li className={style.http}>https://helpdesk.bitrix24.com/open/24410660/.</li>  <br />
                <li className={style.http1}>https://helpdesk.bitrix24.com/open/24410660/.</li>  <br />
                <li>The AI support agent is a friendly virtual assistant that enhances your Bitrix24 experience by</li>
                <li>providing quick and clear answers in support chats. ...</li>  <li></li> </div>   </div>

          </div>}



          {a === "p2" && <div onClickr={() => { seta(!a) }} className={style.aa2} >
            <div className={style.clickNav}>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
              </svg>
              <div className={style.clicknav}>
                <li className={style.bit}> Company News <span className={style.bit1}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-r-square" viewBox="0 0 16 16">
                    <path d="M5.5 4.002h3.11c1.71 0 2.741.973 2.741 2.46 0 1.138-.667 1.94-1.495 2.24L11.5 12H9.98L8.52 8.924H6.836V12H5.5zm1.335 1.09v2.777h1.549c.995 0 1.573-.463 1.573-1.36 0-.913-.596-1.417-1.537-1.417z" />
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                  </svg> </span></li> </div> </div>


            <span className={style.today}>Today</span>

            <div className={style.bitrix241}>
              {/* <div className={style.para}>
                <li className={style.time}>  Bitrix24 Support</li>
         
                <li>The AI support agent is a friendly virtual assistant that enhances your Bitrix24 experience by</li>
                <li>providing quick and clear answers in support chats. ...</li>  <li></li> 
                
                </div>   */}
                       <div className={style.pic24}> </div>
                            <div className={style.news}>
                              <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
  <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
</svg> Compnay News</li>
                               <li>Post company news are anncouned</li>
                                <li>keeps up on the developers</li>
                                 <li>leaves comments and likes</li>

                               </div>

                 </div>
          </div>}


          {a === "p3" && <div onClickr={() => { seta(!a) }} className={style.aa3} >
            <div className={style.clickNav}>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-chat-square-text" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
              </svg>
              <div className={style.clicknav}>
                <li className={style.bit}> General chat<span className={style.bit1}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-r-square" viewBox="0 0 16 16">
                    <path d="M5.5 4.002h3.11c1.71 0 2.741.973 2.741 2.46 0 1.138-.667 1.94-1.495 2.24L11.5 12H9.98L8.52 8.924H6.836V12H5.5zm1.335 1.09v2.777h1.549c.995 0 1.573-.463 1.573-1.36 0-.913-.596-1.417-1.537-1.417z" />
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                  </svg> </span></li> </div> </div>


            <span className={style.today}>Today</span>

            <div className={style.bitrix24}>
              <div className={style.para}>
                <li className={style.time}>  Bitrix24 Support</li>
                <li>Hi there! I'm an AI support agent, your virtual assistant. I'm happy to answer any questions about</li>
                <li>Bitrix24 and provide on its functionality. You are welcome to contact me at any moment - I'm</li>
                <li>always here to assist you and make your experience with our service as comfortable as possible!</li>
                <li>You can read more about my functions and capabilities in the documentation -</li>
                <li className={style.http}>https://helpdesk.bitrix24.com/open/24410660/.</li>  <br />
                <li className={style.http1}>https://helpdesk.bitrix24.com/open/24410660/.</li>  <br />
                <li>The AI support agent is a friendly virtual assistant that enhances your Bitrix24 experience by</li>
                <li>providing quick and clear answers in support chats. ...</li>  <li></li> </div>   </div>
          </div>}



          {a === "p4" && <div onClickr={() => { seta(!a) }} className={style.aa4} >
            <div className={style.clickNav}>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-file-earmark-ppt-fill" viewBox="0 0 16 16">
                <path d="M8.188 10H7V6.5h1.188a1.75 1.75 0 1 1 0 3.5" />
                <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2zM7 5.5a1 1 0 0 0-1 1V13a.5.5 0 0 0 1 0v-2h1.188a2.75 2.75 0 0 0 0-5.5z" />
              </svg>
              <div className={style.clicknav}>
                <li className={style.bit}> Notes <span className={style.bit1}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-r-square" viewBox="0 0 16 16">
                    <path d="M5.5 4.002h3.11c1.71 0 2.741.973 2.741 2.46 0 1.138-.667 1.94-1.495 2.24L11.5 12H9.98L8.52 8.924H6.836V12H5.5zm1.335 1.09v2.777h1.549c.995 0 1.573-.463 1.573-1.36 0-.913-.596-1.417-1.537-1.417z" />
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                  </svg> </span></li> </div> </div>


            <span className={style.today}>Today</span>

            <div className={style.bitrix24}>
              <div className={style.para}>
                <li className={style.time}>  Bitrix24 Support</li>
                <li>Hi there! I'm an AI support agent, your virtual assistant. I'm happy to answer any questions about</li>
                <li>Bitrix24 and provide on its functionality. You are welcome to contact me at any moment - I'm</li>
                <li>always here to assist you and make your experience with our service as comfortable as possible!</li>
                <li>You can read more about my functions and capabilities in the documentation -</li>
                <li className={style.http}>https://helpdesk.bitrix24.com/open/24410660/.</li>  <br />
                <li className={style.http1}>https://helpdesk.bitrix24.com/open/24410660/.</li>  <br />
                <li>The AI support agent is a friendly virtual assistant that enhances your Bitrix24 experience by</li>
                <li>providing quick and clear answers in support chats. ...</li>  <li></li> </div>   </div>
          </div>}



        </div>

      </div>
    </>
  )
}

export default Message