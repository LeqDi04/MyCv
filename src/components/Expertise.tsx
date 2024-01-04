import React from 'react';
import { Skill, skillsList } from './SkillType'; // Import the type and the skills list

const Expertise: React.FC = () => {
  // Function to render the proficiency as a visual indicator, e.g., dots
  const renderProficiency = (proficiency: number) => {
    // Create an array with 'proficiency' number of elements and map it to visual elements
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`inline-block rounded-full h-2 w-2 mx-0.5 ${i < proficiency ? 'bg-yellow-500' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>
    );
  };

  return (
    <div className="expertise-section">
      <h2 className="text-xl font-bold mb-4">Expertise</h2>
      <ul className="list-none space-y-2">
        {skillsList.map((skill: Skill) => (
          <li key={skill.name} className="flex justify-between items-center">
            <span>{skill.name}</span>
            {renderProficiency(skill.proficiency)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expertise;
