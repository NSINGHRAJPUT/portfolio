// Experience.js
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Web Designer",
      company: "Soft Company",
      duration: "2000 - 2050",
      description: "Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam"
    },
    {
      title: "Web Designer",
      company: "Soft Company",
      duration: "2000 - 2050",
      description: "Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam"
    },
    {
      title: "Web Designer",
      company: "Soft Company",
      duration: "2000 - 2050",
      description: "Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam"
    },
    // Add more experiences as needed
  ];

  return (
    <div className=" p-10 w-[95%] px-0">
      <h2 className="text-white text-4xl font-bold mb-10">Experience</h2>
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-white pl-5">
            <div className="relative">
              <div className="absolute -left-5 top-0 text-white rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-6">
                  <path strokeLinecap="line" strokeLinejoin="line" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <div className="text-white text-2xl font-bold ml-6">{exp.title}</div>
              <div className="text-gray-300 text-lg">{exp.company} | {exp.duration}</div>
              <div className="text-gray-400 mt-2">{exp.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
