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
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Overtime Callback Order</h1>

        {/* Use a flex container to arrange UserInfoCard components */}
        <div className="flex flex-col gap-6">

          {/* Individual UserInfoCard components with specific titles */}
          <div className="bg-gray-200 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Day Shift</h2>
            <UserInfoCard dayshift={dayshift}></UserInfoCard>
          </div>

          <div className="bg-gray-200 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Night Shift</h2>
            <UserInfoCard nightShift={nightShift}></UserInfoCard>
          </div>

          <div className="bg-gray-200 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Emergency Callback</h2>
            <UserInfoCard emergencyCallback={emergencyCallback}></UserInfoCard>
          </div>

          <div className="bg-gray-200 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Four Hour Callback</h2>
            <UserInfoCard fourHourCallBack={fourHourCallBack}></UserInfoCard>
          </div>

        </div>

      </div>
    </div>
  );
};
