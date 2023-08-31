import React from 'react'
import first from "../images/counsellor.jpg"
import amit from "../images/amit.png"
import tstyle from "./Teams.module.css"
import linkedin from '../images/Icons/linkedin.png'
import mail from '../images/Icons/email.png'
import instagram from '../images/Icons/instagram.png'
import facebook from '../images/Icons/facebook.png'


const Team = () => {
  return (
    <div className={`${tstyle.body}`}>
      <div className='pt-3'>
        <h1 style={{ color: 'white' }}> <ul>MEET OUR TEAM :</ul></h1>
        <h3 style={{ color: 'white' }}>The Faces Behind Social Service Council </h3>
      </div>

      <div class="row cols-md-12 g-4 align-items-center justify-content-md-center">
        <div className="col-md-4 mt-5">
          <div >
            <img src={first} style={{ width: 300, height: 300, borderRadius: 300 / 2 }} alt="..." />
            <div className="card-body pr-117px">
              <h5 className={tstyle.text1}>Dr. SUKHADA</h5>
              <p className={tstyle.text1}>Counsellor</p>
            </div>
            <div className={tstyle.social}>
              </a>
            </div>
          </div>


          {/* <div className="card h-70 w-70 align-items-center justify-content-md-center mt-2 border-radius-none">
          
          </div> */}
        </div>
      </div>

      <div className='mx-3 mt-5 pt-3 pr-2 '>
        <div className="row ">


          <div className="col-md-4 mt-5 mb-5">
            <div >
              <img src={first} style={{ width: 300, height: 300, borderRadius: 300 / 2 }} alt="..." />
              <div className="card-body">
                <h5 className={tstyle.text1}>DIVYA TIWARI</h5>
                <p className={tstyle.text1}>Jt. General Secretary</p>
              </div>
              <div className={tstyle.social}>
                </a>
              </div>
            </div>

            {/* <div className="card mt-5 mb-5 align-items-center justify-content-md-center">
            
          </div> */}
          </div>

          <div className="col-md-4">

            <img src={first} style={{ width: 300, height: 300, borderRadius: 300 / 2 }} alt="..." />
            <div className="card-body">
              <h5 className={tstyle.text1}>ABHISHEK ANAND</h5>
              <p className={tstyle.text1}>General Secretary</p>
            </div>
            <div className={tstyle.social}>
              </a>
            </div>

          </div>

          <div className="col-md-4 mt-5 mb-5">

            <img src={amit} style={{ width: 300, height: 300, borderRadius: 300 / 2 }} alt="..." />
            <div className="card-body">
              <h5 className={tstyle.text1}> AMIT ROY</h5>
              <p className={tstyle.text1}>Jt. General Secretary</p>
            </div>
            <div>
            <div class={tstyle.social}>
            </a>
            <a href="mailto:your.email@example.com">
              <img alt="..." src={mail} />
            </a>
          </div>


            </div>
          </div>
        

        </div>
      </div>


    </div>
  )
}

export default Team
