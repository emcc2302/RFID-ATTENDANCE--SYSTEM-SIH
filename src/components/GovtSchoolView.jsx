import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function GovtSchoolView({ schools }) {
    const { schoolId } = useParams();
    const navigate = useNavigate();

    const school = schools.find(s => s.id === schoolId);

    if (!school) return <p>School not found.</p>;

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
            
            <h3 style={{marginTop: '20px'}}>Students</h3>
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