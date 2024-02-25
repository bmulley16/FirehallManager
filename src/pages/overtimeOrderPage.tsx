
import React from 'react';
import { UserInfoCard } from '../components/userInfoCardOvertimeCallBack';

export const OvertimeOrderDisplay = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
      <UserInfoCard></UserInfoCard>
      </div>
    </div>
  );
};


