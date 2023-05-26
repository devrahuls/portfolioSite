import ProBox from "./ProBox";
import CarRental from "../images/car-rental.webp";
import memeGenerator from "../images/meme-generator.webp";
import LandingPage from "../images/landing_page.png";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">

            <ProBox
                title="Car Rental"
                img={CarRental}
                description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
                techno1="React"
                techno2="SASS"
                code="https://github.com/devrahuls/carRental"
                demo="https://car-rental.devrahuls.vercel.app/"
                scrollY="-89%"
                icon="🚗"
              />

              <ProBox
                title="Meme Generator"
                img={memeGenerator}
                description="It's a Meme Generator app where users can create their own meme with pre-defined meme templates which is passing by Imgflip API."
                techno1="React"
                techno2="Vanilla CSS"
                code="https://github.com/devrahuls/meme-generator"
                demo="https://meme-generator69.netlify.app/"
                scrollY="-83%"
                icon="🖼️"
              />

              <ProBox
                title="Landing Page"
                img={LandingPage}
                description="Check out my personal project's landing page built with Tailwind CSS - a modern, minimalist design with seamless functionality."
                techno1="React"
                techno2="Tailwind CSS"
                code="https://github.com/devrahuls/tailwindcssUI"
                demo="https://devrahuls.github.io/tailwindcssUI/"
                scrollY="-74%"
                icon="✨"
                cName="reversed-proj"
              />

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
