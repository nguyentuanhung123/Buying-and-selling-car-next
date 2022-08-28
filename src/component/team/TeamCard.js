import React from "react";
import { team } from "../../dummydata";

import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const TeamCard = () => {
  return (
    <>
      {team.map((val) => {
        return (
          <div className="items shadow" key={val.cover}>
            <div className="img">
              <img src={val.cover} alt="" />
              <div className="overlay">
                <FaFacebookF className="icon" />

                <FaInstagram className="icon" />

                <FaTwitter className="icon" />

                <FaTiktok className="icon" />
              </div>
            </div>
            <div className="details">
              <h2>{val.name}</h2>
              <p>{val.work}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TeamCard;
