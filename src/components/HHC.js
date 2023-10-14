import React from 'react'
import hstyles from './hhc.module.css'
import medi from '../images/medi.jpeg'
import sameer from '../images/Sameer.jpg'
import rit from '../images/Ritwij.jpg'
import HHC2 from '../images/HHC_1.jpg'
import HHC3 from '../images/HHC_2.jpg'
import HHC4 from '../images/HHC3.jpg'
import khus from '../images/khus.jpg'
import HHC from '../images/HHC_logo.jpg'
import spg from '../images/spg.jpeg'
import mmc from '../images/mmc.jpeg'
import Typehhc from "./Typehhc"
import { AiFillInstagram, AiFillLinkedin, AiFillMail } from "react-icons/ai";
const hhc = () => {
  const team = [
    { name: "Ritwij Verma", img: rit, post: "Joint Secretary", instalink: "https://www.instagram.com/ritwijverma/", maillink: "mailto:", linkdinlink: "https://www.linkedin.com/in/anupama-solankey-24b10a259/",},
    { name: "Sameer Srivastava", img: sameer, post: "General Secretary", instalink: "https://www.instagram.com/sameersrivastava__/", maillink: "mailto:vivek.kumar.bce21@itbhu.ac.in", linkdinlink: "https://www.linkedin.com/in/vivek-kumar-8049b6227",},
    { name: "Khushboo", img: khus, post: "Joint Secretary", instalink: "https://www.instagram.com/khushboo_2225/", maillink: "mailto:jatinkumar.goyal.che21@itbhu.ac.in", linkdinlink: "https://www.linkedin.com/in/jatin-goyal-a65749247",},
  ];

    return (
      <div>
        <div className={`${hstyles.carousel_container} `}>
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={HHC2} class={hstyles.carousel_img} alt="..." />
              </div>
              <div class="carousel-item">
                <img src={HHC3} class={hstyles.carousel_img} alt="..." />
              </div>
              <div class="carousel-item">
                <img src={HHC4} class={hstyles.carousel_img} alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className={hstyles.club_header}>
          <h2 className={hstyles.club_name}>Health & Hygiene Club</h2>
          <div className={hstyles.type}>
                {" "}<Typehhc />{" "}
              </div>
        </div>

     
        <div className={`${hstyles.about} ${hstyles.container}`}>
          <img src={HHC} alt="" />
          <div className={hstyles.aboutContent}>
            <h3>About Us</h3>
            <p className={hstyles.dis}>
              Established in 2017,the Health & Hygiene Club of IIT (BHU),
              Varanasi, is committed to foster a secure and health-conscious
              environment within the community . Our initiatives include a range
              of activities such as organizing school meets for underprivileged
              children, plantation drives, raising awareness on sensitive issues
              such as mental health, diseases, healthy habits, sustainability .
              Our focus is on positively impacting hygiene practices in schools
              and homes.
            </p>
            <button className={`${hstyles.btn} ${hstyles.btnSecondary}`}>
              Join Us
            </button>
          </div>
        </div>

        <div className={hstyles.eventsBack}></div>
        <div className={`${hstyles.events} ${hstyles.container}`}>
          <h2>Events & Activities</h2>
          <div className={hstyles.event}>
            <div className={hstyles.eventContent}>
              <h3>Spot The Green</h3>
              <p>
                “Spot the Green” is initiative Organized by the HHC with the goal of advocating for tree plantation
                drives and enhancing awareness regarding the significance of
                lush green spaces.
              </p>
              <p>
                The event included educational sessions on tree benefits like
                air purification and wildlife habitat.
              </p>
              <div className="home-btn">
                <a href="/About" className="home-getStartBtn" style={{ color: "#fff" }} >
                  Know More
                </a>
              </div>
            </div>
            <img src={spg} alt="..." />
            <div className={hstyles.date}></div>
          </div>
          <div className={hstyles.event}>
            <div className={hstyles.eventContent}>
              <h3>Meme Making Event</h3>
              <p className={hstyles.dis}>
                As a part of our efforts to promote health and hygiene awareness
                among students, we organized a meme making competition.The
                objective of the meme making event was to convey important
                health and hygiene messages in a fun and relatable manner.
              </p>
              <div className="home-btn">
                <a href="/About" className="home-getStartBtn" style={{ color: "#fff" }} >
                  Know More
                </a>
              </div>
            </div>
            <img src={mmc} alt="" />
            <div className={hstyles.date}></div>
          </div>
          <div className={hstyles.event}>
            <div className={hstyles.eventContent}>
              <h3>Medicine Drive</h3>
              <p className={hstyles.dis}>
                The main objective of the drive was to encourage students to
                contribute to the cause of improving healthcare accessibility by
                donating unused or spare medicines that were in good condition
                and within their expiration dates.
                initiatives.
              </p>
              <div className="home-btn">
                <a href="/About" className="home-getStartBtn" style={{ color: "#fff" }} >
                  Know More
                </a>
              </div>
            </div>
            <img src={medi} alt="" />
            <div className={hstyles.date}></div>
          </div>
        </div>

        <div className={hstyles.home_container}>
        <h1 className={hstyles.heading}> Meet Our Team </h1>

        <div className={hstyles.row}>
            {team.map((member, index) => (
                     <div className={hstyles.profile_card} key={index}>
                     <div className={hstyles.img}>
                         <img src={member.img} alt='...'/>
                     </div>
                     <div className={hstyles.caption}>
                         <h3>{member.name}</h3>
                         <p>{member.post}</p>
                         <div class={hstyles.homePage_icons}>
                           <div class={hstyles.social_icons}>
                             <a href={member.instaLink}><AiFillInstagram/></a>
                           </div>
                           <div class={hstyles.social_icons}>
                             <a href={member.mailLink}><AiFillMail/></a>
                           </div>
                           <div class={hstyles.social_icons}>
                             <a href={member.linkdinLink}><AiFillLinkedin/></a>
                           </div>
                        </div>
                     </div>
                    </div>
            ))}
          

        
           </div>
      
      </div>
      </div>
    );
}

export default hhc





