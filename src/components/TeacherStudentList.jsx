import React from 'react';
import { useNavigate } from 'react-router-dom';

function TeacherStudentList({ students }) {
    const navigate = useNavigate();

    const handleRowClick = (rollNumber) => {
        navigate(`/student-profile/${rollNumber}`);
    };

    return (
        <div>
            <h2 style={{ marginBottom: '20px' }}>All Students</h2>
            <p style={{marginBottom: '20px', color: '#6c757d'}}>Click on a student row to view their detailed profile.</p>
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
                    {students.map((student) => (
                        <tr key={student.id} onClick={() => handleRowClick(student.rollNumber)} style={{ cursor: 'pointer' }}>
                            <td>{student.rollNumber}</td>
                            <td>{student.name}</td>
                            <td>3rd year</td>
                            <td>{student.scholarship ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TeacherStudentList;