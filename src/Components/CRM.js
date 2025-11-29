import React, { useState } from 'react'
import Style from './CRM.module.css'
import CRMKanban from './CRMKanban'
import CRMList from './CRMList'
import CRMActivities from './CRMActivities'
import CRMCalender from './CRMCalender'

const CRM = () => {
  const [sign, setsign] = useState(false)
  const [value, setvalue] = useState("kanban")
  const [size, setsize] = useState(false)
  const [temp, settemp] = useState(false)
  const[li,setli]=useState(false)



  return (
    <>
      <div className={Style.div1}>
        <div className={Style.div1a}>

          <div className={Style.div1abox1}>
            <ul>
              <li><button className={Style.firstbutton}><span>Deals</span>{sign === true ? <svg onClick={() => { setsign(!sign) }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-shield-x" viewBox="0 0 16 16">
                <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                <path d="M6.146 5.146a.5.5 0 0 1 .708 0L8 6.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 7l1.147 1.146a.5.5 0 0 1-.708.708L8 7.707 6.854 8.854a.5.5 0 1 1-.708-.708L7.293 7 6.146 5.854a.5.5 0 0 1 0-.708" />
              </svg> : <svg onClick={() => { setsign(!sign) }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-shield-fill-x" viewBox="0 0 16 16">
                <path d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0M6.854 5.146 8 6.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 7l1.147 1.146a.5.5 0 0 1-.708.708L8 7.707 6.854 8.854a.5.5 0 1 1-.708-.708L7.293 7 6.146 5.854a.5.5 0 1 1 .708-.708" />
              </svg>} </button></li>
              <li><button className={Style.secondbutton}><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="white" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg><span>Create</span>| <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg></button></li>
              <li> <button className={Style.thirdbutton}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-view-list" viewBox="0 0 16 16">
                <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2m0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14" />
              </svg><span>General</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg></button></li>
              <li className={Style.problemcreate}><button style={{ width: size ? "50%" : "95%", transition: "width 0.5s ease-in 0s" }} className={Style.fourbutton}><input type="" name="" id="" placeholder='Filter and search' /><svg style={{ position: "relative", right: "9px" }} onClick={() => { setsize(!size) }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg></button></li>
              <li><button className={Style.fivebutton}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" class="bi bi-gear" viewBox="0 0 16 16">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
              </svg></button></li>
            </ul>

          </div>
          <div className={Style.div1abox2}>


            <div className={Style.div1abox2a}>

              <div className={Style.div1abox2a1}>
                <ul>
                  <li onClick={() => { setvalue("kanban") }} style={{ backgroundColor: value === "kanban" ? "rgb(132, 154, 182)" : "" }} className={Style.kanban}>kanban</li>
                  <li onClick={() => { setvalue("list") }} style={{ backgroundColor: value === "list" ? "rgb(132, 154, 182)" : "" }} >List</li>
                  <li onClick={() => { setvalue("activites") }} style={{ backgroundColor: value === "activies" ? "rgb(132, 154, 182)" : "" }} >Activies</li>
                  <li onClick={() => { setvalue("calendar") }} style={{ backgroundColor: value === "calendar" ? "rgb(132, 154, 182)" : "" }} className={Style.calendar} >Calendar</li>
                </ul>

              </div>
              <div className={Style.div1abox2a2}>

                <ul>
                  <li className={Style.inbound} onClick={() => { setvalue("inbound") }} style={{ backgroundColor: value === "inbound" ? "rgb(132, 154, 182)" : "" }}> <svg style={{ position: "relative", left: "13px", bottom: "2px" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-0-circle" viewBox="0 0 16 16">
                    <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895" />
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
                  </svg>Inbound</li>
                  <li className={Style.planned} onClick={() => { setvalue("planned") }} style={{ backgroundColor: value === "planned" ? "rgb(132, 154, 182)" : "" }}> <svg style={{ position: "relative", left: "13px", bottom: "2px" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-0-circle" viewBox="0 0 16 16">
                    <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895" />
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
                  </svg>Planned</li>
                  <li className={Style.more} onClick={() => { settemp("more") }} style={{ backgroundColor: temp === "more" ? "rgb(132, 154, 182)" : "" }}> <svg style={{ position: "relative", left: "10px", bottom: "2px" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-0-circle" viewBox="0 0 16 16">
                    <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895" />
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
                  </svg>More <svg style={{ position: "relative", right: "10px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                    </svg></li>
                </ul>

              </div>




            </div>
            <div className={Style.div1abox2b}>
              <div className={Style.div1abox2b1}   >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-android" viewBox="0 0 16 16">
                  <path d="M2.76 3.061a.5.5 0 0 1 .679.2l1.283 2.352A8.9 8.9 0 0 1 8 5a8.9 8.9 0 0 1 3.278.613l1.283-2.352a.5.5 0 1 1 .878.478l-1.252 2.295C14.475 7.266 16 9.477 16 12H0c0-2.523 1.525-4.734 3.813-5.966L2.56 3.74a.5.5 0 0 1 .2-.678ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>  Automatiom rules
              </div>
              <div onClick={()=>{settemp("extension")}} className={Style.div1abox2b2}   >
                Extension  | <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg>
              </div>

            </div>
          </div>
          <div className={Style.div1abox3}>
            {value === "kanban" && <CRMKanban />}
            {value === "list" && <CRMList />}
            {value === "activites" && <CRMActivities />}
            {value === "calendar" && <CRMCalender />}
          </div>
          <div className={Style.div1abox4}>
            
            <ul>
              <li><button>Bitrix 24 <sup><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-stopwatch" viewBox="0 0 16 16">
                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
              </svg></sup></button></li>
              <li><button>English <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
              </svg></button></li>
              <li>© 2025 Bitrix24</li>
              <li>Implementation request</li>
              <li>Themes</li>
              <li>Print</li>
            </ul>

          </div>

        </div>
        <div className={Style.div1b}>

          <div className={Style.div1b1}>
            <ul>
              <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
              </svg></li>
              <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-wrench-adjustable-circle" viewBox="0 0 16 16">
                <path d="M12.496 8a4.5 4.5 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11q.04.3.04.61" />
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-1 0a7 7 0 1 0-13.202 3.249l1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.5 4.5 0 0 1-1.592-.29L4.747 14.2A7 7 0 0 0 15 8m-8.295.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27z" />
              </svg></li>
              <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-browser-firefox" viewBox="0 0 16 16">
                <path d="M13.384 3.408c.535.276 1.22 1.152 1.556 1.963a8 8 0 0 1 .503 3.897l-.009.077-.026.224A7.758 7.758 0 0 1 .006 8.257v-.04q.025-.545.114-1.082c.01-.074.075-.42.09-.489l.01-.051a6.6 6.6 0 0 1 1.041-2.35q.327-.465.725-.87.35-.358.758-.65a1.5 1.5 0 0 1 .26-.137c-.018.268-.04 1.553.268 1.943h.003a5.7 5.7 0 0 1 1.868-1.443 3.6 3.6 0 0 0 .021 1.896q.105.07.2.152c.107.09.226.207.454.433l.068.066.009.009a2 2 0 0 0 .213.18c.383.287.943.563 1.306.741.201.1.342.168.359.193l.004.008c-.012.193-.695.858-.933.858-2.206 0-2.564 1.335-2.564 1.335.087.997.714 1.839 1.517 2.357a4 4 0 0 0 .439.241q.114.05.228.094c.325.115.665.18 1.01.194 3.043.143 4.155-2.804 3.129-4.745v-.001a3 3 0 0 0-.731-.9 3 3 0 0 0-.571-.37l-.003-.002a2.68 2.68 0 0 1 1.87.454 3.92 3.92 0 0 0-3.396-1.983q-.116.001-.23.01l-.042.003V4.31h-.002a4 4 0 0 0-.8.14 7 7 0 0 0-.333-.314 2 2 0 0 0-.2-.152 4 4 0 0 1-.088-.383 5 5 0 0 1 1.352-.289l.05-.003c.052-.004.125-.01.205-.012C7.996 2.212 8.733.843 10.17.002l-.003.005.003-.001.002-.002h.002l.002-.002h.015a.02.02 0 0 1 .012.007 2.4 2.4 0 0 0 .206.48q.09.153.183.297c.49.774 1.023 1.379 1.543 1.968.771.874 1.512 1.715 2.036 3.02l-.001-.013a8 8 0 0 0-.786-2.353" />
              </svg></li>
            </ul>

          </div>
          <div className={Style.div1b2}>
            <ul>

              <li><div className={Style.icon2}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg></div></li>
              <li><div className={Style.icon1}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
              </svg></div></li>
              <li><div><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg></div></li>
              <li><div><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
              </svg></div></li>
            </ul>

          </div>

        </div>

      </div>

      {temp === "more" &&
        <div onMouseLeave={() => { settemp("") }} className={Style.morebutton}>
          <ul>
            <li> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-0-circle" viewBox="0 0 16 16">
              <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895" />
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
            </svg> <span>Employee's  inbound activities</span></li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-0-circle" viewBox="0 0 16 16">
              <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895" />
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
            </svg>  <span>Employee's  inbound activities</span></li>

          </ul>
        </div>
      }

      {temp==="extension" &&
        <div   onMouseLeave={()=>{settemp("")}} className={Style.Extension}>
          <ul>
            <li><span>Knowledge bases</span><span className={Style.hr1}><hr/></span></li>
            <li onMouseOver={()=>{setli("skb")}}   style={{backgroundColor:li==="skb"?" rgba(182, 190, 206, 0.2)":""}}>Select Knowledge base</li>
            <li  onMouseOver={()=>{setli("ckb")}}   style={{backgroundColor:li==="ckb"?"rgba(182, 190, 206, 0.2)":""}}> Create Knowledge base</li>
            <li><hr /></li>
            <li onMouseOver={()=>{setli("ss")}}  style={{backgroundColor:li==="ss"?"rgba(182, 190, 206, 0.2)":""}}>Smart scripts <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg></li>
            <li><hr /></li>
            <li onMouseOver={()=>{setli("bm")}}  style={{backgroundColor:li==="bm"?"rgba(182, 190, 206, 0.2)":""}}>Bitrix24 Market</li>
          </ul>
        </div>
      }

    </>
  )
}

export default CRM