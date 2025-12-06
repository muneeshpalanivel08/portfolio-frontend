import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "LOCTOGLOB",
      description: "LocalHost to GlobalHost",
      imgUrl: projImg1,
      githubUrl: "https://github.com/muneeshpalanivel08/LOCTOGLOB",
    },
    {
      title: "AutoRem",
      description: "Automatic Assignment Reminder using UiPath",
      imgUrl: projImg2,
      githubUrl: "https://github.com/muneeshpalanivel08/AutoRem",
    },
    {
      title: "AIRA",
      description: "AI Resume Analyzer",
      imgUrl: projImg3,
      githubUrl: "https://github.com/muneeshpalanivel08/Resume-Analyzer",
    },
    {
      title: "HostelSys",
      description: "Hostel Room Allocation using DevOps",
      imgUrl: projImg4,
      githubUrl: "https://github.com/muneeshpalanivel08/HostelSyS",
    },
    {
      title: "JF bot",
      description: "Job Finder Bot",
      imgUrl: projImg5,
      githubUrl: "https://github.com/muneeshpalanivel08/JF-Bot",
    },
    {
      title: "JF reminder",
      description: "Job Finder reminder using Mail",
      imgUrl: projImg6,
      githubUrl: "https://github.com/muneeshpalanivel08/JMAN-Bot",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
