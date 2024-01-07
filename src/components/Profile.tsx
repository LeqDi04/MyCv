import React from 'react';
import AVT from '/Image/avt.jpg';

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={AVT} alt="Profile" className="w-32 h-32 rounded-full border-4 border-white mt-4 object-cover" />
      <h1 className="text-xl font-bold my-2">Lê Quốc Duy</h1>
      <p className="text-sm">Web Developer</p>
    </div>
  );
};

export default Profile;
