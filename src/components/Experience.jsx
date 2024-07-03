import React from "react";

import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import javascriptLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import githubLogo from "../assets/github.png";
import tailwindLogo from "../assets/tailwind.png";
import php8Logo from "../assets/php8.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      logoSrc: htmlLogo,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      logoSrc: cssLogo,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      logoSrc: javascriptLogo,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      logoSrc: reactLogo,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      logoSrc: tailwindLogo,
      title: "Tailwind CSS",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      logoSrc: php8Logo,
      title: "PHP 8",
      style: "shadow-violet-500",
    },
    {
      id: 7,
      logoSrc: githubLogo,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, logoSrc, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={logoSrc} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;