import React from "react";
import styles from "./Events.module.css";
import Marquee from "react-fast-marquee";
import pm from '../images/ps.jpeg'
import vc from "../images/vc.jpeg"
import am from "../images/am.jpeg"
import pfc from "../images/pfc.png"
import ummed from "../images/ummed.jpeg"
import pregrad from "../images/pregrad.jpeg"
import lwt from "../images/lwt.jpeg"
import tpf from "../images/tpf.png"
function Events() {
    return (
       
            <div className={styles.bodies}>
             <div className={styles.middle}>
                <section className={styles.about}>

                    <div className={styles.container}>
                        <div className={styles.img}>
                            <img className={styles.logo} src="https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-64316cae6bec2_jagritilogo23.png" alt="jagriti-img" />
                        </div>
                        <div className={styles.para}>
                            <h1 className="heading pb-3"><strong>Jagriti</strong></h1>
                            <p >
                                <div className={styles.text}>
                                Jagriti is an enlightening and edifying annual social service fest concentrated primarily on raising
                                awareness through an assortment of educative and profound thinking events.
                                We conduct an array of events circulating the theme of social issues.
                                Jagriti is on way to self-contentment wherein we help the underprivileged, borrowing time and drawing attention from our surplus lives.
                                </div>
                              
                            </p>
                            {/* <div className="row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className>
                                        <div className="card-body">
                                            <h5 className="card-title">Lorem ipsum</h5>
                                            <p className="card-text">With supporting text below.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className>
                                        <div className="card-body">
                                            <h5 className="card-title">Lorem ipsum</h5>
                                            <p className="card-text">With supporting text below.</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className={styles.contain}><button type="button" className="btn btn-primary btn-lg btn-success opacity-75">Explore Now</button></div>
                        </div>
                    </div>

                    <hr className="bold "></hr>

                    <div><h1 className={styles.title}><strong>Our Partners</strong></h1></div>
                   
                        <div className="flex flex-col gap-8 py-8 mb-10">
                      
                            <Marquee style={{ overflow: "hidden" }} gradient={false} speed="35" className=" mx-auto w-full"> 
                                {/* {array.map((item, index) => (
          <Corousel key={index}></Corousel>
        ))} */}                 
                                 
                               
                                <a className="cursor-pointer mx-10" href="//pfcindia.com/Home"><img src={pfc} className="h-auto w-60" alt="LWT Logo"></img></a>
                                <a className="cursor-pointer mx-10" href="//pregrad.in"><img src={ummed} className="h-auto w-60" alt="LWT Logo"></img></a>
                                <a className="cursor-pointer mx-10" href="//theproductfolks.com"><img src={pregrad} className="h-auto w-60" alt="LWT Logo"></img></a>
                                <a className="cursor-pointer mx-10" href="//theproductfolks.com"><img src={lwt} className="h-auto w-60" alt="LWT Logo"></img></a>
                                <a className="cursor-pointer mx-10" href="//theproductfolks.com"><img src={tpf} className="h-auto w-60" alt="LWT Logo"></img></a>
                                

                             </Marquee> 
                        </div>
                    
                </section>
            </div>


            <section className={styles.speaker}>
                <div className={styles.middle}>
                    <h1 className={styles.middlediv}><strong>Our Speakers</strong></h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card h-60 w-60">
                                    <img src={am} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">UPSC AIR 26 (IIT BHU BATCH'15)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={pm} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">UPSC AIR 52 (IIT BHU BATCH'18)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={vc} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">SAMAGRA CEO Office</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.gallery}>
                <div className={styles.middlediv}>
                    <h1><strong>Our gallery</strong></h1>
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className>
                                <img src="https://picsum.photos/id/0/367/267" className="card-img-top" alt="" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className>
                                <img src="https://picsum.photos/id/18/367/267" className="card-img-top" alt="" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className>
                                <img src="https://picsum.photos/id/6/367/267" className="card-img-top" alt="" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className>
                                <img src="https://picsum.photos/id/12/367/267" className="card-img-top" alt="" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className>
                                <img src="https://picsum.photos/id/13/367/267" className="card-img-top" alt="" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className>
                                <img src="https://picsum.photos/id/8/367/267" className="card-img-top" alt="" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className>
                                <img src="https://picsum.photos/id/20/367/267" className="card-img-top" alt="" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className>
                                <img src="https://picsum.photos/id/28/367/267" className="card-img-top" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            

          

        
    )
}
export default Events;
