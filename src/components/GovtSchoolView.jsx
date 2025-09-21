import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function GovtSchoolView({ schools }) {
    const { schoolId } = useParams();
    const navigate = useNavigate();

    const school = schools.find(s => s.id === schoolId);

    if (!school) return <p>School not found.</p>;

    // Calculate overall attendance for the school
    const allStudentRecords = school.students.flatMap(student => student.attendanceHistory);
    const totalPresentRecords = allStudentRecords.filter(record => record.status === 'Present').length;
    const totalRecords = allStudentRecords.length;
    const overallAttendance = totalRecords > 0 ? ((totalPresentRecords / totalRecords) * 100).toFixed(1) : 0;

    // Calculate today's attendance for the Midday Meal Count
    const today = new Date().toISOString().split('T')[0];
    const presentStudentsToday = school.students.filter(student => {
        const todayAttendance = student.attendanceHistory.find(record => record.date === today);
        return todayAttendance && todayAttendance.status === 'Present';
    });
    const middayMealCount = presentStudentsToday.length;
    
    const handleStudentRowClick = (rollNumber) => {
        navigate(`/student-profile/${rollNumber}`);
    };
    
    const handleTeacherRowClick = (teacherId) => {
        navigate(`/teacher-profile/${teacherId}`);
    };

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                <button 
                    onClick={() => navigate('/govt-dashboard')} 
                    style={{ 
                        padding: '8px 15px', 
                        background: '#6c757d', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginRight: '20px'
                    }}
                >
                    &larr; Back to All Schools
                </button>
                <h2>{school.name} Details</h2>
            </div>
            
            {/* NEW: School Summary Cards for Government Portal */}
            <div style={{marginTop: '30px'}}>
                <h3>School Summary</h3>
                <div style={{ display: 'flex', gap: '20px', marginTop: '15px', flexWrap: 'wrap' }}>
                    <div className="card">
                        <h4>Total Students</h4>
                        <p>{school.students.length}</p>
                    </div>
                    <div className="card">
                        <h4>Total Teachers</h4>
                        <p>{school.teachers.length}</p>
                    </div>
                    <div className="card">
                        <h4>Midday Meal Count</h4>
                        <p>{middayMealCount}</p>
                    </div>
                    <div className="card">
                        <h4>Overall Attendance %</h4>
                        <p>{overallAttendance}%</p>
                    </div>
                </div>
            </div>

            <h3 style={{marginTop: '40px'}}>Students</h3>
            <table>
                <thead>
                    <tr>
                        <th>ROLL NO</th>
                        <th>NAME</th>
                        <th>CLASS</th>
                        <th>SCHOLARSHIP</th>
                    </tr>
                </thead>
                <tbody>
                    {school.students.map(student => (
                        <tr key={student.id} onClick={() => handleStudentRowClick(student.rollNumber)} style={{ cursor: 'pointer' }}>
                            <td>{student.rollNumber}</td>
                            <td>{student.name}</td>
                            <td>3rd year</td>
                            <td>{student.scholarship ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3 style={{marginTop: '40px'}}>Teachers</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Subject</th>
                        <th>Teaching Year</th>
                    </tr>
                </thead>
                <tbody>
                    {school.teachers.map(teacher => (
                        <tr 
                            key={teacher.id} 
                            onClick={() => handleTeacherRowClick(teacher.id)} 
                            className={teacher.position === 'Principal' ? 'principal-row' : ''}
                            style={{ cursor: 'pointer' }}
                        >
                            <td>{teacher.id}</td>
                            <td>{teacher.name}</td>
                            <td>{teacher.position}</td>
                            <td>{teacher.subject}</td>
                            <td>{teacher.teachingYears}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GovtSchoolView;