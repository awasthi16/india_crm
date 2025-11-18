import React from 'react'
import style from "./Employee.module.css"

const Employee = () => {
    return (
        <>
            <div className={style.employeediv}>

                <div className={style.inputdiv}>

                    <div className={style.nav}>
                        <div className={style.three}>
                            <select className={style.see}></select>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                            </svg>
                            <li>Employee</li>
                        </div>
                        <li>Deparment</li>
                        <li>Email</li>
                        <li>Mobile</li>
                        <li>Date last Active</li>
                        <li>Mobile App</li>
                        <li className={style.des}>Desktop App</li>
                    </div>
                    <hr className={style.hrr} />



                    <div className={style.nav1}>
                        <div className={style.three1}>
                            <select className={style.see}></select>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                            </svg>
                            <li className={style.co}>Rajveer</li>
                        </div>
                        <li>Bitrix24</li>
                        <li className={style.co}>rajveerkushwah@53579</li>
                        {/* <li>Mobile</li> */}
                        <li>11/17/2025, 6:57 am</li>
                        <li>Not installed</li>
                        <li className={style.des}>Not installed</li>
                    </div>
                    <div className={style.hscroll}>

                    </div>
                    <br />
                    <hr />
                    <div className={style.nav2}>
                        <div className={style.sel}>
                            <span> SELECT:0/1</span>
                            <span> TOTAL: <span className={style.quantity}>Qunatity Show</span></span> </div>
                        <span>PAGES:1</span>
                        <span className={style.opt}>RECORDS:<select>
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                        </select></span>
                    </div>
                    <hr />

                    <div className={style.box3}>
                        <li className={style.depart}>CHANGE DEPARMENT</li>
                        <li className={style.create}>CREATE A CHAT</li>
                        <li className={style.action}>ACTIONS</li>
                        <li>  <select></select>   For All</li>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Employee