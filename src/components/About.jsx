import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="   bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About 
          </p>
        </div>
        <p className="text-xl mt-10 ">
          I'm a results-oriented software engineer with expertise in full-stack
          development. <br />
          Proficient in languages like C++, React,Tailwind CSS and JavaScript,{" "}
          <br />
          I bring complex requirements into scalable solutions. Passionate about
          continuous learning,
          <br />I thrive in collaborative environments and am committed to
          staying at the forefront of evolving technologies.
        </p>
        <br />
        <div></div>
        <p className="text-xl mt-10">
          Let's Connect: I'm always eager to connect with like-minded
          professionals and explore new opportunities.
          <br />
          If you're interested in discussing software development, innovative
          projects, or potential collaborations, <br />
          feel free to reach out. Let's build something great together!
        </p>
      </div>
    </div>
  );
};

export default About;
