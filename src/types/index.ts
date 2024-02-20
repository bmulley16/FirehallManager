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

interface Overtime {
  nightShift: boolean;
  emergencyCallback: boolean;
  twelveHourCallback: boolean;
  fourHourCallback: boolean;
  lessThanTwelveHour: boolean;
}

export interface User {
  id: UserId;
  username: string;
  password: string;
  phone: string;
  firstName: string;
  lastName: string;
  employeeNumber: number;
  overtime: boolean;
  nightShift: boolean;
  fourHourCallBack: boolean;
  dayShift: boolean;
  emergencyCallback: boolean;
  platoon: string;
  firstToBeCalled: boolean;
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

export interface Inventory {
  engines: Engine[];
}

export interface Engine {
  pockets: Pocket[];
}

export interface Pocket {
  [key: string]: number;
  // hydrantKeys: number;
  // groundMonitorStand: number;
  // deckMonitorStand: number;
  // streamStraightener: number;
  // straightBoreTips: number;
  // metalBucket: number;
  // chimneyBombs: number;
  // hoseStraps: number;
  // standardStortzConnection: number;
  // angleStortz: number;
  // chimneyNozzle: number;
  // cellarNozzle: number;
  // strainer: number;
  // hydrantGate: number;
}

export interface AdministrationSelector {
  title: string;
}
