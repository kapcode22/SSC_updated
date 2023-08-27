import React from "react";
import stylec from "./club.module.css";
import spc from "../images/spc.jpg";
import stc from "../images/stc.jpeg";

const club = () => {
    return (
        <div>
            <div className={stylec.image_container}>
                {/* <img  src={image1} alt='...'></img> */}
                <h3 className={stylec.h3}>Social Project Club</h3>
            </div>

            <div>
                <h1 className={stylec.text}> About us</h1>
            </div>

            <div className={stylec.midcontainer}>
                <div className="column">
                    <img src={spc} alt="..."></img>
                </div>
                <div className="column mt-5 mx-5">
                    <p>
                        Social projects club , is a group of innovative young individuals
                        operating in collaboration with the Social Service Council of IIT
                        (BHU), Varanasi. We address a range of societal concerns, employing
                        our technical expertise, meticulous planning, and strategic thinking
                        to devise innovative solutions. As a united team, we've embraced the
                        task of empowering society through simple and impactful approaches.
                        The "Social Projects Club" aims to make a meaningful impact on
                        society by employing dedicated and systematic approaches to explore
                        various underlying factors contributing to societal decline. Through
                        this diligent process, the club strives to identify distinct causes
                        for these issues and subsequently devises comprehensive strategies
                        to address them effectively, leading to meaningful solutions.
                    </p>
                </div>
            </div>

            <div>
                <h1 className={stylec.text}> Our Events</h1>
                {/* <div className={stylec.eventcontainer}></div> */}
                <div className={stylec.cardcontainer}>
                    <div class="card text-bg-dark  mb-3" style={{ maxWidth: "650px" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img
                                    src={spc}
                                    class="card-img-top img-fluid mx-auto h-100 rounded"
                                    alt="..."
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Abhipraya</h5>
                                    <p class="card-text">
                                        It is a case study event exclusively for the freshers.It
                                        aims to engage freshers in studying social problems,
                                        presenting ideas, and learning various skills. For guidance
                                        and support , Personal mentors to every team are provided to
                                        help their mentees to move in the proper thought process and
                                        clear every doubt they get throughout their
                                        journey—𝐀𝐛𝐡𝐢𝐩𝐫𝐚𝐲𝐚 comprised of two rounds: the abstract
                                        submission round and the PPT presentation round.
                                    </p>
                                    <p class="card-text">
                                        <small class="text-body-secondary">
                                            Last updated 3 mins ago
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card text-bg-dark mb-3" style={{ maxWidth: "650px" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img
                                    src={stc}
                                    class="card-img-top img-fluid mx-auto h-100 rounded"
                                    alt="..."
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Brainstorming session </h5>
                                    <p class="card-text">
                                        The session is held bi annually where new social issues are
                                        addressed, and the solution presented by the students is
                                        critically analyzed. Here, Students pitch their ideas,
                                        brainstorm with attendees and judges, and team up with
                                        interested people, to make progress in the project.
                                    </p>
                                    <p class="card-text">
                                        <small class="text-body-secondary">
                                            Last updated 3 mins ago
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card text-bg-dark mb-3" style={{ maxWidth: "650px" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img
                                    src={spc}
                                    class="card-img-top img-fluid mx-auto h-100 rounded"
                                    alt="..."
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Social Innovation Challenge</h5>
                                    <p class="card-text">
                                        It focussed on presenting policy based or technical
                                        solutions to social issues posed by NGOs. Evaluation
                                        criteria included impact, pragmatism, progress, and
                                        scalability. The competition had two rounds: abstract
                                        submission and presentations before judges. Workshops were
                                        held to help the participants think critically and
                                        creatively
                                    </p>
                                    <p class="card-text">
                                        <small class="text-body-secondary">
                                            Last updated 3 mins ago
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="mt-5">Meet Our Team</h3>
                <div class="teamcontainer mt-5">
                    <img
                        src={spc}
                        alt="..."
                        class="rounded_image"
                        style={{ borderColor: "black" }}
                    />
                    <img src={spc} alt="..." class="rounded_image" />
                    <img src={spc} alt="..." class="rounded_image" />
                </div>
            </div>
        </div>
    );
};

export default club;
