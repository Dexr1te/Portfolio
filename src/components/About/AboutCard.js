import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Koibagar Nurserik</span>{" "}
            from <span className="purple">Almaty, Kazakhstan</span>.
            <br />
            I’m a passionate <span className="purple">Frontend Developer</span> dedicated to building high-quality web experiences.
            <br />
            I love exploring new technologies and pushing the boundaries of what's possible on the web.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Tech 🚀
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build things that solve real problems!"{" "}
          </p>
          <footer className="blockquote-footer">Nurserik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
