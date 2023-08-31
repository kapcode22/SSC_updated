import React from 'react';
import styles from './ku.module.css';
import header from '../images/header_background.JPG';
import header1 from '../images/KU/header1.JPG';
import header2 from '../images/KU/header2.jpg';
import header3 from '../images/KU/header3.jpg';
import vivek from '../images/KU/vivek_ku.png';
import anupama from '../images/KU/anupama_ku.jpg';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Ku = () => {
    return (
        <div>
            <div className={styles.header}>
            <Carousel autoPlay interval={3000} infiniteLoop>
                <div className={styles.head}>
                    <img src={header1} alt="Image 1" />
                </div>
                <div className={styles.head}>
                    <img src={header2} alt="Image 2" />
                </div>
                <div className={styles.head}>
                    <img src={header3} alt="Image 3" />
                </div>
            </Carousel>
            <div className={styles.headerContent}>
                <h1>KASHI UTKARSH</h1>
                <p>empowering communities, transforming lives</p>
            </div>
            </div>



            <div className={`${styles.about} ${styles.container}`}>
                <img src={header} alt="" />
                <div className={styles.aboutContent}>
                    <p>About Us</p>
                    <h2>Working since 1997, to create a beautiful world for all</h2>
                    <p className={styles.dis}>Kashi Utkarsh, is an initiative led by the IIT BHU students to relieve the challenges faced by underprivileged individuals in areas like Patiya, Kakarmatta, and Lahartara. Centered on improved hygiene and  importance of education, the initiative aims to enhance the standard of living and awareness among the less fortunate.  Through individual engagement, free medical camps, and awareness campaigns,we strive to address their unique needs and nurture positive transformation within these communities.</p>
                    <button className={`${styles.btn} ${styles.btnSecondary}`}>View Details</button>
                </div>
            </div>

            <div className={styles.eventsBack}></div>
            <div className={`${styles.events} ${styles.container}`}>
                <h2>Our Events</h2>
                <div className={styles.event}>
                    <div className={styles.eventContent}>
                        <h3>Sangharsh</h3>
                        <p>An Inter-Basti Sports Event' was organized by Kashi Utkarsh. The event's objective was to cultivate sports interest in children with their academic goals .It aimed to nurture sportsmanship values, offer a platform for showcasing talent, introduce kids to diverse games, and promote awareness about the significance of physical activities in daily routines.</p>
                    </div>
                    <img src={header} alt="" />
                    <div className={styles.date}></div>
                </div>
                <div className={styles.event}>
                    <div className={styles.eventContent}>
                        <h3>Kashi Utshv</h3>
                        <p className={styles.dis}>An Inter-basti cultural competition, organized by Kashi Utkarsh. The competition aimed to ignite co-curricular interest, offering a break from regular academics while promoting healthy competition. Participants engaged in solo, duet, and group competitions encompassing dance, singing, and skits. The primary objectives for basti children were to build confidence, overcome stage fear, foster holistic personality development, identify and showcase hidden talents.</p>
                    </div>
                    <img src={header} alt="" />
                    <div className={styles.date}></div>
                </div>
                <div className={styles.event}>
                    <div className={styles.eventContent}>
                        <h3>Sangyaan</h3>
                        <p className={styles.dis}>It is an inter-basti science exhibition organized by Kashi Utkarsh, united children from all three bastis, alongside various schools. The event aimed to foster scientific curiosity, communication skills, and confidence among basti children. Models based on scientific principles were displayed, encouraging learning and creativity. This initiative not only showcased talents but also engaged the Patiya Basti community in understanding scientific phenomena.</p>
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
                                <h3>Jatin Goyal</h3>
                                <p>Position in club</p>
                                <div className={styles.icon}></div>
                                <div className={styles.icon}></div>
                                <div className={styles.icon}></div>
                            </div>
                        </div>
                        <div className={styles.member}>
                            <img src={vivek} alt="" />
                            <div className={styles.details}>
                                <h3>Vivek Kumar</h3>
                                <p>Position in club</p>
                                <div className={styles.icon}></div>
                                <div className={styles.icon}></div>
                                <div className={styles.icon}></div>
                            </div>
                        </div>
                        <div className={styles.member}>
                            <img src={anupama} alt="" />
                            <div className={styles.details}>
                                <h3>Anupama Solanki</h3>
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
