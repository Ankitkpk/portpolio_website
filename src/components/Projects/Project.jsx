import React from 'react'
import {Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import editor from "../../assets/Projects/codeEditor.png";
import  school_website from "../../assets/Projects/school_website.png";
import bitsOfCode from "../../assets/Projects/portpolio_website.png";

const Project = () => {
  return (
    <Container fluid className="project-section">
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
              imgPath={school_website}
              isBlog={false}
              title="School website"
              description="professional School Wesite Using Html ,Css ,Js and React js."
              ghLink="https://github.com/Ankitkpk/School_website"
              demoLink="https://school-website-wtjh.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portpolio website"
              description="Portpolio Website Built with React js"
              ghLink="https://github.com/Ankitkpk/portpolio_website"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Fullstack app"
              description="This is a full-stack Web Application Built With The MERN (MongoDB,
        Express, React, Node.js) stack. It includes authentication features that
        allow users to sign up, log in, and log out, and provides access to
        protected routes only for authenticated users."
              ghLink="https://github.com/Ankitkpk/fullstack_app"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Project