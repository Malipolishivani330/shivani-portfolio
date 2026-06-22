import { motion } from "framer-motion";
import { useState } from "react";
import employeeImg from "../assets/employee.png";
import salesImg from "../assets/sales.jpg";
import fakeNewsImg from "../assets/fake-news.jpeg";
import awsAutomationImg from "../assets/aws-automation.jpg";
import studentPortalImg from "../assets/student-portal.jpg";
import portfolioImg from "../assets/Shivani-Portfolio.png";

function Projects() {

  const [filter, setFilter] = useState("All");

  const projects = [

    {
      title: "Employee Management System",
      category: "Backend",
      image: employeeImg,
      description:
        "Developed a complete Employee Management System using Django, Django REST Framework, MySQL and JWT Authentication. Implemented CRUD operations and deployed on Render.",
      technologies:
        "Django • DRF • MySQL • JWT • Render",
      github:
        "https://github.com/Malipolishivani330/EmployeeManagementSystem",
      demo: "#"
    },

    {
      title: "End-to-End Sales Data Analysis",
      category: "Data Engineering",
      image: salesImg,
      description:
        "Processed and analyzed 50,000+ sales records using PySpark and Databricks. Built ETL pipelines to clean, transform and validate data, and generated analytical reports to identify sales trends and revenue patterns.",
      technologies:
        "SQL • Python • PySpark • Databricks",
      github:
        "https://github.com/Malipolishivani330/sales-data-analysis-databricks",
      demo: "#"
    },

    {
      title: "Fake News Detection System",
      category: "Machine Learning",
      image: fakeNewsImg,
      description:
        "Built a Deep Learning Ensemble Model for Fake News Detection using TensorFlow, Keras, NLTK and Scikit-Learn with high prediction accuracy.",
      technologies:
        "Python • TensorFlow • Keras • NLTK • Scikit-Learn",
      github:
        "https://github.com/Malipolishivani330/Fake-News-Detection",
      demo: "#"
    },

    {
      title: "AWS Infrastructure Automation",
      category: "Cloud",
     image: awsAutomationImg,
      description:
        "Automated AWS Infrastructure provisioning using Terraform and Infrastructure as Code concepts with Linux environment setup.",
      technologies:
        "Terraform • AWS • Linux • Infrastructure as Code",
      github:
        "https://github.com/Malipolishivani330/terraform-aws-infrastructure-automation",
      demo: "#"
    },

    {
      title: "AWS 2-Tier Student Registration Portal",
      category: "Cloud",
      image: studentPortalImg,
      description:
        "Designed and deployed a highly available two-tier web application using AWS EC2, Apache, PHP and MariaDB.",
      technologies:
        "AWS EC2 • Apache • PHP • MariaDB",
      github:
        "https://github.com/Malipolishivani330/AWS-2-Tier-Student-Registration-Portal-Deployment",
      demo: "#"
    },

    {
  title: "Personal Portfolio Website",
  category: "Frontend",
  image: portfolioImg,
  description:
    "Developed and deployed a fully responsive portfolio website to showcase projects, technical skills, certifications, internships, and achievements.",
  technologies:
    "React.js • Vite • JavaScript • CSS3 • Git • GitHub • Vercel",
  github:
    "https://github.com/Malipolishivani330/shivani-portfolio",
  demo:
    "https://shivani-portfolio-eta.vercel.app"
}

  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <section id="projects" className="section">

      <h2>Projects</h2>

      <div className="filter-buttons">

        <button
          className="filter-btn"
          onClick={() => setFilter("All")}
        >
          All
        </button>

        <button
          className="filter-btn"
          onClick={() => setFilter("Backend")}
        >
          Backend
        </button>

        <button
          className="filter-btn"
          onClick={() => setFilter("Data Engineering")}
        >
          Data Engineering
        </button>

        <button
          className="filter-btn"
          onClick={() => setFilter("Machine Learning")}
        >
          Machine Learning
        </button>

        <button
          className="filter-btn"
          onClick={() => setFilter("Cloud")}
        >
          Cloud
        </button>

        <button
  className="filter-btn"
  onClick={() => setFilter("Frontend")}
>
  Frontend
</button>

      </div>

      <div className="projects-container">

        {filteredProjects.map((project, index) => (

          <motion.div
            key={index}
            className="project-card"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0px 0px 20px rgba(56,189,248,0.5)"
            }}
            transition={{
              duration: 0.3
            }}
          >
            <img
  src={project.image}
  alt={project.title}
  className="project-image"
/>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p className="tech-stack">
              {project.technologies}
            </p>

            <div className="project-buttons">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn primary">
                  GitHub
                </button>
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn secondary">
                  Live Demo
                </button>
              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;