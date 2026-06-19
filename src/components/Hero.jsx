import profilePic from "../assets/shivani.png";
import { ReactTyped } from "react-typed";

function Hero() {

  const getFemaleVoice = () => {
    const voices = window.speechSynthesis.getVoices();

    return (
      voices.find(v => v.name.includes("Female")) ||
      voices.find(v => v.name.includes("Google UK English Female")) ||
      voices.find(v => v.name.includes("Samantha")) ||
      voices.find(v => v.name.includes("Microsoft Zira")) ||
      voices[0]
    );
  };

  const speakWelcome = () => {

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(
  "Hello, I am Shivani Malipoli. Welcome to my portfolio. I am a BCA graduate with a strong foundation in Python, Django, SQL, AWS and Cloud Technologies. This portfolio showcases my projects, virtual internships, certifications and technical skills that reflect my passion for software development and continuous learning. I am actively seeking opportunities in Python Development, Backend Development, Cloud Support and Software Engineering roles in Hyderabad. I invite you to explore my work and download my resume to learn more about my qualifications. Thank you for visiting my portfolio."
);

    speech.voice = getFemaleVoice();
    speech.rate = 0.9;
    speech.pitch = 1.2;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
  };

  const explainProjects = () => {

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(
  "My first project is Employee Management System, developed using Django, Django REST Framework and MySQL. It enables secure employee management with authentication and CRUD operations. My second project is End-to-End Sales Data Analysis, built using Python, SQL, PySpark and Databricks, where I analyzed over fifty thousand sales records to generate business insights. My third project is Fake News Detection, developed using Python, TensorFlow, Keras and Machine Learning techniques to classify news articles. My fourth project is AWS Infrastructure Automation, built using Terraform, AWS and Linux to automate cloud resource provisioning. My fifth project is an AWS Two Tier Student Registration Portal deployed using AWS EC2, Apache, PHP and MariaDB, demonstrating cloud deployment and web application hosting skills."
);

    speech.voice = getFemaleVoice();
    speech.rate = 0.9;
    speech.pitch = 1.2;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
  };

  return (
    <section className="hero" id="hero">

      <div className="hero-left">

        <div className="badge">
          🟢 Open To Work | Hyderabad
        </div>

        <h1>Shivani Malipoli</h1>

        <h2>
          <ReactTyped
            strings={[
              "Python Developer",
              "Django Developer",
              "Backend Developer",
              "Cloud Enthusiast",
              "AWS Learner",
              "Software Engineer"
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h2>

        <p>
          BCA Graduate (CGPA: 8.97) with expertise in Python,
          Django, Django REST Framework, SQL, MySQL,
          AWS, Terraform, Linux, Git and GitHub.
        </p>
        <div className="stats-container">

  <div className="stat-card">
    <h3>5+</h3>
    <span>Projects</span>
  </div>

  <div className="stat-card">
    <h3>8+</h3>
    <span>Certificates</span>
  </div>

  <div className="stat-card">
    <h3>3</h3>
    <span>Internships</span>
  </div>

  <div className="stat-card">
    <h3>8.97</h3>
    <span>CGPA</span>
  </div>

</div>

        <p>
          Seeking opportunities in Python Development,
          Backend Development, Cloud Support and
          Software Engineering.
        </p>

        <div className="button-group">

          <a href="#projects">
            <button className="btn primary">
              View Projects
            </button>
          </a>

          <a href="/SHIVANI_MALIPOLI_RESUME.pdf" download>
            <button className="btn secondary">
              Download Resume
            </button>
          </a>

        </div>

        <div style={{ marginTop: "15px" }}>

          <button
            className="btn primary"
            onClick={speakWelcome}
          >
            🎤 Welcome Voice
          </button>

          <button
            className="btn secondary"
            onClick={explainProjects}
            style={{ marginLeft: "10px" }}
          >
            🤖 Explain Projects
          </button>

        </div>

        <div className="social-links">

          <a
            href="https://www.linkedin.com/in/shivani-malipoli/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Malipolishivani330"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:malipolishivani3027@gmail.com">
            Email
          </a>

        </div>

      </div>

      <div className="hero-right">

  <div className="floating-icons">
    <span className="icon python">🐍</span>
    <span className="icon aws">☁️</span>
    <span className="icon django">💻</span>
    <span className="icon terraform">🚀</span>
    <span className="icon github">⚡</span>

    <img
      src={profilePic}
      alt="Shivani Malipoli"
      className="profile-image"
    />
  </div>

</div>

    </section>
  );
}

export default Hero;