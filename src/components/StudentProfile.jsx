import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function StudentProfile({ students, loggedInStudentRoll }) {
    const { rollNumber } = useParams();
    const navigate = useNavigate();

    const targetRoll = rollNumber || loggedInStudentRoll;
    const student = students.find(s => s.rollNumber.toLowerCase() === targetRoll?.toLowerCase());

    if (!student) {
        return <p>Student data not found.</p>;
    }

    const examMarksList = Object.entries(student.examMarks).map(([exam, score]) => (
        <li key={exam}><strong>{exam.charAt(0).toUpperCase() + exam.slice(1)}:</strong> {score}</li>
    ));

    return (
        <div className="student-profile-container">
            <h2 style={{ marginBottom: '20px' }}>Student Profile: {student.name}</h2>
            
            {rollNumber && (
                <button 
                    onClick={() => navigate('/students')} 
                    style={{ 
                        padding: '8px 15px', 
                        marginBottom: '20px', 
                        background: '#6c757d', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    &larr; Back to Student List
                </button>
            )}

            <div className="profile-card">
                <div className="profile-header">
                    <img src={student.photo} alt={student.name} className="profile-photo" />
                    <div>
                        <h3>{student.name}</h3>
                        <p><strong>Roll No:</strong> {student.rollNumber}</p>
                        <p><strong>Class:</strong> 3rd year</p>
                    </div>
                </div>
                <div className="profile-details">
                    <p><strong>Mobile:</strong> {student.mobile}</p>
                    <p><strong>Email:</strong> {student.email}</p>
                    <p><strong>Address:</strong> {student.address}</p>
                    <p><strong>Scholarship:</strong> {student.scholarship ? 'Yes' : 'No'}</p>
                    <div className="exam-marks">
                        <h4>Previous Exam Marks:</h4>
                        <ul>
                            {examMarksList}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentProfile;