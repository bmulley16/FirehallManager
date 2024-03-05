
import React from 'react';
import { UserInfoCard } from '../components/userInfoCardOvertimeCallBack';
import { OvertimeLogic } from '../utils/api';


export const OvertimeOrderDisplay = () => {
  const overtimeUsersOrder = OvertimeLogic();
  const nightShift = overtimeUsersOrder[0]
  const dayshift = overtimeUsersOrder[1]
  const emergencyCallback =  overtimeUsersOrder[2]
  const fourHourCallBack = overtimeUsersOrder[3]
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Overtime Callback Order</h1>
      <UserInfoCard dayshift={dayshift} ></UserInfoCard>
      <UserInfoCard nightShift={nightShift}></UserInfoCard>
      <UserInfoCard emergencyCallback={emergencyCallback}></UserInfoCard>
      <UserInfoCard fourHourCallBack={fourHourCallBack}></UserInfoCard>

      </div>
    </div>
  );
};


