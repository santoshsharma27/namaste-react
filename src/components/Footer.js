import React from "react";
import { Linkedin_URL } from "../utils/constant";

const Footer = () => {
  return (
    <div className="flex items-center justify-center p-5 bg-stone-800 text-stone-200">
      <h4>
        This site is developed by
        <a
          className="px-1"
          href={Linkedin_URL}
          target="_blank"
          title="Santosh Kumar Sharma Linkedin Profile"
        >
          Santosh Kumar Sharma
        </a>
        <strong className="px-1">
          Food<span>Fire</span>
        </strong>
      </h4>
    </div>
  );
};

export default Footer;
