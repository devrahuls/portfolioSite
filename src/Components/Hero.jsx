import "../../src/style.css";
import Waving from "../images/waving.png";
import Html from "../images/icons/html.svg";
import Css from "../images/icons/css3.svg";
import Js from "../images/icons/javascript.svg";
import React from "../images/icons/react.svg";
import Tailwind from "../images/icons/tailwind.svg";
import Sass from "../images/icons/scss.svg";

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Front-End React Developer</h1>
                <img src={Waving} alt="waving_hand" />
                <p>
                  Hi, I'm Rahul Saw. A passionate Front-end React
                  Developer based in Roorkee, India. 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/rahul-kumar-saw/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/devrahuls"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            {/*  */}
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  <li>
                    <img src={Html} title="HTML5" alt="program_img" />
                  </li>
                  <li>
                    <img src={Css} title="CSS3" alt="program_img" />
                  </li>
                  <li>
                    <img src={Js} title="Javascript" alt="program_img" />
                  </li>
                  <li>
                    <img src={React} title="React JS" alt="program_img" />
                  </li>
                  <li>
                    <img
                      src={Tailwind}
                      title="Tailwind CSS"
                      alt="program_img"
                    />
                  </li>
                  <li>
                    <img src={Sass} title="Sass/Scss" alt="program_img" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
