import React from 'react';
import { useNavigate } from 'react-router-dom';

function SchoolTeachers({ teachers }) {
    const navigate = useNavigate();

    const handleRowClick = (teacherId) => {
        navigate(`/teacher-profile/${teacherId}`);
    };
    
    if (!teachers) {
        return <p>Loading teacher data...</p>;
    }

    return (
        <div>
            <h2 style={{ marginBottom: '20px' }}>Teachers at SIH Public School</h2>
            <p style={{marginBottom: '20px', color: '#6c757d'}}>Click on a teacher row to view their detailed profile.</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Total Teaching Year</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map(teacher => (
                        <tr 
                            key={teacher.id} 
                            onClick={() => handleRowClick(teacher.id)} 
                            className={teacher.isPrincipal ? 'principal-row' : ''}
                            style={{ cursor: 'pointer' }}
                        >
                            <td>{teacher.id}</td>
                            <td>{teacher.name}</td>
                            <td>{teacher.subject}</td>
                            <td>{teacher.teachingYears}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SchoolTeachers;