import React, { useState, useEffect } from 'react';

function MonthlyAttendance({ studentData }) {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonth = today.getMonth(); // 0-indexed month
    const [selectedMonthIndex, setSelectedMonthIndex] = useState(currentMonth);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (studentData && studentData.attendanceHistory.length > 0) {
            const history = studentData.attendanceHistory;
            const filtered = history.filter(record => {
                const recordDate = new Date(record.date);
                return recordDate.getMonth() === selectedMonthIndex;
            });
            setFilteredData(filtered);
        }
    }, [studentData, selectedMonthIndex]);

    const presentCount = filteredData.filter(
        (record) => record.status === 'Present'
    ).length;
    const totalDays = filteredData.length;
    const attendancePercentage = totalDays > 0 ? ((presentCount / totalDays) * 100).toFixed(1) : 0;

    const chartData = filteredData.map(record => (
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
        <div className="monthly-attendance-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', marginBottom: '20px' }}>
                <div>
                    <h2>Monthly Attendance for {studentData.name}</h2>
                    <p style={{ fontSize: '14px', color: '#666' }}>{formattedDate}</p>
                </div>
            </div>

            <div className="date-filter-box card" style={{ paddingBottom: '10px' }}>
                <h3>Select Month</h3>
                <div className="month-buttons">
                    {months.map((month, index) => (
                        <button
                            key={month}
                            onClick={() => setSelectedMonthIndex(index)}
                            className={index === selectedMonthIndex ? 'active-month-btn' : ''}
                        >
                            {month.substring(0, 3)}
                        </button>
                    ))}
                </div>
            </div>

            <div className="cards" style={{ marginTop: '30px' }}>
                <div className="card">
                    <h3>Filtered Attendance %</h3>
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

            <div className="attendance-graph-container" style={{ marginTop: '30px' }}>
                <div className="attendance-graph">{chartData}</div>
                <div className="graph-labels">
                    {filteredData.map(record => (
                        <span key={record.date}>{record.date.slice(5, 7)}-{record.date.slice(8)}</span>
                    ))}
                </div>
            </div>

            {filteredData.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(record => (
                            <tr key={record.date}>
                                <td>{record.date}</td>
                                <td className={record.status === 'Present' ? 'status-present' : 'status-absent'}>
                                    {record.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p style={{ marginTop: '20px', textAlign: 'center', color: '#666' }}>No attendance data available for the selected month.</p>
            )}
        </div>
    );
}

export default MonthlyAttendance;