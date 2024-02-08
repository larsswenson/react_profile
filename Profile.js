import React from 'react';
import profilePic from './profile_pic.jpeg';

// Define Profile component
const Profile = () => {
  return (
    <div>
      <img src={profilePic} alt="Lars" />
      <p>Hello, my name is Lars Swenson.</p>
    </div>
  );
};

// Export Profile component
export default Profile;
