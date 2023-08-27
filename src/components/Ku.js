import React from 'react'
import styles from './ku.module.css'
import header from '../images/header_background.JPG'

const Ku = () => {
  return (
    <div>
      <div className={styles.image_container}>
        {/* <img  src={image1} alt='...'></img> */}
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active imgcontainer">
                <img src={header} alt="..."/>
              </div>
              <div class="carousel-item imgcontainer">
                <img src={header} alt="..."/>
              </div>
              <div class="carousel-item imgcontainer">
                <img src={header} alt="..."/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          {/* <h3 className={styles.h3}>Social Project Club</h3> */}
      </div>

      <div className={`${styles.about} ${styles.container}`}>
        <img src={header} alt="" />
        <div className={styles.aboutContent}>
          <p>About Us</p>
          <h2>Working since 1997, Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
          <p className={styles.dis}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente necessitatibus eaque, ex corporis consectetur accusamus error obcaecati maiores, esse natus numquam quaerat dignissimos temporibus beatae consequatur qui. Voluptatibus, aspernatur veniam.</p>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>View Details</button>
        </div>
      </div>

      <div className={styles.eventsBack}></div>
      <div className={`${styles.events} ${styles.container}`}>
        <h2>Our Events</h2>
        <div className={styles.event}>
          <div className={styles.eventContent}>
            <h3>Sangharsh</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat asperiores culpa deserunt suscipit repellendus! Eius, ducimus. Temporibus, deleniti sint fugit, hic similique, explicabo neque error doloribus cupiditate voluptatem provident numquam?</p>
          </div>
          <img src={header} alt="" />
          <div className={styles.date}></div>
        </div>
        <div className={styles.event}>
          <div className={styles.eventContent}>
            <h3>Kashi Utshv</h3>
            <p className={styles.dis}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste magnam temporibus eligendi quod sequi aliquam autem accusantium quam. Magni labore autem quisquam molestias error? Odit et maiores unde porro.</p>
          </div>
          <img src={header} alt="" />
          <div className={styles.date}></div>
        </div>
        <div className={styles.event}>
          <div className={styles.eventContent}>
            <h3>Sangyaan</h3>
            <p className={styles.dis}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste magnam temporibus eligendi quod sequi aliquam autem accusantium quam. Magni labore autem quisquam molestias error? Odit et maiores unde porro.</p>
          </div>
          <img src={header} alt="" />
          <div className={styles.date}></div>
        </div>
      </div>

      <div className={styles.teamBack}>
        <div className={`${styles.team} ${styles.container}`}>
          <p>OUR TEAM</p>
          <h2>Meet our Volunteers</h2>
          <div className={styles.members}>
            <div className={styles.member}>
              <img src={header} alt="" />
              <div className={styles.details}>
                <h3>Name Kumar</h3>
                <p>Position in club</p>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
              </div>
            </div>
            <div className={styles.member}>
              <img src={header} alt="" />
              <div className={styles.details}>
                <h3>Name Kumar</h3>
                <p>Position in club</p>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
              </div>
            </div>
            <div className={styles.member}>
              <img src={header} alt="" />
              <div className={styles.details}>
                <h3>Name Kumar</h3>
                <p>Position in club</p>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ku
