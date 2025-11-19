import React from 'react'
import Style from './Builder.module.css'

const Builder = () => {
  return (
   <>
     <div className={Style.div1}>
         <div  className={Style.div1a}>
         <p>BI Builder</p>
         </div>
          <div  className={Style.div1b}>
            <div className={Style.box1}>

              <p  className={Style.large}>BI Builder is not available on your plan.</p>
              <p className={Style.small}>Please contact your supervisor or Bitrix24 administrator.</p>
            </div>

          </div>
       </div>
   </>
  )
}

export default Builder