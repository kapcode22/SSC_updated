import React from 'react'
import styles from './ku.module.css'
import first from '../images/spc.jpg'
const Ku = () => {
  return (
    <div>
    <header className={styles.header}>
        {/* <!-- <img className="background overlay" src="https://www.michaelpage.com.au/sites/michaelpage.com.au/files/styles/advice_node_desktop/public/2022-08/effective%20leader-new-2022.jpg?itok=ohPNlDU5" alt=""> --> */}
        <div className={styles.header_content}>
            <h1>KASHI UTKARSH</h1>
            <p>trying to create a beautiful world for all</p>
            <button className="btn btn-primary"><a href="#">Donate Now!</a></button>
        </div>
    </header>

    <div className="container mb-5">
        <img src={first} alt=""/>
        <div className={styles.about_content}>
            <p>About Us</p>
            <h2>Working since 1997, Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
            <p className={styles.dis}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente necessitatibus eaque, ex corporis consectetur accusamus error obcaecati maiores, esse natus numquam quaerat dignissimos temporibus beatae consequatur qui. Voluptatibus, aspernatur veniam.</p>
            <button className="btn btn-secondary">View Details</button>
        </div>
    </div>

    <div className={styles.events_back}></div>
    <div className="events styles.container">
        <h2>Our Events</h2>
        <div className={styles.event}>
            <div className={styles.event_content}>
                <h3>Sangharsh</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat asperiores culpa deserunt suscipit repellendus! Eius, ducimus. Temporibus, deleniti sint fugit, hic similique, explicabo neque error doloribus cupiditate voluptatem provident numquam?</p>
            </div>
            <img src="./images/header_background.JPG" alt=""/>
            <div className={styles.date}></div>
        </div>
        <div className={styles.event}>
            <div className={styles.event_content}>
                <h3>Kashi Utshv</h3>
                <p className={styles.dis}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste magnam temporibus eligendi quod sequi aliquam autem accusantium quam. Magni labore autem quisquam molestias error? Odit et maiores unde porro.</p>
            </div>
            <img src="./images/header_background.JPG" alt=""/>
            <div className={styles.date}></div>
        </div>
        <div className={styles.event}>
            <div className={styles.event_content}>
                <h3>Sangyaan</h3>
                <p className={styles.dis}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste magnam temporibus eligendi quod sequi aliquam autem accusantium quam. Magni labore autem quisquam molestias error? Odit et maiores unde porro.</p>
            </div>
            <img src="./images/header_background.JPG" alt=""/>
            <div className={styles.date}></div>
        </div>
    </div>

    <div className={styles.team_back}>
        <div className="team styles.container">
            <p>OUR TEAM</p>
            <h2>Meet our Volunteers</h2>
            <div className={styles.members}>
                <div className={styles.member}>
                    <img src="./images/header_background.JPG" alt=""/>
                    <div className={styles.details}>
                        <h3>Name Kumar</h3>
                        <p>Position in club</p>
                        <div className={styles.icon}></div>
                        <div className={styles.icon}></div>
                        <div className={styles.icon}></div>
                    </div>
                </div>
                <div className={styles.member}>
                    <img src="./images/header_background.JPG" alt=""/>
                    <div className={styles.details}>
                        <h3>Name Kumar</h3>
                        <p>Position in club</p>
                        <div className={styles.icon}></div>
                        <div className={styles.icon}></div>
                        <div className={styles.icon}></div>
                    </div>
                </div>
                <div className={styles.member}>
                    <img src="./images/header_background.JPG" alt=""/>
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
