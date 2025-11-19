import React from 'react'
import Style from './Esignature.module.css'

const Esignature = () => {
  return (
    <>

      <div className={Style.div1}>
        <div className={Style.box1}>

          <ul>
            <li><span>Sign and manage</span></li>
            <li><button><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>Sign</button></li>
          </ul>

        </div>
        <div className={Style.box2}>

          <div className={Style.main}>

            <div className={Style.mainbox1}>

              <div className={Style.mainbox1div1}>
                <p className={Style.large}>Bitrix24 Sign</p>
                <p className={Style.small}>Free. Efficient. Paperless.</p>
              </div>
              <div className={Style.mainbox1div2}>
                <ul>
                  <li><span><svg style={{ position: "relative", top: "2px" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" class="bi bi-check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                  </svg></span> Sign as many documents as you need via SMS, email or WhatsApp.
                  </li>
                  <li> <span><svg style={{ position: "relative", top: "2px" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" class="bi bi-check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                  </svg></span>Create document templates quickly and easily.
                  </li>
                  <li> <span><svg style={{ position: "relative", top: "2px" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" class="bi bi-check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                  </svg></span>Send documents for signing from the CRM and make deals close faster.</li>
                  <li> <span><svg style={{ position: "relative", top: "2px" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" class="bi bi-check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                  </svg></span>Save money and time on hard copies, postal and courier services.</li>
                  <li> <span><svg style={{ position: "relative", top: "2px" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" class="bi bi-check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                  </svg></span>Automate the signing process.</li>

                </ul>

              </div>
               <div className={Style.mainbox1div3}>

                <button className={Style.start}>START</button>
                <button className={Style.LearnMore}>LEARN MORE</button>
                
               </div>


            </div>

            <div className={Style.mainbox2}>

              <img style={{ width: "400px", height: "700px" }} src="https://b24-yypk25.bitrix24.in/bitrix/components/bitrix/sign.kanban/templates/.default/images/stub/phone.png" alt="" />

            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default Esignature