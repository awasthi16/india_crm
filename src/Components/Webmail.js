import React from 'react'
import Style from './Webmail.module.css'

const Webmail = () => {
  return (
    <>
      <div className={Style.div1}>

        <div className={Style.div1a}>
          <p><span>Mailbox Integration</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-brilliance" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7" />
          </svg></p>
        </div>
        <div className={Style.div1b}>
          <span>Use and manage your mailbox in Bitrix24</span>
        </div>
        <div className={Style.div1c}>
          <div className={Style.box}>
            <div className={Style.box1}>

              <ul>
                <li><img src="/Gmail-Logo-PNG-Images.png" /></li>
                <li><span>Gmail</span></li>
              </ul>

            </div>


            <div className={Style.box1}>

              <ul>
                <li><img src="/Ooutlook.webp" /></li>
                <li><span>Outlook</span></li>
              </ul>

            </div>



            <div className={Style.box1}>

              <ul>
                <li><img src="/icloud.png"  /></li>
                <li><span>iCloud</span></li>
              </ul>

            </div>



            <div className={Style.box1}>

              <ul>
                <li><img src="/office.png" /></li>
                <li><span>Office365</span></li>
              </ul>

            </div>

            <div className={Style.box1}>

              <ul>
                <li><img src="/exchangelogo.webp" /></li>
                <li><span>Exchange</span></li>
              </ul>

            </div>




            <div className={Style.box1}>

              <ul>
                <li><img src="/yaho.jpg" /></li>
                <li><span>Yahoo!</span></li>
              </ul>

            </div>



            <div className={Style.box1}>

              <ul>
                <li><img src="/aolimage.png" /></li>
                <li><span>Aol</span></li>
              </ul>

            </div>


            <div className={Style.box1}>

              <ul>
                <li><img src="/custom-mailbox.png" /></li>
                <li><span>Custom mailbox</span></li>
                <li style={{ position: "relative", bottom: "16px", fontSize: "14px" }}>IMAP+SMTP</li>
              </ul>

            </div>



          </div>

        </div>

      </div>
    </>
  )
}

export default Webmail