import React from 'react'
import styles from './ku.module.css'
import header from '../images/header_background.JPG'
import stc from '../images/stc.jpeg'
import sameer from '../images/Sameer.jpg'
import rit from '../images/Ritwij.jpg'
import HHC2 from '../images/HHC_1.jpg'
import HHC3 from '../images/HHC_2.jpg'
import HHC4 from '../images/HHC3.jpg'
import mail from '../images/mail.png'
import linkdin from '../images/linkedin.png'
import insta from '../images/instagram.png'
import HHC from '../images/HHC_logo.jpg'
const Ku = () => {
    return (
        <div>
            <div className={`${styles.carousel_container} `}>
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={HHC2} class={styles.carousel_img} alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={HHC3} class={styles.carousel_img} alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={HHC4} class={styles.carousel_img} alt="..." />
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

            </div>

            <h3 className={styles.h3}>Health & Hygiene Club</h3>
            <h4 className={styles.h4}>“Promoting Wellness, Cultivating Hygiene”
</h4>
            <div className={`${styles.about} ${styles.container}`}>
                <img src={HHC} alt="" />
                <div className={styles.aboutContent}>
                    <h3>About Us</h3>
                    <p className={styles.dis}>Established in 2017,the Health & Hygiene Club of IIT (BHU), Varanasi, is committed to foster a secure and health-conscious environment within the community .
                        Our initiatives include a range of activities such as organizing school meets for underprivileged children, plantation drives, raising awareness on sensitive issues such as mental health, diseases, healthy habits, sustainability . Our focus is on positively impacting hygiene practices in schools and homes.
                    </p>
                    <button className={`${styles.btn} ${styles.btnSecondary}`}>View Details</button>
                </div>
            </div>

            <div className={styles.eventsBack}></div>
            <div className={`${styles.events} ${styles.container}`}>
                <h2>Our Events</h2>
                <div className={styles.event}>
                    <div className={styles.eventContent}>
                        <h3>Spot The Green</h3>
                        <p>
                        “Spot the Green” was an initiative Organized by the Health and Hygiene Club with the goal of advocating for tree plantation drives and enhancing awareness regarding the significance of lush green spaces.
                        </p>
                        <p>The event included educational sessions on tree benefits like air purification and wildlife habitat. Hands-on tree planting lets participants contribute and learn techniques. </p>
                    </div>
                    <img src={header} alt="" />
                    <div className={styles.date}></div>
                </div>
                <div className={styles.event}>
                    <div className={styles.eventContent}>
                        <h3>Meme Making Event</h3>
                        <p className={styles.dis}>As a  part of our efforts to promote health and hygiene awareness among students, we organized a meme making competition.The objective of the meme making event was to convey important health and hygiene messages in a fun and relatable manner.</p>
                    </div>
                    <img src={header} alt="" />
                    <div className={styles.date}></div>
                </div>
                <div className={styles.event}>
                    <div className={styles.eventContent}>
                        <h3>Medicine Drive</h3>
                        <p className={styles.dis}>The main objective of the drive was to encourage students to contribute to the cause of improving healthcare accessibility by donating unused or spare medicines that were in good condition and within their expiration dates.
                         By collecting medicines from the students, the Health and Hygiene Club sought to build a pool of resources that could be utilized to support healthcare initiatives.</p>
                    </div>
                    <img src={header} alt="" />
                    <div className={styles.date}></div>
                </div>
            </div>


            <div >
                <h3 className="mt-5">Meet Our Team</h3>
                {/* <div class="teamcontainer mt-5">
                    <img src={spc} alt="..." class="rounded_image" style={{ borderColor: "black" }}/>
                    <img src={spc} alt="..." class="rounded_image" />
                    <img src={spc} alt="..." class="rounded_image" />
                </div> */}
                <div className={styles.card_body}>

                    <div className={styles.card}>
                        <img src={rit} alt="Image 1" />
                        <h4>Ritwij Verma</h4>
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
                        <img src={sameer} alt="Image 2" />
                        <h4>Sameer Srivastava</h4>
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
                        <img src={sameer} alt="Image 3" />
                        <h4>Khushboo</h4>
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
    )
}

export default Ku

