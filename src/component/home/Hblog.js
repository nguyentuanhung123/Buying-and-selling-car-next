import React from "react";
import { FaCalendarAlt, FaComments, FaUser } from "react-icons/fa";
import { blog } from "../../dummydata";
import Title from "../common/title/Title";

const Hblog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <Title subtitle="our blog" title="recent from blog" />
          <div className="grid2">
            {blog.slice(0, 3).map((val) => {
              return (
                <div className="items shadows" key={val.id}>
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <div className="admin flexSB">
                      <span>
                        <FaUser />
                        <label htmlFor="">{val.type}</label>
                      </span>
                      <span>
                        <FaCalendarAlt />
                        <label htmlFor="">{val.date}</label>
                      </span>
                      <span>
                        <FaComments />
                        <label htmlFor="">{val.com}</label>
                      </span>
                    </div>
                    <h1>{val.title}</h1>
                    <p>{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hblog;
