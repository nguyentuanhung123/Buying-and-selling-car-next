import React from "react";
import "./Hero.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import Title from "../../common/title/Title.js";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title
              subtitle="WELCOME TO ACADEMIA"
              title="Best Online Education Expertise"
            />
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <FaLongArrowAltRight />
              </button>
              <button>
                VIEW COURSE <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="marigin"></div>
    </>
  );
};

export default Hero;
