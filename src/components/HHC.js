import React from 'react'
import styles from './ku.module.css'
import header from '../images/header_background.JPG'
import stc from '../images/stc.jpeg'
import sameer from '../images/Sameer.jpg'
import rit from '../images/Ritwij.jpg'
import ku2 from '../images/ku2.jpg'
import ku3 from '../images/ku3.jpg'
import ku4 from '../images/ku4.jpg'
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
                            <img src={ku2} class={styles.carousel_img} alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={ku3} class={styles.carousel_img} alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={ku4} class={styles.carousel_img} alt="..." />
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
                        <p>The event included educational sessions on tree benefits like air purification and wildlife habitat. Hands-on tree planting lets participants contribute and learn techniques. "Spot the Green" competition encouraged exploring tree species in an area.</p>
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
                        <p className={styles.dis}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste magnam temporibus eligendi quod sequi aliquam autem accusantium quam. Magni labore autem quisquam molestias error? Odit et maiores unde porro.</p>
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


{/* <div className={styles.teamBack}>
<div className={`${styles.team} ${styles.container}`}>
    <p>OUR TEAM</p>
    <h2>Meet our Volunteers</h2>
    <div className={styles.members}>
        <div className={styles.member}>
            <img src={anupama} alt="" />
            <div className={styles.details}>
                <h3>Anupama</h3>
                <p>Jt. General Secretary</p>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
            </div>
        </div>
        <div className={styles.member}>
            <img src={vivek_ku} alt="" />
            <div className={styles.details}>
                <h3>Vivek Kumar</h3>
                <p>General Secretary</p>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
            </div>
        </div>
        <div className={styles.member}>
            <img src={header} alt="" />
            <div className={styles.details}>
                <h3>Jatin Goyal</h3>
                <p>Jt. General Secretary</p>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
            </div>
        </div>
    </div>
</div>
</div> */}