import React, { useState } from 'react'
import Style from './Automation.module.css'



const Automation = () => {
  const [size, setsize] = useState(false)
  const [color, setcolor] = useState("details")
  const [color1, setcolor1] = useState("id")
  const [arr, setarr] = useState("ID")
  return (
    <>
      <div className={Style.div1}>

        <div className={Style.div1a}>
          <div className={Style.div1abox1}>
            <p>Robotic Process Automation (RPA)</p>
          </div>
          <div className={Style.div1abox2}>
            <button style={{ width: size ? "50%" : "95%", transition: "width 0.5s ease-in 0s" }} className={Style.fourbutton}><input type="" name="" id="" placeholder='Filter and search' /><svg style={{ position: "relative", right: "9px" }} onClick={() => { setsize(!size) }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg></button>

          </div>
        </div>
        <div className={Style.div1b}>

          <div className={Style.div1bbox1}>
            <ul>
              <li style={{ borderBottom: color === "details" ? "2px solid white" : "black" }} onClick={() => { setcolor("details") }}>Details</li>
              <li style={{ borderBottom: color === "list" ? "2px solid white" : "" }} onClick={() => { setcolor("list") }}>List</li>
            </ul>

          </div>
          <div className={Style.div1bbox2}>

            {color === "details" && <div className={Style.firstBox}>

              <div className={Style.firstBoxBox1}>

                <div className={Style.circle}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                  </svg>

                </div>

              </div>
              <div className={Style.firstBoxBox2}>
                <p>New Workflow</p>
              </div>

            </div>}


            {color === "list" && <div className={Style.secondBox}>

              <div className={Style.secondBoxBox1}>
                <ul>
                  <li onMouseOver={() => { setcolor1("id") }} onMouseLeave={() => setcolor1(null)} style={{ borderRight: color1 === "id" ? "2px solid lightgray" : "" }}><svg style={{ position: "relative", left: "10px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="lightgray" class="bi bi-gear-fill" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                  </svg> <span style={{ position: "relative", left: "10px" }}>ID   {arr === "ID" ? <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                  </svg> : <svg onClick={() => { setarr("ID") }} style={{ position: "relative", left: "5px" }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                  </svg>}</span></li>
                  <li onMouseOver={() => { setcolor1("name") }} onMouseLeave={() => setcolor1(null)} style={{ borderRight: color1 === "name" ? "2px solid lightgray" : "" }}><span >Name</span>{arr === "Name" ? <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                  </svg> : <svg onClick={() => { setarr("Name") }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                  </svg>}</li>
                  <li><span>Created by</span> {arr === "Createby" ? <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                  </svg> : <svg onClick={() => { setarr("Createby") }} xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                  </svg>}</li>
                </ul>

              </div>
              <div className={Style.secondBoxBox2}>

              </div>

            </div>}



          </div>

        </div>

      </div>

    </>
  )
}

export default Automation