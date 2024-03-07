import React from 'react';
import { UserInfoCard } from '../components/userInfoCardOvertimeCallBack';
import { OvertimeLogic } from '../utils/api';

export const OvertimeOrderDisplay = () => {
  const overtimeUsersOrder = OvertimeLogic();
  const nightShift = overtimeUsersOrder[0];
  const dayshift = overtimeUsersOrder[1];
  const emergencyCallback = overtimeUsersOrder[2];
  const fourHourCallBack = overtimeUsersOrder[3];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-gray-300 p-8 rounded shadow-md w-full">
        <h1 className="text-4xl font-bold mb-6 text-center text-white bg-indigo-700 p-4 rounded-lg shadow-lg">
          Overtime Callback Order
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">Day Shift</h2>
            <UserInfoCard dayshift={dayshift}></UserInfoCard>
          </div>

          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">Night Shift</h2>
            <UserInfoCard nightShift={nightShift}></UserInfoCard>
          </div>

          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">Emergency Callback</h2>
            <UserInfoCard emergencyCallback={emergencyCallback}></UserInfoCard>
          </div>

          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">Four Hour Callback</h2>
            <UserInfoCard fourHourCallBack={fourHourCallBack}></UserInfoCard>
          </div>

        </div>
      </div>
    </div>
  );
};
