import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center p-5 bg-stone-800 text-stone-200">
      <h4>
        This site is developed by
        <a
          className="px-1"
          href="https://www.linkedin.com/in/santosh-kumar-sharma-15b132168/"
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
