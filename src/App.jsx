import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import TeacherDashboard from './components/TeacherDashboard.jsx';
import StudentDashboard from './components/StudentDashboard.jsx';
import Login from './components/Login.jsx';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import StudentProfile from './components/StudentProfile.jsx';
import TeacherStudentList from './components/TeacherStudentList.jsx';
import MonthlyAttendance from './components/MonthlyAttendance.jsx';
import SchoolDashboard from './components/SchoolDashboard.jsx';
import GovtDashboard from './components/GovtDashboard.jsx';
import GovtSchoolView from './components/GovtSchoolView.jsx';
import SchoolTeachers from './components/SchoolTeachers.jsx';
import TeacherProfile from './components/TeacherProfile.jsx';
import sorifulPhoto from './assets/soriful.jpeg';

const generateAttendanceData = () => {
    const attendance = [];
    const today = new Date();
    const year = today.getFullYear();
    for (let month = 0; month < 12; month++) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const formattedDate = date.toISOString().split('T')[0];
            const isWeekend = date.getDay() === 0;
            const status = isWeekend || Math.random() > 0.8 ? 'Absent' : 'Present';
            attendance.push({ date: formattedDate, status });
        }
    }
    return attendance;
};

const schoolsData = [
    {
        id: 'SCH001',
        name: 'SIH Public School',
        address: 'Rural Area of SIH, India',
        teachers: [
            { id: 'TCH100', name: 'Dr. Alok Sharma', age: 55, subject: 'Physics', teachingYears: 30, email: 'alok.sharma@school.com', photo: 'https://via.placeholder.com/150/007bff/ffffff?text=AS', position: 'Principal' },
            { id: 'TCH101', name: 'Dr. Ramesh Sharma', age: 45, subject: 'Mathematics', teachingYears: 20, email: 'ramesh.sharma@school.com', photo: 'https://via.placeholder.com/150/007bff/ffffff?text=RS', position: 'Teacher' },
            { id: 'TCH102', name: 'Ms. Priya Patel', age: 38, subject: 'Physics', teachingYears: 15, email: 'priya.patel@school.com', photo: 'https://via.placeholder.com/150/ffc107/ffffff?text=PP', position: 'Teacher' },
        ],
        students: [
            {
                id: 'CSE234055', name: 'SORIFUL ISLAM SK', rollNumber: 'CSE234055', password: 'password123',
                mobile: '9876543210', email: 'soriful.sk@example.com', photo: sorifulPhoto,
                address: '123 Main St, Kolkata, India', scholarship: true,
                examMarks: { midterm: 85, final: 92, assignments: 90 }, attendanceHistory: generateAttendanceData(),
            },
            {
                id: 'CSE234026', name: 'SHAFAQUN NISA', rollNumber: 'CSE234026', password: 'password123',
                mobile: '9123456789', email: 'shafaqun.nisa@example.com', photo: 'https://via.placeholder.com/150/ffc107/ffffff?text=SN',
                address: '456 Elm Ave, Mumbai, India', scholarship: false,
                examMarks: { midterm: 78, final: 88, assignments: 82 }, attendanceHistory: generateAttendanceData(),
            },
            {
                id: 'CSE234005', name: 'NISHAT KHANAM', rollNumber: 'CSE234005', password: 'password123',
                mobile: '9000111222', email: 'nishat.khanam@example.com', photo: 'https://via.placeholder.com/150/20c997/ffffff?text=NK',
                address: '789 Oak Ln, Delhi, India', scholarship: true,
                examMarks: { midterm: 90, final: 95, assignments: 93 }, attendanceHistory: generateAttendanceData(),
            },
            {
                id: 'CSE234032', name: 'HUMA MAHFOOZ', rollNumber: 'CSE234032', password: 'password123',
                mobile: '8765432109', email: 'huma.mahfooz@example.com', photo: 'https://via.placeholder.com/150/fd7e14/ffffff?text=HM',
                address: '101 Pine Rd, Chennai, India', scholarship: false,
                examMarks: { midterm: 65, final: 70, assignments: 68 }, attendanceHistory: generateAttendanceData(),
            },
            {
                id: 'CSE234046', name: 'TAMIM HASAN', rollNumber: 'CSE234046', password: 'password123',
                mobile: '7654321098', email: 'tamim.hasan@example.com', photo: 'https://via.placeholder.com/150/6f42c1/ffffff?text=TH',
                address: '222 Cedar Dr, Bangalore, India', scholarship: true,
                examMarks: { midterm: 80, final: 85, assignments: 83 }, attendanceHistory: generateAttendanceData(),
            },
            {
                id: 'CSE243008', name: 'SUSMITA MAITY', rollNumber: 'CSE243008', password: 'password123',
                mobile: '8901234567', email: 'susmita.maity@example.com', photo: 'https://via.placeholder.com/150/dc3545/ffffff?text=SM',
                address: '333 Birch Ct, Hyderabad, India', scholarship: false,
                examMarks: { midterm: 72, final: 75, assignments: 70 }, attendanceHistory: generateAttendanceData(),
            },
        ],
    },
    {
        id: 'SCH002',
        name: 'Tech Valley High School',
        address: '505 Progress Rd, New Delhi, India',
        teachers: [
            { id: 'TCH200', name: 'Mr. Vivek Singh', age: 48, subject: 'English', teachingYears: 22, email: 'vivek.s@tvhs.com', photo: 'https://via.placeholder.com/150/28a745/ffffff?text=VS', position: 'Principal' },
            { id: 'TCH201', name: 'Mr. Ankit Verma', age: 35, subject: 'Computer Science', teachingYears: 10, email: 'ankit.v@tvhs.com', photo: 'https://via.placeholder.com/150/28a745/ffffff?text=AV', position: 'Teacher' },
            { id: 'TCH202', name: 'Ms. Smita Rao', age: 40, subject: 'English', teachingYears: 18, email: 'smita.rao@tvhs.com', photo: 'https://via.placeholder.com/150/17a2b8/ffffff?text=SR', position: 'Teacher' },
            { id: 'TCH203', name: 'Mr. Rajesh Kumar', age: 50, subject: 'Chemistry', teachingYears: 25, email: 'rajesh.k@tvhs.com', photo: 'https://via.placeholder.com/150/6610f2/ffffff?text=RK', position: 'Para Teacher' },
        ],
        students: [
            {
                id: 'CSE23001', name: 'Rohan Gupta', rollNumber: 'CSE23001', password: 'password123',
                mobile: '7890123456', email: 'rohan.g@tvhs.com', photo: 'https://via.placeholder.com/150/6c757d/ffffff?text=RG',
                address: '111 Park Lane, New Delhi', scholarship: false,
                examMarks: { midterm: 80, final: 85, assignments: 82 }, attendanceHistory: generateAttendanceData(),
            },
            {
                id: 'CSE23002', name: 'Alia Khan', rollNumber: 'CSE23002', password: 'password123',
                mobile: '8901234567', email: 'alia.k@tvhs.com', photo: 'https://via.placeholder.com/150/e83e8c/ffffff?text=AK',
                address: '222 Green Rd, New Delhi', scholarship: true,
                examMarks: { midterm: 92, final: 95, assignments: 94 }, attendanceHistory: generateAttendanceData(),
            },
        ],
    },
    {
        id: 'SCH003',
        name: 'Modern Girls School',
        address: '123 School St, Pune, India',
        teachers: [
            { id: 'TCH300', name: 'Ms. Meena Varma', age: 58, subject: 'Biology', teachingYears: 32, email: 'meena.v@mgs.com', photo: 'https://via.placeholder.com/150/6f42c1/ffffff?text=MV', position: 'Principal' },
            { id: 'TCH301', name: 'Ms. Sunita Singh', age: 42, subject: 'Biology', teachingYears: 18, email: 'sunita.s@mgs.com', photo: 'https://via.placeholder.com/150/6f42c1/ffffff?text=SS', position: 'Teacher' },
            { id: 'TCH302', name: 'Mr. David Jose', age: 35, subject: 'History', teachingYears: 12, email: 'david.j@mgs.com', photo: 'https://via.placeholder.com/150/20c997/ffffff?text=DJ', position: 'Teacher' },
        ],
        students: [
            {
                id: 'CSE23010', name: 'Sneha Rao', rollNumber: 'CSE23010', password: 'password123',
                mobile: '9876543210', email: 'sneha.r@mgs.com', photo: 'https://via.placeholder.com/150/007bff/ffffff?text=SR',
                address: '333 Elm Rd, Pune', scholarship: true,
                examMarks: { midterm: 88, final: 91, assignments: 89 }, attendanceHistory: generateAttendanceData(),
            },
        ],
    },
    {
        id: 'SCH004',
        name: 'Sunrise Academy',
        address: '456 Hilltop Rd, Mumbai, India',
        teachers: [
            { id: 'TCH400', name: 'Ms. Kavita Joshi', age: 50, subject: 'Arts', teachingYears: 28, email: 'kavita.j@sa.com', photo: 'https://via.placeholder.com/150/17a2b8/ffffff?text=KJ', position: 'Principal' },
            { id: 'TCH401', name: 'Ms. Jaya Desai', age: 50, subject: 'Arts', teachingYears: 28, email: 'jaya.d@sa.com', photo: 'https://via.placeholder.com/150/17a2b8/ffffff?text=JD', position: 'Teacher' },
        ],
        students: [
            {
                id: 'CSE23020', name: 'Aarav Kumar', rollNumber: 'CSE23020', password: 'password123',
                mobile: '9988776655', email: 'aarav.k@sa.com', photo: 'https://via.placeholder.com/150/ffc107/ffffff?text=AK',
                address: '444 Ocean Dr, Mumbai', scholarship: false,
                examMarks: { midterm: 75, final: 78, assignments: 76 }, attendanceHistory: generateAttendanceData(),
            },
        ],
    },
];

const schoolCredentials = { username: 'sih-school', password: 'password123' };
const govtCredentials = { username: 'govt-admin', password: 'password123' };

function App() {
    const [allSchoolsData, setAllSchoolsData] = useState(schoolsData);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const navigate = useNavigate();

    const handleLogin = (role, identifier = '', password = '') => {
        if (role === 'teacher') {
            const teacher = allSchoolsData.flatMap(s => s.teachers).find(t => t.id.toLowerCase() === identifier.toLowerCase());
            if (teacher && password === 'password123') {
                setIsLoggedIn(true);
                setUserRole('teacher');
                setLoggedInUser(teacher);
                navigate('/teacher-dashboard');
            } else {
                alert('Invalid username or password for teacher.');
            }
        } else if (role === 'student') {
            const allStudents = allSchoolsData.flatMap(s => s.students);
            const student = allStudents.find(
                (s) => s.rollNumber.toLowerCase() === identifier.toLowerCase() && s.password === password
            );

            if (student) {
                setIsLoggedIn(true);
                setUserRole('student');
                setLoggedInUser(student);
                navigate('/student-dashboard');
            } else {
                alert('Invalid roll number or password.');
            }
        } else if (role === 'school') {
            const school = allSchoolsData.find(s => s.id.toLowerCase() === identifier.toLowerCase());
            if (school && password === schoolCredentials.password) {
                setIsLoggedIn(true);
                setUserRole('school');
                setLoggedInUser(school);
                navigate(`/school-dashboard/${school.id}`);
            } else {
                alert('Invalid username or password for school.');
            }
        } else if (role === 'govt') {
            if (identifier.toLowerCase() === govtCredentials.username.toLowerCase() && password === govtCredentials.password) {
                setIsLoggedIn(true);
                setUserRole('govt');
                setLoggedInUser(null);
                navigate('/govt-dashboard');
            } else {
                alert('Invalid username or password for government.');
            }
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserRole(null);
        setLoggedInUser(null);
        navigate('/');
    };

    const allStudents = schoolsData.flatMap(s => s.students);
    const allTeachers = schoolsData.flatMap(s => s.teachers);

    const teacherSchool = loggedInUser && loggedInUser.position ? schoolsData.find(s => s.teachers.some(t => t.id === loggedInUser.id)) : null;

    return (
        <div className="dashboard-container">
            {isLoggedIn && <Sidebar userRole={userRole} loggedInUser={loggedInUser} />}
            <div className={`main-content ${!isLoggedIn ? 'login-mode' : ''}`}>
                {isLoggedIn && <Header userRole={userRole} onLogout={handleLogout} />}
                <div className="dashboard-wrapper">
                    <Routes>
                        <Route path="/" element={<Login onLogin={handleLogin} />} />
                        <Route path="/student-profile/:rollNumber" element={<StudentProfile students={allStudents} />} />

                        {isLoggedIn && userRole === 'teacher' && (
                            <>
                                <Route path="/teacher-dashboard" element={<TeacherDashboard students={teacherSchool.students} />} />
                                <Route path="/students" element={<TeacherStudentList students={teacherSchool.students} />} />
                                <Route path="/teacher-profile/:teacherId" element={<TeacherProfile schools={schoolsData} />} />
                                <Route path="/attendance" element={<p>This is the Attendance Page for Teachers</p>} />
                            </>
                        )}
                        {isLoggedIn && userRole === 'student' && (
                            <>
                                <Route path="/student-dashboard" element={<StudentDashboard studentData={loggedInUser} />} />
                                <Route path="/my-profile" element={<StudentProfile students={allStudents} loggedInStudentRoll={loggedInUser?.rollNumber} />} />
                                <Route path="/attendance" element={<MonthlyAttendance studentData={loggedInUser} />} />
                            </>
                        )}
                        {isLoggedIn && userRole === 'school' && (
                            <>
                                <Route path="/school-dashboard/:schoolId" element={<SchoolDashboard schools={schoolsData} />} />
                                <Route path="/school-students" element={<TeacherStudentList students={loggedInUser.students} />} />
                                <Route path="/school-teachers" element={<SchoolTeachers teachers={loggedInUser.teachers} />} />
                                <Route path="/teacher-profile/:teacherId" element={<TeacherProfile schools={schoolsData} />} />
                            </>
                        )}
                        {isLoggedIn && userRole === 'govt' && (
                            <>
                                <Route path="/govt-dashboard" element={<GovtDashboard schools={schoolsData} />} />
                                <Route path="/govt/school/:schoolId" element={<GovtSchoolView schools={schoolsData} />} />
                                <Route path="/teacher-profile/:teacherId" element={<TeacherProfile schools={schoolsData} />} />
                            </>
                        )}
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;