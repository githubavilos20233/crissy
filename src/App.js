import React, { useRef, useState, useEffect } from "react";
import Typewriter from "./Typewriter"; // import the new component
import "./App.css";
import requeasyPreview from "./img/requeasy.png";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function App() {
  const [menuActive, setMenuActive] = useState(false);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      const yOffset = -80; // fixed navbar height
      const y =
        ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuActive(false); // close menu on link click (mobile)
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section-container");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      <nav>
        <img
          src="cris-logo.png"
          alt="Logo"
          className="logo"
          onClick={() => {
            scrollToRef(homeRef);
            setMenuActive(false);
          }}
        />

        <div className={`nav-buttons ${menuActive ? "active" : ""}`}>
          <button onClick={() => scrollToRef(homeRef)}>Home</button>
          <button onClick={() => scrollToRef(projectsRef)}>Projects</button>
          <button onClick={() => scrollToRef(contactRef)}>Contact</button>
        </div>

        <div
          className="hamburger"
          onClick={() => setMenuActive(!menuActive)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setMenuActive(!menuActive);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      <div className="container">
        <section ref={homeRef}>
          <pre>
            <Typewriter text={`  print("Hello World!") I am!`} speed={100} />
          </pre>
          <h1 className="wdxl-lubrifont-tc-regular">Christian Soliva</h1>
          <img
            src="cris-logo.jpg"
            alt="Christian Soliva"
            className="profile-photo"
          />
          <p>Welcome to my personal space! Here's a little about me.</p>
          <p style={{ textAlign: "justify" }}>
            I believe modern problems require modern solutions. I hold a
            Bachelor's degree in Information Systems, majoring in Business
            Analytics. I'm passionate about creating web applications and am
            open to opportunities in data analytics, including career growth and
            mentorship.
          </p>

          <a href="/img/RESUME.pdf" download class="resume-download">
            Download Resume (PDF)
          </a>
        </section>

        <section ref={projectsRef} className="projects-section">
          <h2>Project</h2>
          <a
            href="https://requeasy.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            https://requeasy.netlify.app/
          </a>
          <div className="project-preview">
            <img src={requeasyPreview} alt="Requeasy website preview" />
            <p
              style={{
                textAlign: "justify",
                color: "black",
                fontWeight: "normal",
                textIndent: "2em",
              }}
            >
              <span style={{ color: "#1bc7d6", fontWeight: "bold" }}>
                Requeasy
              </span>{" "}
              This web app helps the people of Barangay San Jose easily request
              official documents online. It has simple sections about the
              barangay, the services offered, important contacts, and how to
              reach them. Users can quickly choose and request documents like
              Barangay Clearance, Certificate of Residency, and Business Permit
              by clicking clear buttons. Made with React and Bootstrap, the app
              has a fixed menu, smooth scrolling, and looks good on all devices.
              It makes asking for documents faster and easier for everyone in
              the community.
            </p>
          </div>
        </section>

        <section ref={contactRef} className="contact-section">
          <h2>Contact Me</h2>
          <p>
            <FaEnvelope className="contact-icon" /> Email:
            christiansoliva91@gmail.com
          </p>
          <p>
            <FaPhone className="contact-icon" /> Phone: 09503284027
          </p>
          <p>
            <FaLinkedin className="contact-icon" />
            <a
              href="https://www.linkedin.com/in/christian-soliva-55b2ab30a/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn Profile
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
