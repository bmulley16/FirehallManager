// UserInfoCard.js

import React from 'react';

export const UserInfoCard = () => {
  return (
    <div className="mb-4 p-4 bg-gray-200 rounded">
      <h2 className="text-lg font-semibold">{order}. {user.name}</h2>
      <p className="text-gray-600">{user.role}</p>
    
      {/* Add more user information as needed */}
    </div>
  );
};

export default UserInfoCard;
