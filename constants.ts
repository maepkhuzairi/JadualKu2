
import { Student, Subject, Announcement, LearningMaterial, CalendarEvent, AttendanceStatus } from './types';

export const DAYS_OF_WEEK = ['Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat'];

export const INITIAL_STUDENTS: Student[] = [
  { id: 1, name: 'ADAM MIKAIL BIN AZMAN', status: AttendanceStatus.Present },
  { id: 2, name: 'AHMAD AZIM BIN HASBULLAH', status: AttendanceStatus.Present },
  { id: 3, name: 'CHOO ZHI XUEN', status: AttendanceStatus.Present },
  { id: 4, name: 'DINIE FAKHRIESYA BINTI MOHD FAIZOL', status: AttendanceStatus.Present },
  { id: 5, name: 'FATIMATUZ ZAHRA BINTI ROHALIM', status: AttendanceStatus.Present },
  { id: 6, name: 'GAN WAN XIN', status: AttendanceStatus.Present },
  { id: 7, name: 'HADIFFAQIF BIN HASNULFIKRI', status: AttendanceStatus.Present },
  { id: 8, name: 'MOHAMAD ZURIMAN BIN MOHD ZAMRI', status: AttendanceStatus.Present },
  { id: 9, name: 'MUHAMAD AMIRUL FARID BIN MUHAMAD ZAKI', status: AttendanceStatus.Present },
  { id: 10, name: 'MUHAMMAD AIMAN HARIZ BIN MOHD ROSWADI', status: AttendanceStatus.Present },
  { id: 11, name: 'MUHAMMAD HAKIM BIN FAIZULKARNAEN', status: AttendanceStatus.Present },
  { id: 12, name: 'MUHAMMAD LUTFIL AFIQ BIN DOLKIPLI', status: AttendanceStatus.Present },
  { id: 13, name: 'NOR SYAFIAH IRDINA BINTI AZMAIN', status: AttendanceStatus.Present },
  { id: 14, name: 'NUHR AMNA\' ALIYA BINTI MOHD NORAIMI', status: AttendanceStatus.Present },
  { id: 15, name: 'NUR AIN FATIHA BINTI ZAIN AZMI', status: AttendanceStatus.Present },
  { id: 16, name: 'NUR AISYA ANDRIANA BINTI ABDULLAH', status: AttendanceStatus.Present },
  { id: 17, name: 'NUR ALIA BINTI ABDULLAH', status: AttendanceStatus.Present },
  { id: 18, name: 'NUR SYAFIQAH BINTI MOHD SUFIAN', status: AttendanceStatus.Present },
  { id: 19, name: 'NURUL NAJWA BINTI RAMDZAN', status: AttendanceStatus.Present },
  { id: 20, name: 'PUTERI NUR ANEESA BINTI MOHD SHAFIE', status: AttendanceStatus.Present },
  { id: 21, name: 'TAN KHENG WEI', status: AttendanceStatus.Present },
  { id: 22, name: 'TAN WINTEEN', status: AttendanceStatus.Present },
  { id: 23, name: 'TEE YU TING', status: AttendanceStatus.Present },
];

export const INITIAL_TIMETABLE: Subject[] = [
  // Isnin
  { id: 1, day: 'Isnin', time: '7:30 - 8:10', name: 'Perhimpunan', shortName: 'PER', lecturer: 'Semua Guru', location: 'Dataran', type: 'assembly' },
  { id: 2, day: 'Isnin', time: '8:10 - 8:45', name: 'Geografi', shortName: 'GEO', lecturer: 'Cikgu Rozilah', location: '5 Berlian', type: 'class' },
  { id: 3, day: 'Isnin', time: '8:45 - 9:20', name: 'Bahasa Melayu', shortName: 'BM', lecturer: 'Cikgu Siti Khadijah', location: '5 Berlian', type: 'class' },
  { id: 4, day: 'Isnin', time: '9:20 - 9:55', name: 'Bahasa Inggeris', shortName: 'BI', lecturer: 'Cikgu Faizal', location: '5 Berlian', type: 'class' },
  { id: 5, day: 'Isnin', time: '9:55 - 10:30', name: 'Pendidikan Moral (MA)', shortName: 'PM', lecturer: '', location: '5 Berlian', type: 'class' },
  { id: 6, day: 'Isnin', time: '10:30 - 10:50', name: 'Rehat 1', shortName: 'REHAT', lecturer: '', location: 'Kantin', type: 'break' },
  { id: 7, day: 'Isnin', time: '10:50 - 11:25', name: 'Pendidikan Islam', shortName: 'PAI', lecturer: 'Cikgu Siti Faezah', location: '5 Berlian', type: 'class' },
  { id: 8, day: 'Isnin', time: '11:25 - 12:00', name: 'Pendidikan Moral', shortName: 'PM', lecturer: 'Cikgu Nur Ayuni', location: 'Bilik Moral', type: 'class' },
  { id: 9, day: 'Isnin', time: '12:00 - 12:35', name: 'Sejarah', shortName: 'SJ', lecturer: 'Cikgu Zaimah', location: '5 Berlian', type: 'class' },
  { id: 10, day: 'Isnin', time: '12:35 - 1:10', name: 'Bahasa Inggeris', shortName: 'BI', lecturer: 'Cikgu Faizal', location: '5 Berlian', type: 'class' },
  { id: 11, day: 'Isnin', time: '1:10 - 1:45', name: 'Matematik', shortName: 'MAT', lecturer: 'Cikgu Affah', location: '5 Berlian', type: 'class' },
  { id: 12, day: 'Isnin', time: '1:45 - 2:15', name: 'Solat Zohor', shortName: 'ZOHOR', lecturer: '', location: 'Surau', type: 'prayer' },

  // Selasa
  { id: 13, day: 'Selasa', time: '7:30 - 8:10', name: 'PJPK', shortName: 'PJPK', lecturer: 'Cikgu Muzilnah', location: 'Padang', type: 'activity' },
  { id: 14, day: 'Selasa', time: '8:10 - 8:45', name: 'PJPK', shortName: 'PJPK', lecturer: 'Cikgu Nurul Aini', location: 'Padang', type: 'activity' },
  { id: 15, day: 'Selasa', time: '8:45 - 9:20', name: 'Sejarah', shortName: 'SJ', lecturer: 'Cikgu Zaimah', location: '5 Berlian', type: 'class' },
  { id: 16, day: 'Selasa', time: '9:20 - 9:55', name: 'Bahasa Melayu', shortName: 'BM', lecturer: 'Cikgu Siti Khadijah', location: '5 Berlian', type: 'class' },
  { id: 17, day: 'Selasa', time: '9:55 - 10:30', name: 'Pendidikan Moral (MA)', shortName: 'PM', lecturer: '', location: '5 Berlian', type: 'class' },
  { id: 18, day: 'Selasa', time: '10:30 - 10:50', name: 'Rehat 2', shortName: 'REHAT', lecturer: '', location: 'Kantin', type: 'break' },
  { id: 19, day: 'Selasa', time: '10:50 - 11:25', name: 'Bahasa Inggeris', shortName: 'BI', lecturer: 'Cikgu Faizal', location: '5 Berlian', type: 'class' },
  { id: 20, day: 'Selasa', time: '11:25 - 12:00', name: 'Matematik', shortName: 'MAT', lecturer: 'Cikgu Affah', location: '5 Berlian', type: 'class' },
  { id: 21, day: 'Selasa', time: '12:00 - 12:35', name: 'Aktiviti Fizikal', shortName: 'PA', lecturer: '', location: 'Gimnasium', type: 'activity' },
  { id: 22, day: 'Selasa', time: '12:35 - 1:10', name: 'Sejarah', shortName: 'SJ', lecturer: 'Cikgu Zaimah', location: '5 Berlian', type: 'class' },
  { id: 23, day: 'Selasa', time: '1:10 - 1:45', name: 'Solat Zohor', shortName: 'ZOHOR', lecturer: '', location: 'Surau', type: 'prayer' },
  
  // Rabu
  { id: 24, day: 'Rabu', time: '7:30 - 8:10', name: 'Pendidikan Islam', shortName: 'PAI', lecturer: 'Cikgu Siti Faezah', location: '5 Berlian', type: 'class' },
  { id: 25, day: 'Rabu', time: '8:10 - 8:45', name: 'NILAM / Intervensi', shortName: 'NILAM', lecturer: 'Cikgu Rodiah', location: 'Pusat Sumber', type: 'activity' },
  { id: 26, day: 'Rabu', time: '8:45 - 9:20', name: 'Sains', shortName: 'SC', lecturer: 'Cikgu Siti Zubaidah', location: 'Makmal Sains', type: 'class' },
  { id: 27, day: 'Rabu', time: '9:20 - 9:55', name: 'Sains', shortName: 'SC', lecturer: 'Cikgu Zalipah', location: 'Makmal Sains', type: 'class' },
  { id: 28, day: 'Rabu', time: '9:55 - 10:30', name: 'Pendidikan Moral (MA)', shortName: 'PM', lecturer: '', location: '5 Berlian', type: 'class' },
  { id: 29, day: 'Rabu', time: '10:30 - 10:50', name: 'Rehat 2', shortName: 'REHAT', lecturer: '', location: 'Kantin', type: 'break' },
  { id: 30, day: 'Rabu', time: '10:50 - 11:25', name: 'Bahasa Melayu', shortName: 'BM', lecturer: 'Cikgu Siti Khadijah', location: '5 Berlian', type: 'class' },
  { id: 31, day: 'Rabu', time: '11:25 - 12:00', name: 'Aktiviti Fizikal', shortName: 'PA', lecturer: '', location: 'Gimnasium', type: 'activity' },
  { id: 32, day: 'Rabu', time: '12:00 - 12:35', name: 'Sejarah', shortName: 'SJ', lecturer: 'Cikgu Zaimah', location: '5 Berlian', type: 'class' },
  { id: 33, day: 'Rabu', time: '12:35 - 1:10', name: 'Aktiviti Fizikal', shortName: 'PA', lecturer: '', location: 'Gimnasium', type: 'activity' },
  { id: 34, day: 'Rabu', time: '1:10 - 1:45', name: 'Solat Zohor', shortName: 'ZOHOR', lecturer: '', location: 'Surau', type: 'prayer' },

  // Khamis
  { id: 35, day: 'Khamis', time: '7:30 - 8:10', name: 'Geografi', shortName: 'GEO', lecturer: 'Cikgu Rozilah', location: '5 Berlian', type: 'class' },
  { id: 36, day: 'Khamis', time: '8:10 - 8:45', name: 'Bahasa Inggeris', shortName: 'BI', lecturer: 'Cikgu Faizal', location: '5 Berlian', type: 'class' },
  { id: 37, day: 'Khamis', time: '8:45 - 9:20', name: 'Waktu Terluang', shortName: 'FREE', lecturer: '', location: '5 Berlian', type: 'free' },
  { id: 38, day: 'Khamis', time: '9:20 - 9:55', name: 'PJPK', shortName: 'PJPK', lecturer: 'Cikgu Muzilnah', location: 'Padang', type: 'activity' },
  { id: 39, day: 'Khamis', time: '9:55 - 10:30', name: 'PJPK', shortName: 'PJPK', lecturer: 'Cikgu Nurul Aini', location: 'Padang', type: 'activity' },
  { id: 40, day: 'Khamis', time: '10:30 - 10:50', name: 'Rehat', shortName: 'REHAT', lecturer: '', location: 'Kantin', type: 'break' },
  { id: 41, day: 'Khamis', time: '10:50 - 11:25', name: 'Aktiviti Fizikal', shortName: 'PA', lecturer: 'Cikgu Affah', location: 'Bilik Khas', type: 'activity' },
  { id: 42, day: 'Khamis', time: '11:25 - 12:00', name: 'Matematik', shortName: 'MAT', lecturer: 'Cikgu Affah', location: '5 Berlian', type: 'class' },
  { id: 43, day: 'Khamis', time: '12:00 - 12:35', name: 'Waktu Terluang', shortName: 'FREE', lecturer: '', location: '5 Berlian', type: 'free' },
  { id: 44, day: 'Khamis', time: '12:35 - 1:10', name: 'Waktu Terluang', shortName: 'FREE', lecturer: '', location: '5 Berlian', type: 'free' },
  { id: 45, day: 'Khamis', time: '1:10 - 1:45', name: 'Solat Zohor', shortName: 'ZOHOR', lecturer: '', location: 'Surau', type: 'prayer' },

  // Jumaat
  { id: 46, day: 'Jumaat', time: '7:30 - 8:00', name: 'Sentuhan Nurani', shortName: 'SN', lecturer: 'Semua Guru', location: 'Kelas', type: 'assembly' },
  { id: 47, day: 'Jumaat', time: '8:00 - 9:10', name: 'Geografi', shortName: 'GEO', lecturer: 'Cikgu Rozilah', location: '5 Berlian', type: 'class' },
  { id: 48, day: 'Jumaat', time: '9:10 - 10:20', name: 'Sains', shortName: 'SC', lecturer: 'Cikgu Siti Zubaidah & Zalipah', location: 'Makmal Sains', type: 'class' },
  { id: 49, day: 'Jumaat', time: '10:20 - 10:40', name: 'Rehat', shortName: 'REHAT', lecturer: '', location: 'Kantin', type: 'break' },
  { id: 50, day: 'Jumaat', time: '10:40 - 11:15', name: 'Pendidikan Islam', shortName: 'PAI', lecturer: 'Cikgu Siti Faezah', location: '5 Berlian', type: 'class' },
  { id: 51, day: 'Jumaat', time: '11:15 - 12:20', name: 'Pendidikan Moral', shortName: 'PM', lecturer: 'Cikgu Nur Ayuni', location: 'Bilik Moral', type: 'class' },
];


export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  { id: 1, title: 'Pembatalan Kelas Fizik Kuantum', content: 'Kelas Fizik Kuantum pada hari Isnin (25/7) dibatalkan kerana pensyarah terlibat dengan persidangan antarabangsa. Kelas ganti akan dimaklumkan kemudian.', date: '22 Julai 2024' },
  { id: 2, title: 'Kuiz Matematik Lanjutan', content: 'Satu kuiz akan diadakan pada hari Jumaat ini (29/7) semasa sesi tutorial. Sila buat persediaan rapi.', date: '21 Julai 2024' },
];

export const INITIAL_MATERIALS: LearningMaterial[] = [
    { id: 1, subject: 'Matematik Lanjutan', title: 'Nota Bab 1: Pembezaan', link: '#', type: 'pdf'},
    { id: 2, subject: 'Fizik Kuantum', title: 'Video: Pengenalan kepada Quantum', link: '#', type: 'video'},
    { id: 3, subject: 'Pengaturcaraan Java', title: 'Latihan OOP', link: '#', type: 'link'},
];


const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // getMonth() is zero-based

export const INITIAL_CALENDAR_EVENTS: CalendarEvent[] = [
    { id: 1, date: `${year}-${String(month).padStart(2, '0')}-15`, title: 'Peperiksaan Pertengahan Semester', type: 'exam'},
    { id: 2, date: `${year}-${String(month).padStart(2, '0')}-16`, title: 'Peperiksaan Pertengahan Semester', type: 'exam'},
    { id: 3, date: `${year}-${String(month).padStart(2, '0')}-25`, title: 'Cuti Umum', type: 'holiday'},
    { id: 4, date: `${year}-${String(month + 1).padStart(2, '0')}-05`, title: 'Kelas Ganti Fizik', type: 'extra_class'},
    { id: 5, date: `${year}-${String(month).padStart(2, '0')}-10`, title: 'Hari Sukan', type: 'event'},
];
