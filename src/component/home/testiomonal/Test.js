import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonal } from "../../../dummydata";
import Title from "../../common/title/Title.js";

import "./Test.css";

const Test = () => {
  return (
    <>
      <section className="testimonal padding">
        <div className="container">
          <Title subtitle="testimonal" title="our successfull students" />
          <div className="container grid2">
            {testimonal.map((val) => {
              return (
                <div className="items shadow" key={val.id}>
                  <div className="box flex">
                    <div className="img">
                      <img src={val.cover} alt="" />
                      <FaQuoteLeft className="icon" />
                    </div>
                    <div className="name">
                      <h2>{val.name}</h2>
                      <span>{val.post}</span>
                    </div>
                  </div>
                  <p>{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Test;
