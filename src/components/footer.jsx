import React from "react";

import img1 from "../assets/1.svg"

const Footr = () => {
  return (
    <>
      <img className="w-100" src={img1} alt="" />

      <footer className="text-center text-lg-start bg-success text-light">
        <div className="text-center p-3">
          Made By: {" "}
          <a
            className="text-light text-shadow-light text-decoration-none"
            href="#"
          >
            Mohamed Hossam
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footr;
