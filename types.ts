
export enum UserRole {
  Student = 'Student',
  Admin = 'Admin',
}

export enum View {
  Timetable = 'Jadual',
  Attendance = 'Kehadiran',
  Announcements = 'Pengumuman',
  Calendar = 'Kalendar',
}

export interface Subject {
  id: number;
  day: string;
  time: string;
  name: string;
  shortName: string;
  lecturer: string;
  location: string;
  type?: 'class' | 'break' | 'prayer' | 'assembly' | 'activity' | 'free';
}

export enum AttendanceStatus {
  Present = 'Hadir',
  Absent = 'Tidak Hadir',
}

export interface Student {
  id: number;
  name: string;
  status: AttendanceStatus;
  reason?: string;
}

export interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
}

export interface LearningMaterial {
  id: number;
  subject: string;
  title:string;
  link: string;
  type: 'pdf' | 'link' | 'video';
}

export interface CalendarEvent {
  id: number;
  date: string; // YYYY-MM-DD
  title: string;
  type: 'exam' | 'holiday' | 'extra_class' | 'event';
}
