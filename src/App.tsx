import React from 'react';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Expertise from './components/Expertise';
import About from './components/About';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-center p-10">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          <div className="bg-blue-600 text-white p-8 md:w-1/3">
            <Profile />
            <Contact />
            <Expertise />
          </div>
          <div className="p-8 md:w-2/3 space-y-6">
            <About />
            <Education />
            <WorkExperience />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
