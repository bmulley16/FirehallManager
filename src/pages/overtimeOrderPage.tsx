
import React from 'react';
import { UserInfoCard } from '../components/userInfoCardOvertimeCallBack';

export const OvertimeOrderDisplay = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Overtime Callback Order</h1>
      <UserInfoCard></UserInfoCard>
      </div>
    </div>
  );
};


