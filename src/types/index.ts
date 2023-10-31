export type ISODate = string;

export interface PlatoonSchedule {
  id: string;
  calendarId: string;
  title: string;
  category: string;
  start: ISODate;
  end: ISODate;
}

//type alias
export type UserId = string;

export interface User {
  id: UserId;
  username: string;
  password: string;
  phone: string;
  firstName: string;
  lastName: string;
  employeeNumber: number;
}

export interface UserQualifications {
  id: UserId;
  qualifications: {
    [qual: string]: boolean;
  };
}

export interface ProfileButtonProps {
  buttontype: any;
  buttonText: string;
}
