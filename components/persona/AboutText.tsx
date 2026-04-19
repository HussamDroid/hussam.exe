import React from "react";

const AboutText = () => {
  return (
    <div className="!bg-transparent border !p-10 rounded-[48px] border-white/10 flex flex-col justify-center gap-6 items-start">
      <p className="text-gray-400 text-lg leading-relaxed font-medium">
        I’m a <span className="text-blue-400"> Computer Science student </span> based in <span className="text-blue-400"> Doha </span>, focused on building things that actually solve problems instead of just sitting in a GitHub repo. 
        I’m more interested in real-world impact than textbook projects, so most of what I work on is aimed at being useful, not just functional. 
        Lately, my focus has been on <span className="text-blue-400"> Machine Learning and AI, </span> especially where data can drive decisions or improve how systems behave. 
        I’ve worked on projects like <span className="text-blue-400"> recommendation systems and web platforms, </span> and I’m always trying to take them a step further beyond just “it works” into something people can actually use.
      </p>
    </div>
  );
};

export default AboutText;