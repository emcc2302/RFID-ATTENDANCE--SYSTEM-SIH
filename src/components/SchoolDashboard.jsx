import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function SchoolDashboard({ schools }) {
    const { schoolId } = useParams();
    const [schoolData, setSchoolData] = useState(null);

    useEffect(() => {
        const foundSchool = schools.find(s => s.id === schoolId);
        if (foundSchool) {
            setSchoolData(foundSchool);
        }
    }, [schoolId, schools]);

    if (!schoolData) return <p>Loading school data...</p>;

    const today = new Date().toISOString().split('T')[0];
    const presentStudents = schoolData.students.filter(student => {
        const todayAttendance = student.attendanceHistory.find(record => record.date === today);
        return todayAttendance && todayAttendance.status === 'Present';
    });
    const middayMealCount = presentStudents.length;

    return (
        <div>
            <h2>Welcome, {schoolData.name} Admin!</h2>
            <div style={{marginTop: '30px'}}>
                <h3>School Summary</h3>
                <div style={{ display: 'flex', gap: '20px', marginTop: '15px', flexWrap: 'wrap' }}>
                    <div className="card">
                        <h4>Total Students</h4>
                        <p>{schoolData.students.length}</p>
                    </div>
                    <div className="card">
                        <h4>Total Teachers</h4>
                        <p>{schoolData.teachers.length}</p>
                    </div>
                    <div className="card">
                        <h4>Total Present Students</h4>
                        <p>{middayMealCount}</p>
                    </div>
                    <div className="card">
                        <h4>Midday Meal Count</h4>
                        <p>{middayMealCount}</p>
                    </div>
                </div>
            </div>

            <h3 style={{marginTop: '40px'}}>Quick Links</h3>
            <div style={{ display: 'flex', gap: '20px', marginTop: '15px', flexWrap: 'wrap' }}>
                <Link to="/school-students" className="card" style={{textDecoration: 'none'}}>
                    <h4 style={{marginBottom: '5px'}}>Manage Students</h4>
                    <p style={{fontSize: '14px'}}>View all student data</p>
                </Link>
                <Link to="/school-teachers" className="card" style={{textDecoration: 'none'}}>
                    <h4 style={{marginBottom: '5px'}}>Manage Teachers</h4>
                    <p style={{fontSize: '14px'}}>View all teacher data</p>
                </Link>
            </div>
        </div>
    );
}

export default SchoolDashboard;