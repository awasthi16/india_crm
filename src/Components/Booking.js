import React from 'react'
import style from './Booking.module.css'

const Booking = () => {
  return (
   <>
     <div className={style.Bookingdiv1}>
          <div className={style.bookingmaindiv}>
                <div className={style.add}>
                    <div className={style.addfix}>
                        <span className={style.icon}> </span>
                        <div className={style.icon1}>           <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="blue" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg></div>
                        <li>Add a resource</li>
                    </div>
                    <hr />
                     <div className={style.addfix}>
                        <span className={style.icon}> </span>
                        <div className={style.icon1}>           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg></div>
                        <li className={style.make}>Make resource bundle</li>
                    </div>
                    <hr />
                </div>

            </div>
    </div>
   </>
  )
}

export default Booking