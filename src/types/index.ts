export type ISODate = string;

export interface PlatoonSchedule {
  id: string;
  calendarId: string;
  title: string;
  category: string;
  start: ISODate;
  end: ISODate;
}
