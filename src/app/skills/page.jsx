import React from 'react';
import Layout from '../_Layout/Layout';

const skillsData = [
  { name: 'HTML', percentage: 95, color: 'bg-green-600' },
  { name: 'CSS', percentage: 85, color: 'bg-yellow-500' },
  { name: 'PHP', percentage: 90, color: 'bg-red-600' },
  { name: 'Javascript', percentage: 90, color: 'bg-red-600' },
  { name: 'Angular JS', percentage: 95, color: 'bg-green-600' },
  { name: 'Wordpress', percentage: 85, color: 'bg-blue-600' },
];

const Skills = () => {
  return (
    <div className="p-5 w-[95%] bg-gray-800 text-white rounded-lg w-fit">
      <h2 className="text-2xl mb-2 font-bold">Skills</h2>
      <div className="flex flex-wrap gap-5">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex-1 min-w-[45%] mb-5">
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`${skill.color} h-2.5 rounded-full`}
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
