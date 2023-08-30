import React from "react";
import homePic from "../images/homePic.png";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type"
import {AiFillInstagram, AiFillTwitterSquare,} from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import "./Home.css";

const Home = () => {

  return (
    <>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">

          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">Plant Make a positive impact on your enviroment</h1>
              <div style={{ textAlign: "left", height:'80px'}}> <Type /> </div>

              <div className="home-btn" >
                <a href="/" className="home-getStartBtn" style={{color:'#fff'}}>Get Start</a>
                <a href="/" className=" home-knowMoreBtn" style={{color:'#fff'}}>Know More</a>
              </div>


              <div className="bottom-text-home-btn">Lorem ipsum dolor sit amet.</div>


              <ul className="homePage-icons">
                <li className="social-icons">
                  <a
                    href="/"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdFacebook />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="/"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillTwitterSquare />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="/"
                    style={{ color: "white"}}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>


            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homePic}
                alt="LOGO"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </Col>
          </Row>


        </Container>
        
      </Container>

    </>
  );
};

export default Home;
