import React from 'react';
import { OvertimeLogic } from '../utils/api';
import { User } from '../types';

export const UserInfoCard = (props: any) => {
 
  const { dayshift, nightShift, emergencyCallback, fourHourCallBack } = props;

  const users = dayshift || nightShift || emergencyCallback || fourHourCallBack || [];

  return (
    <div className='max-w-full max-h-full overflow-y-auto'>
      {users.map((user: User, index: number) => (
        <div key={index} className="mb-4 p-4 bg-slate-300 rounded flex justify-between">
          <h2 className="text-lg font-semibold">{user.firstName} {user.lastName}</h2>
          <p className="text-gray-600 ">{user.phone}</p>
        </div>
      ))}
    </div>
  );
};



