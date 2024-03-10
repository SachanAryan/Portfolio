import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Aspiring IT professional with a strong foundation in computer science and hands-on experience in software development through academic projects. Eager to contribute innovative solutions and grow in a dynamic tech environment.
        </p>

        <br />

        <p className="text-xl">
          I made the two major projects in my college time. The first one is Cab Management System and the second is EduHub(in this project the junior student can find the notes and question paper as per his/her subjects and the senior can upload the notes and question paper and the junior can do direct message to the senior for the suggestion and it's a paid service).
        </p>
      </div>
    </div>
  );
};

export default About;
