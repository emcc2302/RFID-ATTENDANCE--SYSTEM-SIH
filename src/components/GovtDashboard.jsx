import React from 'react';
import { Link } from 'react-router-dom';

function GovtDashboard({ schools }) {
    if (!schools) return <p>Loading school data...</p>;

    return (
        <div>
            <h2>Government Dashboard</h2>
            <h3 style={{marginTop: '30px', marginBottom: '15px'}}>All Schools</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {schools.map(school => (
                    <Link key={school.id} to={`/govt/school/${school.id}`} className="card" style={{textDecoration: 'none'}}>
                        <h4>{school.name}</h4>
                        <p style={{color: '#6c757d'}}>Total Students: {school.students.length}</p>
                        <p style={{color: '#6c757d'}}>Total Teachers: {school.teachers.length}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default GovtDashboard;