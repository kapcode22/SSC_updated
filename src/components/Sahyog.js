import React from 'react'
import styles from './ku.module.css'
import header from '../images/header_background.JPG'
import manu from '../images/Manu.jpg'
import neetu from '../images/Neetu.jpg'
import ankit from '../images/Ankit.jpeg'
import sahyog2 from '../images/sahyog2.jpg'
import sahyog3 from '../images/sahyog3.jpg'
import sahtog4 from '../images/sahyog3.jpg'
import mail from '../images/mail.png'
import linkdin from '../images/linkedin.png'
import insta from '../images/instagram.png'
import sahyog from '../images/sahyog_logo.jpg'
const Sahyog = () => {
  return (
    <div>
      <div className={`${styles.carousel_container} `}>
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={sahyog2} class={styles.carousel_img} alt="..." />
            </div>
            <div class="carousel-item">
              <img src={sahyog3} class={styles.carousel_img} alt="..." />
            </div>
            <div class="carousel-item">
              <img src={sahtog4} class={styles.carousel_img} alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className={styles.club_header}>
        <h2>Sahyog</h2>
        <p>“Illuminating Minds, Nurturing Futures”</p>
      </div>

      <h3 className={styles.h3}>Sahyog Club</h3>
      <div className={`${styles.about} ${styles.container}`}>
        <img src={sahyog} alt="" />
        <div className={styles.aboutContent}>
          <h3>About Us</h3>
          <p className={styles.dis}>
            The Sahyog Club, a fundamental component of the Social Service
            Council at IIT (BHU) Varanasi, is dedicated in extending support to
            the marginalized and underprivileged segments of our community. Our
            primary objective is to uplift these sections by fostering knowledge
            and mutual empowerment, thus brightening the lives that have long
            been shrouded in darkness.
          </p>

          <button className={`${styles.btn} ${styles.btnSecondary}`}>
            View Details
          </button>
        </div>
      </div>

      <div className={styles.eventsBack}></div>
      <div className={`${styles.events} ${styles.container}`}>
        <h2>Our Events</h2>
        <div className={styles.event}>
          <div className={styles.eventContent}>
            <h3>Sangharsh</h3>
            <p>
              'Sangharsh: An Inter-Basti Sports Event' was organized on 15th
              January 2023 inKakarmatta Basti by Kashi Utkarsh, affiliated with
              IIT BHU.
            </p>
          </div>
          <img src={header} alt="" />
          <div className={styles.date}></div>
        </div>
        <div className={styles.event}>
          <div className={styles.eventContent}>
            <h3>Daan Utshv</h3>
            <p className={styles.dis}>
              It is formerly known as 'The Joy of Giving Week.' Observed from
              the 2nd to the 8th of October in India, Daan Utsav holds a special
              place on the calendar. Simultaneously, "The Joy of Giving Week
              (JGW)" unfolds as a significant "festival of philanthropy"
              spanning a week, with the intention of seamlessly weaving itself
              into the cultural fabric of India.
            </p>
            {/* <p> This annual celebration coincides with Gandhi Jayanti and orchestrates a collective involvement in "acts of giving," encompassing financial contributions, time, expertise, and resources. */}
            {/* </p> */}
          </div>
          <img src={header} alt="" />
          <div className={styles.date}></div>
        </div>
        <div className={styles.event}>
          <div className={styles.eventContent}>
            <h3>Sports Day</h3>
            <p className={styles.dis}>
              {" "}
              Celebrated on Major Dhyan Chand's birthday (August 27th) in the
              school playgrounds. Engaged students in a wide range of indoor and
              outdoor games, promoting physical fitness, teamwork, and
              sportsmanship. .The event created a lively and energetic
              atmosphere, fostering active participation and promoting the
              values of sportsmanship and physical well-being.
            </p>
          </div>
          <img src={header} alt="" />
          <div className={styles.date}></div>
        </div>
      </div>

      <div>
        <h3 className="mt-5">Meet Our Team</h3>

        <div className={styles.card_body}>
          <div className={styles.card}>
            <img src={neetu} alt="Image 1" />
            <h4>Neetu</h4>
            <h5>Jt. general Secy</h5>
            <div class={styles.logo_row}>
              <div class={styles.logo_container}>
                <img src={insta} alt="Instagram Logo" />
              </div>
              <div class={styles.logo_container}>
                <img src={mail} alt="Instagram Logo" />
              </div>
              <div class={styles.logo_container}>
                <img src={linkdin} alt="Instagram Logo" />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img src={manu} alt="Image 2" />
            <h4>Manvendra Singh</h4>
            <h5> General Secy</h5>
            <div class={styles.logo_row}>
              <div class={styles.logo_container}>
                <img src={insta} alt="Instagram Logo" />
              </div>
              <div class={styles.logo_container}>
                <img src={mail} alt="Instagram Logo" />
              </div>
              <div class={styles.logo_container}>
                <img src={linkdin} alt="Instagram Logo" />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img src={ankit} alt="Image 3" />
            <h4>Ankit Kumar</h4>
            <h5>Jt. general Secy</h5>
            <div class={styles.logo_row}>
              <div class={styles.logo_container}>
                <img src={insta} alt="Instagram Logo" />
              </div>
              <div class={styles.logo_container}>
                <img src={mail} alt="Instagram Logo" />
              </div>
              <div class={styles.logo_container}>
                <img src={linkdin} alt="Instagram Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sahyog

