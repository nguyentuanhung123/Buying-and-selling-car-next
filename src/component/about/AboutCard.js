import React from "react";
import { homeAbout } from "../../dummydata.js";
import Title from "../common/title/Title";
import AWrapper from "./AWrapper.js";
import "./About.css";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/maxresdefault.jpg" alt="" />
          </div>
          <div className="right row">
            <Title
              subtitle="LEARN ANYTHING"
              title="Benefits About Online Learing Expertise"
            />
            <div className="items">
              {homeAbout.map((val) => (
                <div className="item flexSB" key={val.id}>
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AWrapper />
      {/* <div>About Card</div> */}
    </>
  );
};

export default AboutCard;
