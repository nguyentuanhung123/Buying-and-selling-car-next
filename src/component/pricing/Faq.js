import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { faq } from "../../dummydata";
import Title from "../common/title/Title";

const Faq = () => {
  const [click, setClick] = useState(false);

  const toggle = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };
  return (
    <>
      <Title subtitle="FAQS" title="Frequesntly Ask Question" />
      <section className="faq">
        <div className="container">
          {faq.map((val, index) => {
            return (
              <div className="box" key={val.id}>
                <button
                  className="accordion"
                  onClick={() => toggle(index)}
                  key={index}
                >
                  <h2>{val.title}</h2>
                  <span>
                    {click === index ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                </button>
                {click === index ? (
                  <div className="text">
                    <p>{val.desc}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Faq;
