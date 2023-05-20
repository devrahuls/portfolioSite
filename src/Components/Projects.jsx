import Gymate from "../images/gymate-home.webp";
import Raouf from "../images/ecom.webp";
import ProBox from "./ProBox";
import CarRental from "../images/car-rental-full.webp";
import CoinDom from "../images/landing_page.png";

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
                title="Meme Generator"
                img={CarRental}
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
                img={CoinDom}
                description="Check out my personal project's landing page built with Tailwind CSS - a modern, minimalist design with seamless functionality."
                techno1="React"
                techno2="Tailwind"
                code="https://github.com/devrahuls/tailwindcssUI"
                demo="https://devrahuls.github.io/tailwindcssUI/"
                scrollY="-74%"
                icon="✨"
                cName="reversed-proj"
              />

              <ProBox
                title="gymate"
                img={Gymate}
                description="A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."
                techno1="React"
                techno2="Tailwind CSS"
                code="https://github.com/stefvndev/Gymate"
                demo="https://gymate-iota.vercel.app/"
                scrollY="-89%"
                icon="🏋️"
              />

              {/* <ProBox
                title="Raouf Ecommerce"
                img={Raouf}
                description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                techno1="React"
                techno2="Vanila CSS"
                code="https://github.com/stefvndev/Minimalist-E-commerce"
                demo="https://minimalist-e-commerce.vercel.app/"
                scrollY="-71%"
                icon="🛒"
                cName="reversed-proj"
              /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
