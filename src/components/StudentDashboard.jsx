import React from 'react';

function StudentDashboard({ studentData }) {
    if (!studentData) {
        return <p>Loading student data...</p>;
    }
    
    const today = new Date().toISOString().split('T')[0];

    const weeklyAttendance = studentData.attendanceHistory.filter(rec => new Date(rec.date) <= new Date(today)).slice(-6);

    const presentCount = weeklyAttendance.filter(
        (record) => record.status === 'Present'
    ).length;
    const totalDays = weeklyAttendance.length;
    const attendancePercentage = totalDays > 0 ? ((presentCount / totalDays) * 100).toFixed(1) : 0;

    const chartData = weeklyAttendance.map((record) => (
        <div
            key={record.date}
            className="bar"
            style={{
                height: record.status === 'Present' ? '120px' : '20px',
                backgroundColor: record.status === 'Present' ? '#28a745' : '#dc3545',
            }}
        ></div>
    ));

    return (
        <div>
            <h2>Welcome, {studentData.name}!</h2>
            <div className="cards">
                <div className="card">
                    <h3>My Attendance %</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <p>{attendancePercentage}%</p>
                        <div style={{ textAlign: 'right' }}>
                            <h4 style={{ fontSize: '14px', color: '#6c757d', marginBottom: '5px' }}>Attendance Count</h4>
                            <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#283046' }}>
                                {presentCount}/{totalDays}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 style={{ marginTop: '30px' }}>Weekly Attendance Trend</h2>
            <div className="attendance-graph-container">
                <div className="attendance-graph">{chartData}</div>
                <div className="graph-labels">
                    {weeklyAttendance.map((record) => (
                        <span key={record.date}>{record.date.slice(5)}</span>
                    ))}
                </div>
            </div>

            <h2 style={{ marginTop: '30px' }}>Recent Attendance History</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {weeklyAttendance.map((record, index) => (
                        <tr key={index}>
                            <td>{record.date}</td>
                            <td
                                className={
                                    record.status === 'Present'
                                        ? 'status-present'
                                        : 'status-absent'
                                }
                            >
                                {record.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button className="download-reports-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-download">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Weekly Report
            </button>
        </div>
    );
}

export default StudentDashboard;