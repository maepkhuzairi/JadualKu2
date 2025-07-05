
import React, { useState, useEffect } from 'react';
import { UserRole, View, Subject, Student, Announcement, LearningMaterial, CalendarEvent } from './types';
import { INITIAL_STUDENTS, INITIAL_TIMETABLE, INITIAL_ANNOUNCEMENTS, INITIAL_MATERIALS, INITIAL_CALENDAR_EVENTS } from './constants';
import BottomNav from './components/BottomNav';
import TimetableView from './components/TimetableView';
import AttendanceView from './components/AttendanceView';
import AnnouncementsView from './components/AnnouncementsView';
import CalendarView from './components/CalendarView';
import { SunIcon, MoonIcon, UserIcon, AdminIcon } from './components/Icons';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<UserRole>(UserRole.Student);
  const [currentView, setCurrentView] = useState<View>(View.Timetable);

  const [timetable, setTimetable] = useState<Subject[]>(INITIAL_TIMETABLE);
  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);
  const [announcements, setAnnouncements] = useState<Announcement[]>(INITIAL_ANNOUNCEMENTS);
  const [materials, setMaterials] = useState<LearningMaterial[]>(INITIAL_MATERIALS);
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>(INITIAL_CALENDAR_EVENTS);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  const toggleRole = () => {
      setUserRole(prev => prev === UserRole.Admin ? UserRole.Student : UserRole.Admin);
      // Show a toast-like notification
      const roleName = userRole === UserRole.Student ? "Admin" : "Pelajar";
      const notification = document.createElement('div');
      notification.className = 'fixed top-24 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg animate-fade-in-out z-50';
      notification.textContent = `Mod ditukar kepada ${roleName}`;
      document.body.appendChild(notification);
      setTimeout(() => {
          notification.remove();
      }, 3000);
  };
  
  const addAnnouncement = (newAnnouncement: Announcement) => {
    setAnnouncements(prev => [newAnnouncement, ...prev]);
  };

  const addMaterial = (newMaterial: LearningMaterial) => {
    setMaterials(prev => [...prev, newMaterial]);
  };

  const renderView = () => {
    switch (currentView) {
      case View.Timetable:
        return <TimetableView timetable={timetable} userRole={userRole} />;
      case View.Attendance:
        return <AttendanceView students={students} setStudents={setStudents} userRole={userRole} />;
      case View.Announcements:
        return <AnnouncementsView announcements={announcements} addAnnouncement={addAnnouncement} materials={materials} addMaterial={addMaterial} userRole={userRole} />;
      case View.Calendar:
        return <CalendarView events={calendarEvents} userRole={userRole} setEvents={setCalendarEvents} />;
      default:
        return <TimetableView timetable={timetable} userRole={userRole} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 font-sans text-gray-800 dark:text-gray-200">
      <div className="max-w-md mx-auto h-screen flex flex-col shadow-2xl bg-white dark:bg-slate-800">
        <header className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-slate-700">
          <div>
            <h1 className="text-xl font-bold text-primary-600 dark:text-primary-400">JadualKu</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">5 Berlian</p>
          </div>
          <div className="flex items-center space-x-3">
             <button onClick={toggleRole} className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300">
               {userRole === UserRole.Student ? <UserIcon /> : <AdminIcon />}
             </button>
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-yellow-500 dark:text-yellow-400">
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </header>

        <main className="flex-grow overflow-y-auto p-4">
            {renderView()}
        </main>
        
        <BottomNav currentView={currentView} setCurrentView={setCurrentView} />
      </div>
       <style>{`
          @keyframes fade-in-out {
              0% { opacity: 0; transform: translateY(-20px); }
              10% { opacity: 1; transform: translateY(0); }
              90% { opacity: 1; transform: translateY(0); }
              100% { opacity: 0; transform: translateY(-20px); }
          }
          .animate-fade-in-out {
              animation: fade-in-out 3s ease-in-out forwards;
          }
      `}</style>
    </div>
  );
};

export default App;
