import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function TeacherProfile({ schools }) {
    const { teacherId } = useParams();
    const navigate = useNavigate();

    // Find the teacher across all schools
    const teacher = schools.flatMap(s => s.teachers).find(t => t.id === teacherId);

    if (!teacher) {
        return <p>Teacher data not found.</p>;
    }
    
    return (
        <div className="student-profile-container">
            <h2 style={{ marginBottom: '20px' }}>Teacher Profile: {teacher.name}</h2>
            
            <div className="profile-card">
                <div className="profile-header">
                    <img src={teacher.photo} alt={teacher.name} className="profile-photo" />
                    <div>
                        <h3>{teacher.name}</h3>
                        <p><strong>Teacher ID:</strong> {teacher.id}</p>
                        <p><strong>Subject:</strong> {teacher.subject}</p>
                    </div>
                </div>
                <div className="profile-details">
                    <p><strong>Age:</strong> {teacher.age}</p>
                    <p><strong>Email:</strong> {teacher.email}</p>
                    <p><strong>Total Teaching Years:</strong> {teacher.teachingYears}</p>
                </div>
            </div>
        </div>
    );
}

export default TeacherProfile;