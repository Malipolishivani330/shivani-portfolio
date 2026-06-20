import { motion } from "framer-motion";

function Certifications() {

  const certifications = [

    {
      title: "Python Full Stack Development",
      issuer: "PR Softwares Training Institute",
      year: "2025",
      icon: "🐍",
      link: "https://drive.google.com/file/d/1gQqEy9T_nD23VC1uCxtzb9wCj8TLSh-H/view?usp=sharing"
    },

    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS",
      year: "2026",
      icon: "☁️",
      link: "https://drive.google.com/file/d/1EKs3B0YLSY8wUwfPxmCXUHDidAfvWk2_/view?usp=sharing"
    },

    {
      title: "Amazon ECS",
      issuer: "Kodekloud",
      year: "2026",
      icon: "🚀",
      link: "https://learn.kodekloud.com/certificate/aebf0106-a7c8-4795-8b5f-0f62cca34642"
    },

    
    {
      title: "AI Fundamentals",
      issuer: "IBM SkillsBuild",
      year: "2025",
      icon: "🤖",
      link: "https://drive.google.com/file/d/1KjDRQpykZaJnr9GTaPVMNIPD5bV4awCI/view?usp=sharing"
    },

    {
      title: "Data Engineering And Big Data",
      issuer: "HCL GUVI",
      year: "2026",
      icon: "📊",
      link: "https://www.guvi.in/share-certificate/p83808q97Tme71u7jS"
    },
    {
      title: "Deloitte Data Analytics Simulation",
      issuer: "Forage",
      year: "2025",
      icon: "📊",
      link: "https://drive.google.com/file/d/1CWSJa9jhajD36cMcC4SP9XpLNEmh6d1i/view?usp=sharing"
    },

    {
      title: "AWS Solutions Architecture Job Simulation – Forage",
       issuer: "Forage",
      year: "2025",
      icon: "🏗️",
      link: "https://drive.google.com/file/d/16-xExeyCFi41Pm2GkHTjY2NHAqH9fK2v/view?usp=sharing"
    },

    {
      title: "Accenture Nordics Software Engineering Simulation",
      issuer: "Forage",
      year: "2025",
      icon: "💻",
      link: "https://drive.google.com/file/d/1kLTIGICKwk-WpiAyFzZNlkNl8bp6Sf25/view?usp=sharing"
    }

  ];

  return (
    <section id="certifications" className="section">

      <h2>
  Certifications (8)
</h2>
      <div className="certifications-container">

        {certifications.map((cert, index) => (

          <motion.div
            key={index}
            className="certificate-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >

            <div className="cert-icon">
              {cert.icon}
            </div>

            <h3>{cert.title}</h3>

<p className="issuer">
  Certificate
</p>

            <span className="cert-year">
              {cert.year}
            </span>

            <br />
            <br />

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;