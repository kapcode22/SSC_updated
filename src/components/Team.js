import React from 'react'
import coun from "../images/counselor.jpg"
import amit from "../images/amit.png"
import tstyle from "./Teams.module.css"
import linkdin from '../images/linkedin.png'
import mail from '../images/mail.png'
import insta from '../images/instagram.png'
import divya from '../images/divya.jpg'
import abhi from '../images/abhishek.png'
const Team = () => {
  return (
    <div className={tstyle.body} >
      <div className={tstyle.container}>
        <h1 style={{ color: 'white' }}> <ul>MEET OUR TEAM :</ul></h1>
      </div>




      <div class="row cols-md-12 g-4 align-items-center justify-content-md-center">
        <div className="col-md-4 mt-5">
          <div className={tstyle.card_body}>
            <div className={tstyle.card}>
              <img src={coun} alt="Image 1" />
              <h4 style={{color:'aliceblue'}}>Dr. Sukhada</h4>
              <h5 style={{color:'aliceblue'}}>Counsellor</h5>
              <div class={tstyle.logo_row}>
                <div class={tstyle.logo_container}>
                  <img src={insta} alt="Instagram Logo" />
                </div>
                <div class={tstyle.logo_container}>
                  <img src={mail} alt="Instagram Logo" />
                </div>
                <div class={tstyle.logo_container}>
                  <img src={linkdin} alt="Instagram Logo" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className={tstyle.card_body}>

        <div className={tstyle.card}>
          <img src={divya} alt="Image 2" />
          <h4 style={{color:'aliceblue'}}>Divya Tiwari</h4>
          <h5 style={{color:'aliceblue'}}>Jt. general Secy</h5>
          <div class={tstyle.logo_row}>
            <div class={tstyle.logo_container}>
              <img src={insta} alt="Instagram Logo" />
            </div>
            <div class={tstyle.logo_container}>
              <img src={mail} alt="Instagram Logo" />
            </div>
            <div class={tstyle.logo_container}>
              <img src={linkdin} alt="Instagram Logo" />
            </div>
          </div>
        </div>
        <div className={tstyle.card}>
          <img src={abhi} alt="Image 2" />
          <h4 style={{color:'aliceblue'}}>Abhishek Anand</h4>
          <h5 style={{color:'aliceblue'}}> General Secy</h5>
          <div class={tstyle.logo_row}>
            <div class={tstyle.logo_container}>
              <img src={insta} alt="Instagram Logo" />
            </div>
            <div class={tstyle.logo_container}>
              <img src={mail} alt="Instagram Logo" />
            </div>
            <div class={tstyle.logo_container}>
              <img src={linkdin} alt="Instagram Logo" />
            </div>
          </div>
        </div>
        <div className={tstyle.card}>
          <img src={amit} alt="Image 3" />
          <h4 style={{color:'aliceblue'}}>Amit Roy</h4>
          <h5 style={{color:'aliceblue'}}>Jt. general Secy</h5>
          <div class={tstyle.logo_row}>
            <div class={tstyle.logo_container}>
              <img src={insta} alt="Instagram Logo" />
            </div>
            <div class={tstyle.logo_container}>
              <img src={mail} alt="Instagram Logo" />
            </div>
            <div class={tstyle.logo_container}>
              <img src={linkdin} alt="Instagram Logo" />
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Team
