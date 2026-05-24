import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <b className="purple">Junior Frontend Developer</b> who loves building interactive, responsive, and user-centric web applications. 
              <br />
              <br />
              My core stack includes
              <i>
                <b className="purple">
                  {" "}
                  React, TypeScript, and Node.js{" "}
                </b>
              </i>
              — and I enjoy crafting smooth animations and seamless user experiences.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Modern Web Apps, UI/UX Design,{" "}
                </b>
              </i>
              and exploring the latest trends in the React ecosystem.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Vite </b> and modern libraries like{" "}
              <i>
                <b className="purple">Framer Motion</b> and{" "}
                <b className="purple">Zustand</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
