import React from 'react';

function TeacherDashboard({ students }) {
    if (!students) return <p>Loading student data...</p>;
    
    const today = new Date().toISOString().split('T')[0];
    const totalStudents = students.length;

    const presentStudents = students.filter(student => {
        const todayAttendance = student.attendanceHistory.find(record => record.date === today);
        return todayAttendance && todayAttendance.status === 'Present';
    });
    const presentCount = presentStudents.length;
    const absentCount = totalStudents - presentCount;
    const attendancePercentage = totalStudents > 0 ? ((presentCount / totalStudents) * 100).toFixed(1) : '0';

    return (
        <div>
            <h2>Today's Summary</h2>
            <div className="cards">
                <div className="card">
                    <h3>Total Students</h3>
                    <p>{totalStudents}</p>
                </div>
                <div className="card">
                    <h3>Present Today</h3>
                    <p>{presentCount}</p>
                </div>
                <div className="card">
                    <h3>Absent Today</h3>
                    <p>{absentCount}</p>
                </div>
                <div className="card">
                    <h3>Midday Meal Count</h3>
                    <p>{presentCount}</p>
                </div>
                <div className="card">
                    <h3>Attendance %</h3>
                    <p>{attendancePercentage}%</p>
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
                    {students.map((student) => {
                        const todayAttendance = student.attendanceHistory.find(record => record.date === today);
                        const status = todayAttendance ? todayAttendance.status : 'N/A';
                        const time = todayAttendance && todayAttendance.status === 'Present' ? '09:00 AM' : '-';

                        return (
                            <tr key={student.id}>
                                <td>{student.rollNumber}</td>
                                <td>{student.name}</td>
                                <td>3rd year</td>
                                <td className={status === 'Present' ? 'status-present' : (status === 'Absent' ? 'status-absent' : '')}>
                                    {status}
                                </td>
                                <td>{time}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
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