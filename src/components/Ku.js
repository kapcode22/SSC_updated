import React from "react";
import styles from "./ku.module.css";

import anupama from "../images/anupama_ku.jpg";
import vivek_ku from "../images/vivek_ku.png";
import jatin from "../images/jatin .jpg";
import ku2 from "../images/ku2.jpg";
import ku3 from "../images/ku3.jpg";
import ku4 from "../images/ku4.jpg";
import ku_logo from "../images/ku_logo.jpg";
import eve1 from "../images/kashi_utsav .png";
import seb from "../images/seb.jpeg";
import sang from "../images/sang.jpeg";
import Type from "./Typeku";
import { AiFillInstagram, AiFillLinkedin, AiFillMail,} from "react-icons/ai";

const Ku = () => {
  const team = [
    { name: "Jatin Goyal", img: jatin, post: "Joint Secretary", instalink: "https://instagram.com/arre_goyal?igshid=MzRlODBiNWFlZA", maillink: "mailto:jatinkumar.goyal.che21@itbhu.ac.in", linkdinlink: "https://www.linkedin.com/in/jatin-goyal-a65749247",},
    { name: "Vivek Kumar", img: vivek_ku, post: "General Secretary", instalink: "https://instagram.com/vivek.kumar0621?igshid=NzZlODBkYWE4Ng", maillink: "mailto:vivek.kumar.bce21@itbhu.ac.in", linkdinlink: "https://www.linkedin.com/in/vivek-kumar-8049b6227",},
    { name: "Anupama", img: anupama, post: "Joint Secretary", instalink: "https://instagram.com/anupama_07_?igshid=OGQ5ZDc2ODk2ZA", maillink: "mailto:anupama.solankey.che22@itbhu.ac.in", linkdinlink: "https://www.linkedin.com/in/anupama-solankey-24b10a259/",},

   
  ];
  const events = [
    { name: "Kashi Utshv", img: eve1, text: " Kashi Utsav was a transformative cultural fest for Basti's students. It encouraged students to compete, cultivating physical, intellectual, emotional, and social qualities. This holistic approach aimed to introduce youngsters to diverse interests and talents." },
    { name: "Sangharsh", img:sang, text: " An Inter-Basti Sports Event' with an aim to nurture sportsmanship values, offer a platform for showcasing talent, introduce kids to diverse games, and promote awareness about the significance of physical activities in daily routines"},
    { name: "Sangyaan", img: seb, text: "'Sangyaan' is an inter-basti science exhibition. The event featured an array of meticulously crafted models, each operating on sound scientific principles, captivating the audience."},
  ];
  return (
    <div className={styles.bodies}>

      <div className={`${styles.carousel_container} `}>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={ku2} class={styles.carousel_img} alt="..." />
            </div>
            <div class="carousel-item">
              <img src={ku3} class={styles.carousel_img} alt="..." />
            </div>
            <div class="carousel-item">
              <img src={ku4} class={styles.carousel_img} alt="..." />
            </div>
          </div>
          <button  class="carousel-control-prev"  type="button"  data-bs-target="#carouselExampleAutoplaying"  data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>


      <div className={styles.club_header}>
        <h2 className={styles.club_name}>Kashi Utkarsh </h2>
        <div className={styles.type}>
                {" "}<Type />{" "}
              </div>
      </div>

      <div className={`${styles.about} ${styles.container}`}>
        <img src={ku_logo} alt="" />
        <div className={styles.aboutContent}>
          <h3>About Us</h3>
          <p className={styles.dis}>
            Kashi Utkarsh, is an initiative led by the IIT BHU students to
            relieve the challenges faced by underprivileged individuals in areas
            like Patiya, Kakarmatta, and Lahartara. Centered on improved hygiene
            and importance of education, the initiative aims to enhance the
            standard of living and awareness among the less fortunate. Through
            individual engagement, free medical camps, and awareness
            campaigns,we strive to address their unique needs and nurture
            positive transformation within these communities.
          </p>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>
            Join US
          </button>
        </div>
      </div>

      <div className={styles.eventsBack}></div>
      <div className={`${styles.events} ${styles.container}`}>
        <h2>Events & Activities</h2>

        {events.map((event, index) => (
          <div className={styles.event}>
            <div className={styles.eventContent}>
              <h3>{event.name}</h3>
              <p>{event.text}</p>
              <div className="home-btn">
                <a href="/About" className="home-getStartBtn" style={{ color: "#fff" }} >
                  Know More
                </a>
              </div>
            </div>
            <img src={event.img} alt="" />
            <div className={styles.date}></div>

          </div>
        ))}

<div className={styles.home_container}>
        <h1 className={styles.heading}> Meet Our Team </h1>

        <div className={styles.row}>
            {team.map((member, index) => (
                     <div className={styles.profile_card} key={index}>
                     <div className={styles.img}>
                         <img src={member.img} alt='...'/>
                     </div>
                     <div className={styles.caption}>
                         <h3>{member.name}</h3>
                         <p>{member.post}</p>
                         <div class={styles.homePage_icons}>
                           <div class={styles.social_icons}>
                             <a href={member.instaLink}><AiFillInstagram/></a>
                           </div>
                           <div class={styles.social_icons}>
                             <a href={member.mailLink}><AiFillMail/></a>
                           </div>
                           <div class={styles.social_icons}>
                             <a href={member.linkdinLink}><AiFillLinkedin/></a>
                           </div>
                        </div>
                     </div>
                    </div>
            ))}
          

        
           </div>
  
      </div>
      </div>
    </div>
  );
};

export default Ku;
