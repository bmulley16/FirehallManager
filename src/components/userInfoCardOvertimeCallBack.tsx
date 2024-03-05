import React from 'react';
import { OvertimeLogic } from '../utils/api';
import { User } from '../types';

export const UserInfoCard = (props: any) => {
 
  const { dayshift, nightShift, emergencyCallback, fourHourCallBack } = props;

  const users = dayshift || nightShift || emergencyCallback || fourHourCallBack || [];

  return (
    <div>
      {users.map((user: User, index: number) => (
        <div key={index} className="mb-4 p-4 bg-gray-200 rounded">
          <h2 className="text-lg font-semibold">{user.firstName} {user.lastName}</h2>
          <p className="text-gray-600">{user.phone}</p>
        </div>
      ))}
    </div>
  );
};



