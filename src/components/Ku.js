import React from 'react'
import styles from './ku.module.css'
import header from '../images/header_background.JPG'
import stc from '../images/stc.jpeg'
import anupama from '../images/anupama_ku.jpg'
import vivek_ku from '../images/vivek_ku.png'
import ku2 from '../images/ku2.jpg'
import ku3 from '../images/ku3.jpg'
import ku4 from '../images/ku4.jpg'
import mail from '../images/mail.png'
import linkdin from '../images/linkedin.png'
import insta from '../images/instagram.png'
import ku_logo from '../images/ku_logo.jpg'
const Ku = () => {
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

            <h3 className={styles.h3}>Kashi Utkarsh Club</h3>
            <div className={`${styles.about} ${styles.container}`}>
                <img src={ku_logo} alt="" />
                <div className={styles.aboutContent}>
                    <h3>About Us</h3>
                    <p className={styles.dis}>Kashi Utkarsh, is an initiative led by the IIT BHU students to relieve the challenges faced by underprivileged individuals in areas like Patiya, Kakarmatta, and Lahartara. Centered on improved hygiene and  importance of education, the initiative aims to enhance the standard of living and awareness among the less fortunate.  Through individual engagement, free medical camps, and awareness campaigns,we strive to address their unique needs and nurture positive transformation within these communities.
                    </p>
                    <button className={`${styles.btn} ${styles.btnSecondary}`}>View Details</button>
                </div>
            </div>

            <div className={styles.eventsBack}></div>
            <div className={`${styles.events} ${styles.container}`}>
                <h2>Our Events</h2>
                <div className={styles.event}>
                    <div className={styles.eventContent}>
                        <h3>Sangharsh</h3>
                        <p>
                            'Sangharsh: An Inter-Basti Sports Event' was organized on 15th January 2023 inKakarmatta Basti by Kashi Utkarsh, affiliated with IIT BHU.
                        </p>
                        <p>The event’s objective was to cultivate sports interest in children with their academic goals .It aimed to nurture sportsmanship values, offer a platform for showcasing talent, introduce kids to diverse games, and promote awareness about the significance of physical activities in daily routines.</p>
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


            <div >
                <h3 className="mt-5">Meet Our Team</h3>
               
                <div className={styles.card_body}>

                    <div className={styles.card}>
                        <img src={anupama} alt="Image 1" />
                        <h4>Anupama</h4>
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
                        <img src={vivek_ku} alt="Image 2" />
                        <h4>Vivek kumar</h4>
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
                        <img src={vivek_ku} alt="Image 3" />
                        <h4>Jatin kumar Goyal</h4>
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
