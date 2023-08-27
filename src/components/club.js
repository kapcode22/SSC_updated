import React from 'react'
import stylec from './club.module.css'
import spc from '../images/spc.jpg'
import stc from '../images/stc.jpeg'

const club = () => {
  return (
    <div>
      
      <div className={stylec.image_container} >
       {/* <img  src={image1} alt='...'></img> */}
       <h3 className={stylec.h3}>Social Project Club</h3>
       </div>

       <div  >
        <h1 className={stylec.text}> About us</h1>
       </div>


        <div  className={stylec.midcontainer}>
          <div className="column">
           <img src={spc} alt='...'></img>
          </div>
          <div className="column mt-5 mx-5">
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias beatae consequuntur rem
              pariatur explicabo facere corrupti necessitatibus non! Adipisci quibusdam vero asperiores eos fugiat?
              </p>
          </div>
        </div>

        <div>
        <h1 className={stylec.text}> Our Events</h1>
         {/* <div className={stylec.eventcontainer}></div> */}
            <div className={stylec.cardcontainer}>
            <div class="card text-bg-dark  mb-3" style={{maxWidth:'650px'}}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={spc} class="card-img-top img-fluid mx-auto h-100 rounded" alt="..."/>
                </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                   <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card text-bg-dark mb-3" style={{maxWidth:'650px'}}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={stc} class="card-img-top img-fluid mx-auto h-100 rounded" alt="..."/>
                </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                   <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card text-bg-dark mb-3" style={{maxWidth:'650px'}}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={spc} class="card-img-top img-fluid mx-auto h-100 rounded" alt="..."/>
                </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                   <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
            </div>
        </div>

        <div>
          <h3 className='mt-5'>Meet Our Team</h3>
          <div class="teamcontainer mt-5">
           <img src={spc} alt="..." class="rounded_image" style={{borderColor:'black'}}/>
           <img src={spc} alt="..." class="rounded_image"/>
           <img src={spc} alt="..." class="rounded_image"/>
          </div>



        </div>
      
    </div>
  )
}

export default club
