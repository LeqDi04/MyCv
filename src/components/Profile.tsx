import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
    <img src='{profileimage}' alt="Profile" className="w-32 h-32 rounded-full border-4 border-white mt-4" />
      <h1 className="text-xl font-bold my-2">Lê Quốc Duy</h1>
      <p className="text-sm">Web Developer</p>
    </div>
  );
};

export default Profile;
