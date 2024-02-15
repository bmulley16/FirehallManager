import { useState } from "react";

export function EditShiftCallInPage() {

  // const labels = {
  //   dayShift: 'Day Shift'
  // }

    const [staffingData, setStaffingData] = useState({
        dayShift: 0,
        nightShift: 0,
        eightHourShift: 0,
        emergencyCallback: 0,
        fourHourCallback: 0,
      });
    
      const handleInputChange = (callbackType:string , value :number) => {
        setStaffingData({
          ...staffingData,
          [callbackType]: value,
        });
      };
    
      return (
        <div className="container mx-auto mt-8">
          <h1 className="text-4xl font-bold mb-4">Staffing Overtime Callbacks</h1>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.keys(staffingData).map((callbackType) => (
                <div key={callbackType} className="p-4 border rounded-lg">
                    <label className="block font-bold mb-2">{`${callbackType} Count:`}</label>
                    <input
                        type="number"
                        value={staffingData[callbackType as keyof typeof staffingData]}
                        onChange={(e) => handleInputChange(callbackType as keyof typeof staffingData, parseInt(e.target.value, 10) || 0)}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
            ))}
        </div>
    
          <div className="mt-8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </div>
      );
    };
    
