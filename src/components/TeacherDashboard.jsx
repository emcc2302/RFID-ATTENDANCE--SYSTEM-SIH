import React from 'react';

// Mock data for the teacher's view with your provided names and IDs
const teacherDashboardData = {
    totalStudents: 6,
    presentToday: 5,
    absentToday: 1,
    attendancePercentage: '83.3%', // (5/6) * 100
    students: [
        { id: 'CSE234055', name: 'SORIFUL ISLAM SK', class: '3rd year', status: 'Present', time: '09:02 AM' },
        { id: 'CSE234026', name: 'SHAFAQUN NISA', class: '3rd year', status: 'Present', time: '09:15 AM' },
        { id: 'CSE234005', name: 'NISHAT KHANAM', class: '3rd year', status: 'Present', time: '09:15 AM' },
        { id: 'CSE234032', name: 'HUMA MAHFOOZ', class: '3rd year', status: 'Absent', time: '-' },
        { id: 'CSE234046', name: 'TAMIM HASAN', class: '3rd year', status: 'Present', time: '09:12 AM' },
        { id: 'CSE243008', name: 'SUSMITA MAITY', class: '3rd year', status: 'Present', time: '09:07 AM' },
    ],
};

function TeacherDashboard() {
    return (
        <div>
            <h2>Today's Summary</h2>
            <div className="cards">
                <div className="card">
                    <h3>Total Students</h3>
                    <p>{teacherDashboardData.totalStudents}</p>
                </div>
                <div className="card">
                    <h3>Present Today</h3>
                    <p>{teacherDashboardData.presentToday}</p>
                </div>
                <div className="card">
                    <h3>Absent Today</h3>
                    <p>{teacherDashboardData.absentToday}</p>
                </div>
                <div className="card">
                    <h3>Attendance %</h3>
                    <p>{teacherDashboardData.attendancePercentage}</p>
                </div>
                
                <div className="card">
                    <h3>Midday Meal Count</h3>
                    <p>{teacherDashboardData.presentToday}</p>
                </div>
                
            </div>
            <h2 style={{ margin: '20px 0' }}>All Students' Attendance</h2>
            <table>
                <thead>
                    <tr>
                        <th>ROLL NO</th>
                        <th>NAME</th>
                        <th>CLASS</th>
                        <th>STATUS</th>
                        <th>TIME</th>
                    </tr>
                </thead>
                <tbody>
                    {teacherDashboardData.students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.class}</td>
                            <td className={student.status === 'Present' ? 'status-present' : 'status-absent'}>
                                {student.status}
                            </td>
                            <td>{student.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Download Reports Button */}
            <button className="download-reports-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-download">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Reports
            </button>
        </div>
    );
}

export default TeacherDashboard;