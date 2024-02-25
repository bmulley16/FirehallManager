import React from 'react';
import { OvertimeLogic } from '../utils/api';

export const UserInfoCard = () => {
  const overtimeUsersOrder = OvertimeLogic();
console.log(overtimeUsersOrder)
  return (
    <div>
      {overtimeUsersOrder.map((user, index) => (
        <div key={index} className="mb-4 p-4 bg-gray-200 rounded">
          <h2 className="text-lg font-semibold">{user.firstName} {user.lastName}</h2>
          <p className="text-gray-600">{user.phone}</p>

        </div>
      ))}
    </div>
   
  );
};


