import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import evogym from "../../Assets/Projects/evogym.png";
import test_pdd from "../../Assets/Projects/test.png";
import booking from "../../Assets/Projects/booking.png";
import estate from "../../Assets/Projects/estate.png";
import weather from "../../Assets/Projects/weather.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evogym}
              isBlog={false}
              title="Modern Fitness Landing Page"
              description="A modern responsive landing page with UI, animations, and smooth scroll, built using React, TypeScript, and Tailwind CSS. Features Framer Motion for animations and React Hook Form for contact forms."
              ghLink="https://github.com/Dexr1te/landing-react-ts"
              demoLink="https://evogym-landing.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test_pdd}
              isBlog={false}
              title="PDD Website"
              description="Interactive road rules quiz application. Users answer questions with images, get results, and can share leads. Built with React 19, TypeScript, Zustand, and Framer Motion."
              // ghLink="https://github.com/Dexr1te/pdd-website" <--- Private
              demoLink="https://test.propdd.kz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booking}
              isBlog={false}
              title="pro-pdd-booking"
              description="Online booking service for driving schools. Features a calendar, instructor selection, and Google Sheets integration via Apps Script. Built as a SPA with React and TypeScript."
              // ghLink="https://github.com/Dexr1te/pro-pdd-booking" <--- Private
              demoLink="https://booking.propdd.kz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={estate}
              isBlog={false}
              title="Real Estate CRM System"
              description="Full-stack CRM platform for real estate agencies to manage clients, properties, and sales pipelines. Built with React, TypeScript, Spring Boot, Flutter, and PostgreSQL."
              ghLink="https://github.com/Dexr1te/estate-crm-system"
              demoLink="https://estate-crm-system.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A clean and modern weather forecast application built with React, TypeScript, React Query, and Zustand. Fetches real-time data from OpenWeather API and visualizes it with Recharts."
              ghLink="https://github.com/Dexr1te/weather-app"
              demoLink="https://weather-app-eight-orpin-67.vercel.app" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
